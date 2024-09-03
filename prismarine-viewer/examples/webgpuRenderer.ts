import * as THREE from 'three';
import { BlockFaceType } from './shared';
import * as tweenJs from '@tweenjs/tween.js';
import { cubePositionOffset, cubeUVOffset, cubeVertexArray, cubeVertexCount, cubeVertexSize } from './CubeDef';
import VertShader from './Cube.vert.wgsl';
import FragShader from './Cube.frag.wgsl';
import ComputeShader from './Cube.comp.wgsl';
import { updateSize, allSides } from './webgpuRendererWorker';

export class WebgpuRenderer {
    rendering = true
    renderedFrames = 0

    ready = false;

    device: GPUDevice;
    renderPassDescriptor: GPURenderPassDescriptor;
    uniformBindGroup: GPUBindGroup;
    UniformBuffer: GPUBuffer;
    ViewUniformBuffer: GPUBuffer;
    ProjectionUniformBuffer: GPUBuffer;
    ctx: GPUCanvasContext;
    verticesBuffer: GPUBuffer;
    InstancedModelBuffer: GPUBuffer;
    pipeline: GPURenderPipeline;
    InstancedTextureIndexBuffer: GPUBuffer;
    InstancedColorBuffer: GPUBuffer;
    notRenderedAdditions = 0;

    // Add these properties to the WebgpuRenderer class
    computePipeline: GPUComputePipeline;
    indirectDrawBuffer: GPUBuffer;
    cubesBuffer: GPUBuffer;
    visibleCubesBuffer: GPUBuffer;
    computeBindGroup: GPUBindGroup;
    computeBindGroupLayout: GPUBindGroupLayout;
    indirectDrawParams: Uint32Array;
    maxBufferSize: number
    commandEncoder: GPUCommandEncoder;
    cubeTexture: GPUTexture;

    constructor(public canvas: HTMLCanvasElement, public imageBlob: ImageBitmapSource, public isPlayground: boolean, public camera: THREE.PerspectiveCamera, public localStorage: any, public NUMBER_OF_CUBES: number) {
        this.NUMBER_OF_CUBES = 1
        this.init();
    }

    changeBackgroundColor (color: [number, number, number]) {
        const colorRgba = [color[0], color[1], color[2], 1]
        this.renderPassDescriptor.colorAttachments[0].clearValue = colorRgba
    }

    async init () {
        const { canvas, imageBlob, isPlayground, localStorage } = this;

        updateSize(canvas.width, canvas.height);
        const textureBitmap = await createImageBitmap(imageBlob);
        const textureWidth = textureBitmap.width;
        const textureHeight = textureBitmap.height;

        const adapter = await navigator.gpu.requestAdapter();
        if (!adapter) throw new Error('WebGPU not supported');
        this.device = await adapter.requestDevice();
        const { device } = this;
        this.maxBufferSize = device.limits.maxStorageBufferBindingSize;
        this.renderedFrames = device.limits.maxComputeWorkgroupSizeX;
        console.log('max buffer size', this.maxBufferSize / 1024 / 1024, 'MB')

        const ctx = this.ctx = canvas.getContext('webgpu')!;

        const presentationFormat = navigator.gpu.getPreferredCanvasFormat();

        ctx.configure({
            device,
            format: presentationFormat,
            alphaMode: 'premultiplied',
        });

        const verticesBuffer = device.createBuffer({
            size: cubeVertexArray.byteLength,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });
        this.verticesBuffer = verticesBuffer;
        new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);
        verticesBuffer.unmap();

        const pipeline = device.createRenderPipeline({
            label: 'mainPipeline',
            layout: 'auto',
            vertex: {
                module: device.createShaderModule({
                    code: localStorage.vertShader || VertShader,
                }),
                buffers: [
                    {
                        arrayStride: cubeVertexSize,
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: cubePositionOffset,
                                format: 'float32x3',
                            },
                            {
                                shaderLocation: 1,
                                offset: cubeUVOffset,
                                format: 'float32x2',
                            },
                        ],
                    },
                    // {
                    //     arrayStride: 3 * 4,
                    //     attributes: [
                    //         {
                    //             shaderLocation: 2,
                    //             offset: 0,
                    //             format: 'float32x3',
                    //         },
                    //     ],
                    //     stepMode: 'instance',
                    // },
                    // {
                    //     arrayStride: 1 * 4,
                    //     attributes: [
                    //         {
                    //             shaderLocation: 3,
                    //             offset: 0,
                    //             format: 'float32',
                    //         },
                    //     ],
                    //     stepMode: 'instance',
                    // },
                    // {
                    //     arrayStride: 3 * 4,
                    //     attributes: [
                    //         {
                    //             shaderLocation: 4,
                    //             offset: 0,
                    //             format: 'float32x3',
                    //         },
                    //     ],
                    //     stepMode: 'instance',
                    // },
                ],
            },
            fragment: {
                module: device.createShaderModule({
                    code: localStorage.fragShader || FragShader,
                }),
                targets: [
                    {
                        format: presentationFormat,
                        blend: {
                            color: {
                                srcFactor: 'src-alpha',
                                dstFactor: 'one-minus-src-alpha',
                                operation: 'add',
                            },
                            alpha: {
                                srcFactor: 'src-alpha',
                                dstFactor: 'one-minus-src-alpha',
                                operation: 'add',
                            },
                        },
                    },
                ],
            },

            primitive: {
                topology: 'triangle-list',
                cullMode: 'front',
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus',
            },
        });
        this.pipeline = pipeline;

        const depthTexture = device.createTexture({
            size: [canvas.width, canvas.height],
            format: 'depth24plus',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        });

        const uniformBufferSize = 4 * (4 * 4); // 4x4 matrix
        this.UniformBuffer = device.createBuffer({
            size: uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        // Fetch the image and upload it into a GPUTexture.
        {
            this.cubeTexture = device.createTexture({
                size: [textureBitmap.width, textureBitmap.height, 1],
                format: 'rgb10a2unorm',
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });
            device.queue.copyExternalImageToTexture(
                { source: textureBitmap },
                { texture: this.cubeTexture },
                [textureBitmap.width, textureBitmap.height]
            );
        }

        this.renderPassDescriptor = {
            label: 'MainRenderPassDescriptor',
            colorAttachments: [
                {
                    view: undefined as any, // Assigned later
                    clearValue: [0.6784313725490196, 0.8470588235294118, 0.9019607843137255, 1],
                    loadOp: 'clear',
                    storeOp: 'store',
                },
            ],
            depthStencilAttachment: {
                view: depthTexture.createView(),
                depthClearValue: 1,
                depthLoadOp: 'clear',
                depthStoreOp: 'store',
            },
        };

        // Create compute pipeline
        const computeShaderModule = device.createShaderModule({
            code: localStorage.computeShader || ComputeShader,
            label: 'Culled Instance',
        });

        const computeBindGroupLayout = device.createBindGroupLayout({
            label: 'computeBindGroupLayout',
            entries: [
                { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
                { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
                { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
                { binding: 3, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
            ],
        });

        const computePipelineLayout = device.createPipelineLayout({
            label: 'computePipelineLayout',
            bindGroupLayouts: [computeBindGroupLayout],

        })

        this.computePipeline = device.createComputePipeline({
            label: 'Culled Instance',
            layout: computePipelineLayout,
            // layout: 'auto',
            compute: {
                module: computeShaderModule,
                entryPoint: 'main',
            },
        });

        this.indirectDrawBuffer = device.createBuffer({
            label: 'indirectDrawBuffer',
            size: 16, // 4 uint32 values
            usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        });

        // Initialize indirect draw parameters
        const indirectDrawParams = new Uint32Array([cubeVertexCount, 0, 0, 0]);
        device.queue.writeBuffer(this.indirectDrawBuffer, 0, indirectDrawParams);

        this.createNewDataBuffers()

        // const vertexBindGroupLayout = device.createBindGroupLayout({
        //     label: 'vertexBindGroupLayout',
        //     entries: [
        //         { binding: 0, visibility: GPUShaderStage.VERTEX, buffer: { type: 'uniform' } },
        //         { binding: 2, visibility: GPUShaderStage.VERTEX, buffer: { type: 'read-only-storage' } }  // Read-only storage
        //     ]
        // });

        this.indirectDrawParams = new Uint32Array([cubeVertexCount, 0, 0, 0]);

        // always last!
        this.loop(true); // start rendering
        this.ready = true;
        return canvas;
    }

    private createUniformBindGroup (device: GPUDevice, pipeline: GPURenderPipeline) {
        const sampler = device.createSampler({
            magFilter: 'nearest',
            minFilter: 'nearest',
        });

        this.uniformBindGroup = device.createBindGroup({
            label: 'uniformBindGroups',
            //layout: vertexBindGroupLayout,
            layout: pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: {
                        buffer: this.UniformBuffer,
                    },
                },
                {
                    binding: 1,
                    resource: sampler,
                },
                {
                    binding: 2,
                    resource: this.cubeTexture.createView(),
                },
                {
                    binding: 3,
                    resource: {
                        buffer: this.visibleCubesBuffer
                    }
                }
            ],
        });

        // // Create bind group for compute shader
        // this.computeBindGroupLayout = device.createBindGroupLayout({
        //     label: 'computeBindGroupLayout',
        //     entries: [
        //         {
        //             binding: 0,
        //             visibility: GPUShaderStage.COMPUTE,
        //             buffer: {
        //                 type: 'uniform',
        //             },
        //         },
        //         {
        //             binding: 1,
        //             visibility: GPUShaderStage.COMPUTE,
        //             buffer: {
        //                 type: 'storage',
        //             },
        //         },
        //         {
        //             binding: 2,
        //             visibility: GPUShaderStage.COMPUTE,
        //             buffer: {
        //                 type: '',
        //             },
        //         },
        //         {
        //             binding: 3,
        //             visibility: GPUShaderStage.COMPUTE,
        //             buffer: {
        //                 type: 'storage',
        //             },
        //         },
        //     ],
        // });
        this.computeBindGroup = device.createBindGroup({
            //layout: this.computeBindGroupLayout,
            layout: this.computePipeline.getBindGroupLayout(0),
            label: 'computeBindGroup',
            entries: [
                {
                    binding: 0,
                    resource: { buffer: this.UniformBuffer },
                },
                {
                    binding: 1,
                    resource: { buffer: this.cubesBuffer },
                },
                {
                    binding: 2,
                    resource: { buffer: this.visibleCubesBuffer },
                },
                {
                    binding: 3,
                    resource: { buffer: this.indirectDrawBuffer },
                },
            ],
        });
    }

    createNewDataBuffers () {
        const oldCubesBuffer = this.cubesBuffer
        const oldVisibleCubesBuffer = this.visibleCubesBuffer

        // Create buffers for compute shader and indirect drawing
        this.cubesBuffer = this.device.createBuffer({
            label: 'cubesBuffer',
            size: this.NUMBER_OF_CUBES * 32, // 8 floats per cube - minimum buffer size
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        });

        this.visibleCubesBuffer = this.device.createBuffer({
            label: 'visibleCubesBuffer',
            size: this.NUMBER_OF_CUBES * 32,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC,
        });

        // if we have old buffers, copy them to new ones
        if (oldCubesBuffer) {
            this.commandEncoder.copyBufferToBuffer(oldCubesBuffer, 0, this.cubesBuffer, 0, oldCubesBuffer.size);
            this.commandEncoder.copyBufferToBuffer(oldVisibleCubesBuffer, 0, this.visibleCubesBuffer, 0, oldVisibleCubesBuffer.size);
        }

        this.createUniformBindGroup(this.device, this.pipeline);
    }

    removeOne () { }

    realNumberOfCubes = 0;
    waitingNextUpdateSidesOffset = undefined as undefined | number

    updateSides (startOffset = 0) {
        this.waitingNextUpdateSidesOffset = startOffset
    }

    updateSidesFromLoop () {
        if (this.waitingNextUpdateSidesOffset === undefined) return
        const startOffset = this.waitingNextUpdateSidesOffset
        console.time('updateSides')
        const positions = [] as number[];
        let textureIndexes = [] as number[];
        let colors = [] as number[];
        const blocksPerFace = {} as Record<string, boolean>;
        for (const side of allSides.slice(startOffset)) {
            if (!side) continue;
            const [x, y, z] = side.slice(0, 3);
            const key = `${x},${y},${z}`;
            if (blocksPerFace[key]) continue;
            positions.push(x as number, y as number, z as number);
            const face = side[3];
            textureIndexes.push(face.textureIndex);
            if (face.tint) {
                colors.push(...face.tint);
            } else {
                colors.push(1, 1, 1);
            }
            blocksPerFace[key] = true;
        }

        const NUMBER_OF_CUBES_NEEDED = Math.ceil(positions.length / 3);
        this.realNumberOfCubes = NUMBER_OF_CUBES_NEEDED;
        if (NUMBER_OF_CUBES_NEEDED > this.NUMBER_OF_CUBES) {
            console.warn('extending number of cubes', NUMBER_OF_CUBES_NEEDED, this.NUMBER_OF_CUBES)
            this.NUMBER_OF_CUBES = NUMBER_OF_CUBES_NEEDED + 5000;
            console.time('recreate buffers')
            this.createNewDataBuffers()
            console.timeEnd('recreate buffers')
        }

        const BYTES_PER_ELEMENT = 8;
        const cubeData = new Float32Array(this.NUMBER_OF_CUBES * BYTES_PER_ELEMENT);
        for (let i = 0; i < this.NUMBER_OF_CUBES; i++) {
            const offset = i * BYTES_PER_ELEMENT;
            cubeData[offset] = positions[i * 3];
            cubeData[offset + 1] = positions[i * 3 + 1];
            cubeData[offset + 2] = positions[i * 3 + 2];
            cubeData[offset + 3] = textureIndexes[i];
            cubeData[offset + 4] = colors[i * 3];
            cubeData[offset + 5] = colors[i * 3 + 1];
            cubeData[offset + 6] = colors[i * 3 + 2];
            //cubeData[offset + 7] = 0.5; // Sphere radius
        }

        this.device.queue.writeBuffer(this.cubesBuffer, 0, cubeData);

        // Reset indirect draw parameters
        // this.indirectDrawParams = new Uint32Array([cubeVertexCount, 0, 0, 0]);
        //this.device.queue.writeBuffer(this.indirectDrawBuffer, 0, this.indirectDrawParams);

        this.notRenderedAdditions++;
        console.timeEnd('updateSides')
        this.waitingNextUpdateSidesOffset = undefined
    }

    lastCall = performance.now();
    logged = false;
    loop (forceFrame = false) {
        if (!this.rendering) {
            requestAnimationFrame(() => this.loop());
            if (!forceFrame) {
                return;
            }
        }
        let start = performance.now()

        const { device, UniformBuffer: uniformBuffer, renderPassDescriptor, uniformBindGroup, pipeline, ctx, verticesBuffer } = this;

        const now = Date.now();
        tweenJs.update();

        const ViewProjectionMat4 = new THREE.Matrix4();
        this.camera.updateMatrix();
        const projectionMatrix = this.camera.projectionMatrix;
        ViewProjectionMat4.multiplyMatrices(projectionMatrix, this.camera.matrix.invert());
        const ViewProjection = new Float32Array(ViewProjectionMat4.elements);
        device.queue.writeBuffer(
            uniformBuffer,
            0,
            ViewProjection
        );

        // const EmptyVisibleCubes = new Float32Array([36, 0, 0, 0]) ;

        device.queue.writeBuffer(
            this.indirectDrawBuffer, 0, this.indirectDrawParams);

        renderPassDescriptor.colorAttachments[0].view = ctx
            .getCurrentTexture()
            .createView();

        this.commandEncoder = device.createCommandEncoder();
        // Compute pass for occlusion culling
        this.commandEncoder.label = "Main Comand Encoder"
        const computePass = this.commandEncoder.beginComputePass();
        computePass.label = "ComputePass"
        computePass.setPipeline(this.computePipeline);
        //computePass.setBindGroup(0, this.uniformBindGroup);
        computePass.setBindGroup(0, this.computeBindGroup);
        computePass.dispatchWorkgroups(Math.ceil(this.NUMBER_OF_CUBES / 256));
        computePass.end();
        this.updateSidesFromLoop()
        device.queue.submit([this.commandEncoder.finish()]);
        this.commandEncoder = device.createCommandEncoder();
        //device.queue.submit([commandEncoder.finish()]);
        // Render pass
        //console.log(this.indirectDrawBuffer.getMappedRange());
        const renderPass = this.commandEncoder.beginRenderPass(this.renderPassDescriptor);
        renderPass.label = "RenderPass"
        renderPass.setPipeline(pipeline);
        renderPass.setBindGroup(0, this.uniformBindGroup);
        renderPass.setVertexBuffer(0, verticesBuffer);

        // Use indirect drawing
        renderPass.drawIndirect(this.indirectDrawBuffer, 0);

        renderPass.end();
        device.queue.submit([this.commandEncoder.finish()]);

        this.renderedFrames++;
        requestAnimationFrame(() => this.loop());
        this.notRenderedAdditions = 0;
        const took = performance.now() - start
        if (took > 100) {
            console.log('took', took)
        }
    }
}

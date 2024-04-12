import * as THREE from 'three'

//@ts-ignore
import VertShader from './_VertexShader.vert'
//@ts-ignore
import FragShader from './_FragmentShader.frag'
import { BlockType } from './shared'

let allBlocks = []
let chunksArrIndexes = {}
let freeArrayIndexes = []
let rendering = true
let cubePositions
let updateCubes: (startIndex: any) => void
let lastNotUpdatedIndex
let lastNotUpdatedArrSize
let animationTick = 0;

const camera = new THREE.PerspectiveCamera(75, 1 / 1, 0.1, 1000)

let renderedFrames = 0
setInterval(() => {
    // console.log('FPS:', renderedFrames)
    postMessage({ type: 'fps', fps: renderedFrames })
    renderedFrames = 0
}, 1000)

const updateSize = (width, height) => {
    camera.aspect = width / height
    camera.updateProjectionMatrix()
}


export const initWebglRenderer = async (canvas: HTMLCanvasElement, imageBlob: ImageBitmapSource, isPlayground: boolean, FragShaderOverride?) => {
    // blockStates = blockStatesJson
    const textureBitmap = await createImageBitmap(imageBlob)
    const textureWidth = textureBitmap.width
    const textureHeight = textureBitmap.height

    const gl = canvas.getContext('webgl2')!

    const program = createProgram(gl, VertShader, FragShaderOverride || FragShader)

    let vertices = new Float32Array([
        -1.0,  1.0,  1.0, 0.0, 0.0,
         1.0,  1.0,  1.0, 1.0, 0.0,
        -1.0, -1.0,  1.0, 0.0, 1.0,
         1.0, -1.0,  1.0, 1.0, 1.0,
         1.0, -1.0, -1.0, 1.0, 0.0,
         1.0,  1.0,  1.0, 0.0, 1.0,
         1.0,  1.0, -1.0, 0.0, 0.0,
        -1.0,  1.0,  1.0, 1.0, 1.0,
        -1.0,  1.0, -1.0, 1.0, 0.0,
        -1.0, -1.0,  1.0, 0.0, 1.0,
        -1.0, -1.0, -1.0, 0.0, 0.0,
         1.0, -1.0, -1.0, 1.0, 0.0,
        -1.0,  1.0, -1.0, 0.0, 1.0,
         1.0,  1.0, -1.0, 1.0, 1.0
    ])

    let NumberOfCube = isPlayground ? 1_000_000 : 5_000_000

    cubePositions = new Float32Array(NumberOfCube * 3)
    let cubeTextureIndices = new Float32Array(NumberOfCube * 6);
    let cubeBiomeColor = new Float32Array(NumberOfCube * 3);


    // write random coordinates to cube positions xyz ten cubes;
    if (isPlayground) {
        for (let i = 0; i < NumberOfCube * 3; i += 3) {
            cubePositions[i] = Math.floor(Math.random() * 1000) - 500;
            cubePositions[i + 1] = Math.floor(Math.random() * 1000) - 500;
            cubePositions[i + 2] = Math.floor(Math.random() * 100) - 100;
            cubeBiomeColor[i] = (Math.random() ) ;
            cubeBiomeColor[i + 1] = (Math.random() ) ;
            cubeBiomeColor[i + 2] = (Math.random() ) ;
            // cubeTextureIndices[i / 3] = Math.floor(Math.random() * 800);
            // cubeTextureIndices[i / 3] = 0;
        }

        for (let i = 0; i < NumberOfCube * 6; i += 6) {
            cubeTextureIndices[i + 0] = Math.floor(Math.random() * 800);
            cubeTextureIndices[i + 1] = Math.floor(Math.random() * 800);
            cubeTextureIndices[i + 2] = Math.floor(Math.random() * 800);
            cubeTextureIndices[i + 3] = Math.floor(Math.random() * 800);
            cubeTextureIndices[i + 4] = Math.floor(Math.random() * 800);
            cubeTextureIndices[i + 5] = Math.floor(Math.random() * 800);
            // cubeTextureIndices[i / 3] = 0;
        }


    }
    cubePositions[0] = 0;
    cubePositions[1] = 0;
    cubePositions[2] = 0;

    let VAO = gl.createVertexArray();
    let instanceVBO = gl.createBuffer();
    let instanceTextureID = gl.createBuffer();
    let instanceBiomeColor = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
    gl.bufferData(gl.ARRAY_BUFFER, cubePositions, gl.DYNAMIC_DRAW); // todo
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindBuffer(gl.ARRAY_BUFFER, instanceTextureID);
    gl.bufferData(gl.ARRAY_BUFFER, cubeTextureIndices, gl.DYNAMIC_DRAW); // todo
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    gl.bindBuffer(gl.ARRAY_BUFFER, instanceBiomeColor);
    gl.bufferData(gl.ARRAY_BUFFER, cubeBiomeColor, gl.DYNAMIC_DRAW); // todo
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    VAO = gl.createVertexArray();
    let VBO = gl.createBuffer();
    // let VBO_sides = gl.createBuffer();
    //EBO = gl.createBuffer();

    gl.bindVertexArray(VAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, VBO)
    // gl.bindBuffer(gl.ARRAY_BUFFER, VBO_sides)
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)

    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 5 * 4, 0)
    gl.enableVertexAttribArray(0)

    gl.vertexAttribPointer(1, 2, gl.FLOAT, false, 5 * 4, 3 * 4)
    gl.enableVertexAttribArray(1)

    //gl.vertexAttribPointer(2, 1, gl.FLOAT, false, 6 * 4, 5 * 4)
    //gl.enableVertexAttribArray(2)
    //instance data

    gl.enableVertexAttribArray(3);
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
    gl.vertexAttribPointer(3, 3, gl.FLOAT, false, 3 * 4, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.vertexAttribDivisor(3, 1);

    gl.enableVertexAttribArray(4);
    gl.enableVertexAttribArray(5);
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceTextureID);
    gl.vertexAttribPointer(4, 4, gl.FLOAT, false, 4 * 6, 0);
    gl.vertexAttribPointer(5, 2, gl.FLOAT, false, 4 * 6, 4 * 4);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.vertexAttribDivisor(4, 1);
    gl.vertexAttribDivisor(5, 1);

    gl.enableVertexAttribArray(6);
    gl.bindBuffer(gl.ARRAY_BUFFER, instanceBiomeColor);
    gl.vertexAttribPointer(6, 3, gl.FLOAT, false, 3 * 4, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.vertexAttribDivisor(6, 1);

    updateCubes = (startIndex) => {
        // cubePositionsRaw = [
        //     // for now one cube in front of the camera
        //     [camera.position.x, camera.position.y, camera.position.z, 'dirt'],
        //     [camera.position.x + 2, camera.position.y, camera.position.z, 'dirt'],
        //     [camera.position.x - 2, camera.position.y, camera.position.z, 'dirt'],
        //     [camera.position.x, camera.position.y, camera.position.z + 2, 'dirt'],
        //     [camera.position.x, camera.position.y, camera.position.z - 2, 'dirt'],
        // ]
        const blocks = allBlocks.slice(startIndex, lastNotUpdatedArrSize ? startIndex + lastNotUpdatedArrSize : undefined)
        blocks.sort((a, b) => {
            const getScore = (b: BlockType) => b.isTransparent ? 1 : 0
            return getScore(b[3]) - getScore(a[3])
        })
        globalThis.allBlocksSize = allBlocks.length
        cubePositions = new Float32Array(blocks.length * 3)
        cubeTextureIndices = new Float32Array(blocks.length * 6);
        cubeBiomeColor = new Float32Array(blocks.length * 3);
        for (let i = 0; i < blocks.length * 3; i += 3) {
            cubePositions[i] = blocks[i / 3][0]
            cubePositions[i + 1] = blocks[i / 3][1]
            cubePositions[i + 2] = blocks[i / 3][2]
            const block = blocks[i / 3][3] as BlockType
            if (block.tint) {
                const [r, g, b] = block.tint
                cubeBiomeColor[i] = r
                cubeBiomeColor[i + 1] = g
                cubeBiomeColor[i + 2] = b
            } else {
                cubeBiomeColor[i] = 1
                cubeBiomeColor[i + 1] = 1
                cubeBiomeColor[i + 2] = 1
            }
        }

        for (let i = 0; i < blocks.length * 6; i += 6) {
            const block = blocks[i / 6][3] as BlockType
            cubeTextureIndices[i + 0] = block.textureIndex[0]
            cubeTextureIndices[i + 1] = block.textureIndex[1]
            cubeTextureIndices[i + 2] = block.textureIndex[2]
            cubeTextureIndices[i + 3] = block.textureIndex[3]
            cubeTextureIndices[i + 4] = block.textureIndex[4]
            cubeTextureIndices[i + 5] = block.textureIndex[5]
        }


        // startIndex = 0 // TODO!
        console.log('startIndex', startIndex, cubePositions.length, allBlocks.length)
        const updateBuffersSize = allBlocks.length > NumberOfCube
        if (updateBuffersSize) {
            NumberOfCube += 1_000_000
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
        if (updateBuffersSize) {
            //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(NumberOfCube * 3), gl.STATIC_DRAW);
        }
        const POS_SIZE = 3
        gl.bufferSubData(gl.ARRAY_BUFFER, startIndex * 4 * POS_SIZE, cubePositions); // update buffer content
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindBuffer(gl.ARRAY_BUFFER, instanceTextureID);
        if (updateBuffersSize) {
            //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(NumberOfCube), gl.STATIC_DRAW);
        }
        const TEXTURES_SIZE = 6
        gl.bufferSubData(gl.ARRAY_BUFFER, startIndex * 4 * TEXTURES_SIZE, cubeTextureIndices); // update buffer content
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindBuffer(gl.ARRAY_BUFFER, instanceBiomeColor);
        gl.bufferSubData(gl.ARRAY_BUFFER, startIndex * 4 * POS_SIZE, cubeBiomeColor); // update buffer content
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    globalThis.updateCubes = updateCubes
    globalThis.cleanupFirstChunks = () => {
        allBlocks = []
        gl.bindBuffer(gl.ARRAY_BUFFER, instanceVBO);
        // empty the buffer
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(NumberOfCube * 3), gl.STATIC_DRAW); // todo
        gl.bindBuffer(gl.ARRAY_BUFFER, null);

        gl.bindBuffer(gl.ARRAY_BUFFER, instanceTextureID);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(NumberOfCube * 3), gl.STATIC_DRAW); // todo
        // gl.bufferSubData(gl.ARRAY_BUFFER, startIndex * 4, cubeTextureIndices); // update buffer content
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    }

    globalThis.fullReset = () => {
        allBlocks = []
        globalThis.cleanupFirstChunks()
        lastNotUpdatedIndex = undefined
        lastNotUpdatedArrSize = undefined
    }



    //gl.bindBuffer(gl.ARRAY_BUFFER, null);
    //gl.bindVertexArray(null)

    // viewer.world.updateTexturesData()
    // await new Promise(resolve => {
    //     // console.log('viewer.world.material.map!.image', viewer.world.material.map!.image)
    //     // viewer.world.material.map!.image.onload = () => {
    //     //   console.log(this.material.map!.image)
    //     //   resolve()
    //     // }
    //     viewer.world.renderUpdateEmitter.once('blockStatesDownloaded', resolve)
    // })
    // const names = Object.keys(viewer.world.downloadedBlockStatesData)

    let texture1 = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);	// set texture wrapping to GL_REPEAT (default wrapping method)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureWidth, textureHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, textureBitmap);
    //gl.generateMipmap(gl.TEXTURE_2D);

    //gl.generateMipmap(gl.TEXTURE_2D);

    gl.useProgram(program)

    gl.uniform1i(gl.getUniformLocation(program, "texture1"), 0);
    gl.uniform1i(gl.getUniformLocation(program, "texture2"), 1);


    gl.enable(gl.DEPTH_TEST)
    gl.frontFace(gl.CCW)
    gl.enable(gl.CULL_FACE)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);


    //gl.generateMipmap()
    //gl.enable(gl)
    //gl.clearColor(0, 0, 0, 1)
    //gl.clear(gl.COLOR_BUFFER_BIT)
    camera.up = new THREE.Vector3(0, 1, 0)

    let ViewUniform = gl.getUniformLocation(program, "view")
    let ProjectionUniform = gl.getUniformLocation(program, "projection")
    let TickUniform = gl.getUniformLocation(program, "tick")

    gl.cullFace(gl.FRONT)

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    gl.bindVertexArray(VAO)

    updateSize(gl.canvas.width, gl.canvas.height)
    const renderLoop = (performance) => {
        requestAnimationFrame(renderLoop)
        if (!rendering) return
        // gl.canvas.width = window.innerWidth * window.devicePixelRatio
        // gl.canvas.height = window.innerHeight * window.devicePixelRatio
        if (newWidth || newHeight) {
            gl.canvas.width = newWidth ?? gl.canvas.width
            gl.canvas.height = newHeight ?? gl.canvas.height
            newWidth = undefined
            newHeight = undefined
            updateSize(gl.canvas.width, gl.canvas.height)
        }
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

        gl.clearColor(0.6784313725490196, 0.8470588235294118, 0.9019607843137255, 0.0);
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.clear(gl.DEPTH_BUFFER_BIT)

        gl.useProgram(program)

        gl.uniformMatrix4fv(ViewUniform, false, camera.matrix.invert().elements);
        gl.uniformMatrix4fv(ProjectionUniform, false, camera.projectionMatrix.elements);
        gl.uniform1i(TickUniform, animationTick);

        camera.updateMatrix()
        if (!globalThis.stopRendering) {
            gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 24, isPlayground ? NumberOfCube : allBlocks.length);
        }
        //gl.bindVertexArray(null)

        renderedFrames++
    }
    requestAnimationFrame(renderLoop)

    // gl.deleteVertexArray(VAO);
    // gl.deleteBuffer(VBO)
    // gl.deleteBuffer(EBO)
    // gl.deleteProgram(program)

    return canvas
}

const createProgram = (gl: WebGL2RenderingContext, vertexShader: string, fragmentShader: string) => {
    const createShader = (gl: WebGL2RenderingContext, type: number, source: string) => {
        const shaderName = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment'
        const shader = gl.createShader(type)!
        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (!success) {
            const info = gl.getShaderInfoLog(shader)
            gl.deleteShader(shader)
            throw new Error(`Shader ${shaderName} compile error: ` + info)
        }
        return shader
    }



    const program = gl.createProgram()!
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexShader)!)
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentShader)!)
    gl.linkProgram(program)
    const linkSuccess = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!linkSuccess) {
        const info = gl.getProgramInfoLog(program)
        gl.deleteProgram(program)
        throw new Error('Program link error: ' + info)
    }
    return program
}

let started = false
let newWidth: number | undefined
let newHeight: number | undefined
let autoTickUpdate = undefined as number | undefined
onmessage = function (e) {
    if (!started) {
        started = true
        initWebglRenderer(e.data.canvas, e.data.imageBlob, e.data.isPlayground, e.data.FragShaderOverride)
        return
    }
    if (e.data.type === 'startRender') {
        rendering = true
    }
    if (e.data.type === 'stopRender') {
        rendering = false
    }
    if (e.data.type === 'resize') {
        newWidth = e.data.newWidth
        newHeight = e.data.newHeight
    }
    if (e.data.type === 'addBlocksSection') {
        const currentLength = allBlocks.length;
        // in: object - name, out: [x, y, z, name]
        const newData = Object.entries(e.data.data.blocks).map(([key, value]) => {
            const [x, y, z] = key.split(',').map(Number)
            return [x, y, z, value as BlockType]
        })
        // find freeIndexes if possible
        const freeArea = freeArrayIndexes.find(([startIndex, endIndex]) => endIndex - startIndex >= newData.length)
        chunksArrIndexes[e.data.key] = [currentLength, currentLength + newData.length]
        allBlocks.push(...newData)
        lastNotUpdatedIndex ??= currentLength
        // updateCubes?.(currentLength)
    }
    if (e.data.type === 'addBlocksSectionDone') {
        updateCubes?.(lastNotUpdatedIndex)
        lastNotUpdatedIndex = undefined
        lastNotUpdatedArrSize = undefined
    }
    if (e.data.type === 'removeBlocksSection') {
        const [startIndex, endIndex] = chunksArrIndexes[e.data.key]
        freeArrayIndexes.push([startIndex, endIndex])

        // merge freeArrayIndexes TODO
        if (freeArrayIndexes.at(-1)[0] === freeArrayIndexes.at(-2)?.[1]) {
            const [startIndex, endIndex] = freeArrayIndexes.pop()!
            const [startIndex2, endIndex2] = freeArrayIndexes.pop()!
            freeArrayIndexes.push([startIndex2, endIndex])
        }
    }
    if (e.data.type === 'camera') {
        camera.rotation.set(e.data.camera.rotation.x, e.data.camera.rotation.y, e.data.camera.rotation.z, 'ZYX')
        camera.position.set(e.data.camera.position.x, e.data.camera.position.y, e.data.camera.position.z)
    }
    if (e.data.type === 'animationTick') {
        if (e.data.frames <= 0) {
            autoTickUpdate = undefined
            animationTick = 0
            return
        }
        if (e.data.tick === -1) {
            autoTickUpdate = e.data.frames
        } else {
            autoTickUpdate = undefined
            animationTick = e.data.tick % 20 // todo update automatically in worker
        }
    }
}

setInterval(() => {
    if (autoTickUpdate) {
        animationTick = (animationTick + 1) % autoTickUpdate;
    }
}, 1000 / 20)

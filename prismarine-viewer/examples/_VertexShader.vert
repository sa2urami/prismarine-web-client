#version 300 es
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTexCoord;
layout (location = 2) in float CubeSide;

layout (location = 3) in vec3 aOffset;
layout (location = 4) in vec4 aTextureIndex;
layout (location = 5) in vec2 aTextureIndexPlus;
layout (location = 6) in vec3 aBiomeColor;



out vec2 TexCoord;
flat out float TextureIndex;
flat out vec3 BiomeColor;

uniform mat4 view;
uniform mat4 projection;
uniform int tick;

void main()
{
    gl_Position = projection * view * vec4(aPos + aOffset + vec3(0.5f,0.5f,0.5f), 1.0f); //Offseting by 0.5 to center the cube
    TexCoord = vec2(aTexCoord.x, (1.0 - aTexCoord.y)); // Flipping image for opengl coordinates
    //TextureIndex = aTextureIndex; //Passing texture index to fragment shader
    int CubeSide1 = 0;
   // CubeSide1 = (gl_VertexID-2)/2;
    // if (gl_VertexID == 3) { //3 2 - 0
    //     CubeSide1 = 0;
    // }
    // else {
    //     return;
    // }

    //CubeSide1 = (gl_VertexID-1)/4;

    // switch (gl_VertexID) {
    //     case 0:
    //         //return;
    //         CubeSide1 = 0;
    //         break;
    //     case 1:
    //         //break;
    //         CubeSide1 = 0;
    //         break;
    //     case 2:
    //         //return;
    //         CubeSide1 = 0;
    //         break;
    //     case 3:
    //         return;
    //         CubeSide1 = 0; 
    //         break;
    //     case 4:
    //         //return;
    //         CubeSide1 = 3; //Down
    //         break;
    //     case 5:
    //         //return;
    //         CubeSide1 = 1;
    //         break;
    //     case 6:
    //         //return;
    //         CubeSide1 = 1;
    //         break;
    //     case 7:
    //         //return;
    //         CubeSide1 = 2; //UP
    //         break;
    //     case 8:
    //         //return;
    //         CubeSide1 = 2; //Up
    //         break;
    //     case 9:
    //         //return;
    //         CubeSide1 = 4; // Left
    //         break;
    //     case 10:
    //         //return;
    //         CubeSide1 = 4; // Left
    //         break;
    //     case 11:
    //         //return;
    //         CubeSide1 = 3; // Down
    //         break;
    //     case 12:

    //         //return; //Back
    //         CubeSide1 = 5;
    //         break;
    //     case 13:
    //         //return; //Back
    //         CubeSide1 = 5;
    //         break;
    //     case 14:
    //         return;
    //         //CubeSide1 = 5;
    //         break;
    // }
    
    switch (CubeSide1) {
        case 0:
            TexCoord = vec2((1.0f-aTexCoord.x), (1.0 - aTexCoord.y));
            TextureIndex = aTextureIndex.x;
            break;
        case 1:
            TextureIndex = aTextureIndex.y;
            break;
        case 2:
            TextureIndex = aTextureIndex.z;
            TexCoord = vec2((1.0f-aTexCoord.y), (1.0f - aTexCoord.x));
            break;
        case 3:
            TextureIndex = aTextureIndex.z;
            TexCoord = vec2(aTexCoord.y, (1.0f - aTexCoord.x));
            break;
        case 4:
            TextureIndex = aTextureIndexPlus.x;
            break;
        case 5:
            TextureIndex = aTextureIndexPlus.y;
            break;
    }

    

    TextureIndex += float(tick);
    
    BiomeColor = aBiomeColor;


    //CubeSideIndex = CubeSide; //Passing cube side index to fragment shader
}

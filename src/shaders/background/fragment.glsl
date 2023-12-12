uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float screenHeight;
uniform float screenWidth;

varying float vElevation;

void main()
{
    // Normalize the coordinates
    float x = gl_FragCoord.x / screenWidth;
    float y = gl_FragCoord.y / screenHeight;

    // Calculate the mix strength based on the normalized position of the vertex
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier + x / y;

    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
    
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
}
uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform vec3 uGradientColor1;
uniform vec3 uGradientColor2;
uniform vec3 uGradientColor3;
uniform float uGradientPosition1;
uniform float uGradientPosition2;
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

    // Calculate the gradient color
    vec3 color1 = mix(uGradientColor1, uGradientColor2, smoothstep(0.0, uGradientPosition1, mixStrength));
    vec3 color2 = mix(uGradientColor2, uGradientColor3, smoothstep(uGradientPosition1, uGradientPosition2, mixStrength));
    vec3 color = mix(color1, color2, step(uGradientPosition1, mixStrength));

    gl_FragColor = vec4(color, 1.0);
}
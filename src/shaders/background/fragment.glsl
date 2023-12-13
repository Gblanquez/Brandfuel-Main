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
uniform float uGradientAngle;

varying float vElevation;

void main()
{
    // Calculate the position based on the angle
    float pos = gl_FragCoord.x * cos(uGradientAngle) + gl_FragCoord.y * sin(uGradientAngle);

    // Normalize the position
    float normalizedPos = pos / (screenWidth * cos(uGradientAngle) + screenHeight * sin(uGradientAngle));

    // Calculate the gradient color
    vec3 color = mix(uGradientColor1, uGradientColor2, normalizedPos);

    gl_FragColor = vec4(color, 1.0);
}
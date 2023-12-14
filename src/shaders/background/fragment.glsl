varying vec2 vUv;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uPreviousColor1;
uniform vec3 uPreviousColor2;
uniform float uGradientAngle;
uniform float uPreviousGradientAngle;
uniform float uTransition;

void main()
{

    float angle = radians(uGradientAngle);
    mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 rotatedUv = rotationMatrix * (vUv - 0.5) + 0.5;

    vec3 color = mix(uColor1, uColor2, rotatedUv.x * rotatedUv.y);
    gl_FragColor = vec4(color, 1.0);
}
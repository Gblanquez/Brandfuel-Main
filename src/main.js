import './styles/style.css';
import workRender from './renders/workRender.js';
import homeRender from './renders/homeRender.js';
import workTransition from './transitions/workTransition.js'
import homeTransition from './transitions/homeTransition.js'
import { Core } from '@unseenco/taxi'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui'
import waterVertexShader from './shaders/background/vertex.glsl'
import waterFragmentShader from './shaders/background/fragment.glsl'
import logoVertexShader from './shaders/Logo/vertex.glsl'
import logoFragmentShader from './shaders/Logo/fragment.glsl'
// import { Swiper } from 'swiper';
import Swiper from 'swiper/bundle';
// import 'swiper/css';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js';
import { Noise } from 'noisejs';
import Lenis from '@studio-freight/lenis'
import Granim from 'granim'

gsap.registerPlugin(ScrollTrigger);
//SWIPER

// const taxi = new Core({
// 	renderers: {
// 		work: workRender,
//     home: homeRender,
// 	},
//   transitions: {
//     homeTran: homeTransition,
//     workTran: workTransition,
//   }
// });






// Debug
// const gui = new GUI({ width: 340 })
// const debugObject = {}

let bNoise = new Noise(Math.random());





/**
 * Base
 */


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



scene.fog = new THREE.FogExp2( '#FF16A4', 0.1 );
/**
 * Water
 */
// Geometry
const waterGeometry = new THREE.PlaneGeometry( 50, 50, 200, 200 );




const bgGroup = new THREE.Group();


// Material
const waterMaterial = new THREE.ShaderMaterial({
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    uniforms:
    {
        uTime: { value: 0 },
        uDisplacementStrength: { value: 0.004 },
        uColor1: { value: new THREE.Color('green') }, // Add this line for uColor1 uniform
        uColor2: { value: new THREE.Color('red') }, // Add this line for uColor2 uniform
        uColor3: { value: new THREE.Color('#2F5ECA') }, // Add this line for uColor3 uniform
        uColor4: { value: new THREE.Color('#00383C') }, // Add this line for uColor4 uniform
        uColor5: { value: new THREE.Color('purple') }, // Add this line for uColor5 uniform
        screenWidth: { value: window.innerWidth },
        screenHeight: { value: window.innerHeight },
        
        uBigWavesElevation: { value: 0.2 },
        uBigWavesFrequency: { value: new THREE.Vector2(0.511, 0.433) },
        uBigWavesSpeed: { value: 0.328 },

        uSmallWavesElevation: { value: 0.043 },
        uSmallWavesFrequency: { value: 1.764 },
        uSmallWavesSpeed: { value: 0.2 },
        uSmallIterations: { value: 1 },
        u_mouseEffect: { value: new THREE.Vector2(0, 0) }, // Add this line for u_mouseEffect uniform
        u_mouseStrength: { value: 5.0 },


        uGradientColor1: { value: new THREE.Color('#00464B') },
        uGradientColor2: { value: new THREE.Color('#00464B') },
        uGradientColor3: { value: new THREE.Color('#001F21') },
        uGradientPosition1: { value: 0.3 }, // position of the first color stop
        uGradientPosition2: { value: 2.0 }, // position of the second color stop


        uGradientAngle: { value: Math.PI / 4 * 0.3 },


        uDepthColor: { value: new THREE.Color('green') },
        uSurfaceColor: { value: new THREE.Color('blue') },
        uColorOffset: { value: 0.152 },
        uColorMultiplier: { value: 2.831 }
    }
})

// Mesh
const bg = new THREE.Mesh(waterGeometry, waterMaterial)
// bg.rotation.z =  - Math.PI * 0.5 

bgGroup.add(bg);
bgGroup.position.z = -4
// bgGroup.rotation.x = - Math.PI * 0.3

// bg.scale.set(sizes.width, sizes.height, 1);
scene.add(bgGroup)



// Define your color pairs
const colorPairs = [
  { color1: '#000102', color2: '#2C2135', color3: '#00464B' },
  { color1: '#2C2135', color2: '#BD4511', color3: '#00464B' },
  { color1: '#5B267E', color2: '#BD4511', color3: '#BD4511' }
];

// Define your triggers
const triggers = ['.cms_case_study', '.about_us_section', '.contact_us_section'];

// Create a ScrollTrigger for each section
triggers.forEach((trigger, index) => {
  let colors = colorPairs[index];

  gsap.to(waterMaterial.uniforms.uGradientColor1.value, {
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    onUpdate: function() {
      waterMaterial.uniforms.uGradientColor1.value.set(colors.color1);
      waterMaterial.uniforms.uGradientColor1.value.needsUpdate = true;
    }
  });

  gsap.to(waterMaterial.uniforms.uGradientColor2.value, {
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    onUpdate: function() {
      waterMaterial.uniforms.uGradientColor2.value.set(colors.color2);
      waterMaterial.uniforms.uGradientColor2.value.needsUpdate = true;
    }
  });

  gsap.to(waterMaterial.uniforms.uGradientColor3.value, {
    scrollTrigger: {
      trigger: trigger,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
    },
    onUpdate: function() {
      waterMaterial.uniforms.uGradientColor3.value.set(colors.color3);
      waterMaterial.uniforms.uGradientColor3.value.needsUpdate = true;
    }
  });
});


// gui.add(waterMaterial.uniforms.uBigWavesElevation, 'value').min(0).max(1).step(0.001).name('uBigWavesElevation')
// gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'x').min(0).max(10).step(0.001).name('uBigWavesFrequencyX')
// gui.add(waterMaterial.uniforms.uBigWavesFrequency.value, 'y').min(0).max(10).step(0.001).name('uBigWavesFrequencyY')
// gui.add(waterMaterial.uniforms.uBigWavesSpeed, 'value').min(0).max(4).step(0.001).name('uBigWavesSpeed')


// gui.add(waterMaterial.uniforms.uSmallWavesElevation, 'value').min(0).max(1).step(0.001).name('uSmallWavesElevation')
// gui.add(waterMaterial.uniforms.uSmallWavesFrequency, 'value').min(0).max(30).step(0.001).name('uSmallWavesFrequency')
// gui.add(waterMaterial.uniforms.uSmallWavesSpeed, 'value').min(0).max(4).step(0.001).name('uSmallWavesSpeed')
// gui.add(waterMaterial.uniforms.uSmallIterations, 'value').min(0).max(5).step(1).name('uSmallIterations')

// gui.add(waterMaterial.uniforms.uColorOffset, 'value').min(0).max(1).step(0.001).name('uColorOffset')
// gui.add(waterMaterial.uniforms.uColorMultiplier, 'value').min(0).max(10).step(0.001).name('uColorMultiplier')

const wNoise = new SimplexNoise();
function getRadius(angle, time) {
    const noiseScale = 0.2; // Adjust this value to change the amount of variation
    const noiseSpeed = 0.01; // Adjust this value to change the speed of variation
    const baseRadius = circleCircumference / (2 * Math.PI) * 0.6;
    const noiseValue = noise.noise2D(angle * noiseSpeed, time);
    let radius = baseRadius * (1 + noiseScale * noiseValue);
  
    // Define the minimum and maximum radius
    let minRadius = baseRadius * 0.1; // Adjust this value to change the minimum radius
    let maxRadius = baseRadius * 1.3; // Adjust this value to change the maximum radius
  
    // Clamp the radius to the minimum and maximum values
    radius = Math.max(radius, minRadius);
    radius = Math.min(radius, maxRadius);
  
    return radius;
  }


  //Animation of gradient

  // Define your color pairs
// const colorPairs = [
//   { depth: '#000000', surface: '#000A0A' },
//   { depth: '#002D30', surface: '#00444A' },
//   { depth: '#2C2135', surface: '#CC480D' }
// ];

// // Define your triggers
// const triggers = ['.about_section', '.case_study_parent', '.about_us_section'];

// // Create a ScrollTrigger for each section
// triggers.forEach((trigger, index) => {
//   let colors = colorPairs[index];

//   gsap.to(waterMaterial.uniforms.uDepthColor.value, {
//     scrollTrigger: {
//       trigger: trigger,
//       start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
//       end: 'bottom bottom', // when the bottom of the trigger hits the bottom of the viewport
//       scrub: true, // smooth scrubbing
//     },
//     onUpdate: function() {
//       waterMaterial.uniforms.uDepthColor.value.set(colors.depth);
//       waterMaterial.uniforms.uDepthColor.value.needsUpdate = true;
//     }
//   });

//   gsap.to(waterMaterial.uniforms.uSurfaceColor.value, {
//     scrollTrigger: {
//       trigger: trigger,
//       start: 'top bottom', // when the top of the trigger hits the bottom of the viewport
//       end: 'bottom bottom', // when the bottom of the trigger hits the bottom of the viewport
//       scrub: true, // smooth scrubbing
//     },
//     onUpdate: function() {
//       waterMaterial.uniforms.uSurfaceColor.value.set(colors.surface);
//       waterMaterial.uniforms.uSurfaceColor.value.needsUpdate = true;
//     }
//   });
// });


// Create a circle shape
// const circleRadius = 1;
// const numCubes = 200; // Assuming 12 cubes for a clock
// const clockRadius = 1; // Radius of the clock
// const circleCenter = new THREE.Vector3(0, 0, 0);


// // Create a group to contain the cubes
// const cubeGroup1 = new THREE.Group();
// const cubeGroup2 = new THREE.Group(); // New group for the second circle

// const testMaterial = new THREE.MeshNormalMaterial();

// const cMaterial = new THREE.ShaderMaterial({
//     vertexShader: logoVertexShader,
//     fragmentShader: logoFragmentShader,
//     uniforms: {
//         uTime: { value: 0.0 },
//         uColor1: { value: new THREE.Color('red') },
//         uColor2: { value: new THREE.Color('yellow') },
//         uStrength: { value: 1.0 },
//         uElevation: { value: 0.0},
//     }
// })

// for (let i = 0; i < numCubes; i++) {
//   const angle = (i / numCubes) * Math.PI * 2 + Math.PI / 2; // Start from the top of the circle
//   const cubeSize = i % 2 === 0 ? 0.5 : 0.9; // Alternating cube sizes

//   const group1 = new THREE.Group(); // Create a group for the cube
//   group1.position.x = circleCenter.x + Math.cos(angle) * circleRadius; // Position the group along the edge of the circle
//   group1.position.z = circleCenter.z + Math.sin(angle) * circleRadius;

//   const cube1 = new THREE.Mesh(new THREE.BoxGeometry(cubeSize, 0.1, 0.1), testMaterial);
//   cube1.position.y = -cubeSize / 2; // Position the cube relative to its group
//   cube1.rotateY(-angle); // Rotate the cube to align with the clock's position

//   group1.add(cube1); // Add the cube to the group
//   cubeGroup1.add(group1); // Add the group to the first cube group

//   const group2 = group1.clone(); // Clone the group for the second circle
//   cubeGroup2.add(group2); // Add the cloned group to the second cube group
// }

// cubeGroup1.rotation.x = Math.PI / 2;
// cubeGroup1.scale.set(3, 3, 3)
// // cubeGroup1.position.z = 1;

// cubeGroup2.rotation.x = Math.PI / 2;
// cubeGroup2.position.z = 2; // Change the position for the second circle

const pointLight = new THREE.PointLight(0xffffff, 30, 100); // white color
pointLight.position.set(0, 1, 0); // position it above the cube group
scene.add(pointLight);

const numCubes = 100; // Number of cubes
const cubeSize = 0.05;
const spacing = 0.13; // Adjust this value to change the spacing between cubes
const totalLength = numCubes * (cubeSize + spacing);
let circleCircumference = totalLength;
let circleRadius = circleCircumference / (2 * Math.PI) * 0.2;

// Create a Float32Array to store the positions of the cubes
const positionsC = new Float32Array(numCubes * 3); // x, y, z for each cube

for (let i = 0; i < numCubes; i++) {
  const angle = (i / numCubes) * Math.PI * 2 ;
  const x = Math.cos(angle) * circleRadius; // x position
  const y = Math.sin(angle) * circleRadius; // y position
  const z = 0; // z position

  // Store the positions in the array
  positionsC[i * 3] = x;
  positionsC[i * 3 + 1] = y;
  positionsC[i * 3 + 2] = z;
}

// Create a BufferGeometry and set the positions attribute
const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positionsC, 3));

// Create a MeshBasicMaterial for the cubes
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const cubeGroup1 = new THREE.Group()

for (let i = 0; i < geometry.attributes.position.count; i++) {

  const materialRed = new THREE.MeshPhongMaterial({ color: 0xff0000 });
  const materialYellow = new THREE.MeshPhongMaterial({ color: 0xffff00 });

  const isEven = i % 2 === 0;

    // Set the cubeSize and color based on whether the index is even or odd
    const currentCubeSize = isEven ? 0.04 : 0.02; // Change these values as needed
    const currentMaterial = isEven ? materialRed : materialYellow;

    const cubeGeometry = new THREE.BoxGeometry(currentCubeSize, currentCubeSize, 1.3);
    const cube = new THREE.Mesh(cubeGeometry, currentMaterial);
    

  // Set the cube's position using the positions stored in the Float32Array
  cube.position.x = geometry.attributes.position.array[i * 3];
  cube.position.y = geometry.attributes.position.array[i * 3 + 1];
  cube.position.z = geometry.attributes.position.array[i * 3 + 2];

  const minScale = 0.2;
  const maxScale = 0.8;

  // Make the cube face the center of the circle
  cube.lookAt(new THREE.Vector3(0, 0, 0));
  cube.scaleFactor = Math.random() * (maxScale - minScale) + minScale;

  // Adjust the cube's position to start from the bottom of the geometry
  cube.position.z += cubeSize / 2;
  cubeGroup1.add(cube)

}

// scene.add(cubeGroup1);

const ambientLight = new THREE.AmbientLight(0xffffff, 1); // white color, intensity
scene.add(ambientLight);



console.log('helloooooo');


    // Initialize u_mouse as a THREE.Vector2
let u_mouse = new THREE.Vector2(0, 0);

    // Update u_mouse on mouse move
window.addEventListener('mousemove', (event) => {
    u_mouse.x = event.clientX / window.innerWidth;
    u_mouse.y = event.clientY / window.innerHeight;
});


window.addEventListener('mousemove', (event) => {
  waterMaterial.uniforms.u_mouseEffect.value.x = (event.clientX / window.innerWidth) * 2 - 1;
  waterMaterial.uniforms.u_mouseEffect.value.y = - (event.clientY / window.innerHeight) * 2 + 1;
});
// cubeGroup2.scale.set(1.2, 1.2, 1.2)
// cubeGroup2.position.z = -2



//Particles

const particlesCount = 2000
const positions = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5 ) * 10
}
const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

const particlesMaterial = new THREE.PointsMaterial({
    color: new THREE.Color('white'),
    sizeAttenuation: true,
    size: 0.004
})

const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)



const speeds = new Float32Array(particlesCount);
for (let i = 0; i < particlesCount; i++) {
    speeds[i] = Math.random() * 0.02 + 0.01;  // Random speed between 0.01 and 0.03
}
/**
 * Sizes
 * 
 * 


/**
 * Camera
 */


//Group


const noise = new SimplexNoise();


const cameraGroup = new THREE.Group()


// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 8)
cameraGroup.add(camera)
scene.add(cameraGroup)
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x000000, 0)


//cursor

const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0
const bAmplitude = 0.2;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime


    waterMaterial.uniforms.uTime.value = elapsedTime;
    // cMaterial.uniforms.uTime.value = elapsedTime;

    // sphere.rotation.x += 0.01;
    // sphere.rotation.y += 0.01;
    // updateCubesScale()
    

    // cubeGroup1.rotation.y += 0.001;
    // cubeGroup2.rotation.y += 0.001;



    let minRadius = 0.3; // Adjust this value to change the minimum radius
    let maxRadius = 0.9; // Adjust this value to change the maximum radius

    circleRadius = Math.min(maxRadius, Math.max(minRadius, circleRadius));

    circleRadius = circleCircumference / (2 * Math.PI) * (1 + Math.sin(elapsedTime) * bAmplitude) * 0.7 ;

    // Recalculate the positions of the cubes
    for (let i = 0; i < numCubes; i++) {
      const angle = (i / numCubes) * Math.PI * 2 ;
      const x = Math.cos(angle) * circleRadius; // x position
      const y = Math.sin(angle) * circleRadius; // y position
  
      // Update the positions in the array
      positionsC[i * 3] = x;
      positionsC[i * 3 + 1] = y;
      // z position remains the same
    }
  
// Update the cube positions
for (let i = 0; i < geometry.attributes.position.count; i++) {
    const angle = (i / numCubes) * Math.PI * 2;
    const displacement = bNoise.perlin2(angle, elapsedTime) * 0.1;
    cubeGroup1.children[i].position.x = positionsC[i * 3] + displacement;
    cubeGroup1.children[i].position.y = positionsC[i * 3 + 1] + displacement;
    // z position remains the same
  }

  cubeGroup1.children.forEach(cube => {
    cube.scale.x = cube.scaleFactor;
  });

    const pX = cursor.x
    const pY = - cursor.y 

    cameraGroup.position.x += (pX  - cameraGroup.position.x) * 2 * deltaTime
    cameraGroup.position.y += (pY - cameraGroup.position.y) * 2 * deltaTime

    const positionsArray = particlesGeometry.attributes.position.array;
    for (let i = 0; i < particlesCount; i++) {
        positionsArray[i * 3 + 2] -= speeds[i];  // Move the particle towards the camera
        if (positionsArray[i * 3 + 2] < -10) {  // If the particle has moved past the camera
            positionsArray[i * 3 + 2] = 10;  // Reset the particle's position to the back
        }
    }
    particlesGeometry.attributes.position.needsUpdate = true;  // Tell Three.js to update the particles

    // Update controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()



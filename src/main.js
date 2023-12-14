import './styles/style.css';

import * as THREE from 'three'
import GUI from 'lil-gui'
import waterVertexShader from './shaders/background/vertex.glsl'
import waterFragmentShader from './shaders/background/fragment.glsl'
import logoVertexShader from './shaders/Logo/vertex.glsl'
import logoFragmentShader from './shaders/Logo/fragment.glsl'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Granim from 'granim'
import SplitType from 'split-type'

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





// gsap.to("cms_case_child", {
//   scrollTrigger: {
//     trigger: ".cms_case_study",
//     start: "top top", // when the top of the trigger hits the top of the viewport
//     end: "+=4000", // end after scrolling 500px beyond the start
//     pin: true, // pin the trigger element while active
//     scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//   }
// });


var granimInstance = new Granim({
  element: '#granim-canvas',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              ['#000000', '#000000'], // black and gray
          ]
      },
      "second-state": {
          gradients: [
              ['#000000', '#00464B'], // black and green
          ]
      },
      "third-state": {
          gradients: [
              ['#5B267E', '#BD4511'], // purple and orange
          ]
      },
      "last-state": {
          gradients: [
              ['#BD4511', '#5B267E'], // orange and purple
          ]
      }
  }
});

const triggers = ['.about_section', '.cms_case_child', '.about_us_section', '.contact_us_section'];
const states = ['default-state', 'second-state', 'third-state', 'last-state'];

triggers.forEach((trigger, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top+=300 center",
      end: "bottom+=300 center",
      onEnter: () => granimInstance.changeState(states[index]),
      onLeaveBack: () => {
        if (index !== 0) {
          const previousIndex = index - 1;
          granimInstance.changeState(states[previousIndex]);
        }
      },
      scrub: true
    }
  });
});



// const triggers = ['.case_video_wrapper', '.case_study_sumary_container', '.creative_section_results', '.footer_grid_parent'];
// const states = ['default-state', 'second-state', 'third-state', 'last-state'];

// triggers.forEach((trigger, index) => {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: trigger,
//       start: "top+=300 center",
//       end: "bottom+=300 center",
//       onEnter: () => granimInstance.changeState(states[index]),
//       onLeaveBack: () => {
//         if (index !== 0) {
//           const previousIndex = index - 1;
//           granimInstance.changeState(states[previousIndex]);
//         }
//       },
//       scrub: true
//     }
//   });
// });



//Case Studies Animations


const cmsLink = document.querySelectorAll('[data-a="cms-link"]');
const cmsWrap = document.querySelectorAll('[data-a="cms-v-wrap"]');
const cmsVideo = document.querySelectorAll('[data-a="cms-v"]');
const cmsH2 = document.querySelectorAll('[data-a="cms-h2"]');
const cmsH3 = document.querySelectorAll('[data-a="cms-h3"]');
const cmsH4 = document.querySelectorAll('[data-a="cms-h4"]');
cmsLink.forEach((link) => {
   const cmsWrap = link.querySelector('[data-a="cms-v-wrap"]');
   const cmsVideo = link.querySelector('[data-a="cms-v"]');
   const cmsH2 = link.querySelector('[data-a="cms-h2"]');
   const cmsH3 = link.querySelector('[data-a="cms-h3"]');
   const cmsH4 = link.querySelector('[data-a="cms-h4"]');

   // Split the text into characters
   const cH2 = new SplitType(cmsH2, { types: 'chars' });
   const cH3 = new SplitType(cmsH3, { types: 'chars' });
   const cH4 = new SplitType(cmsH4, { types: 'chars' });

   const cmsTl = gsap.timeline({
       scrollTrigger:{
           trigger: link,
           start: 'top bottom',
          //  onEnter: () => cmsTl.restart(),
           // onEnterBack: () => cmsTl.restart(),
           // onLeave: () => cmsTl.restart(),
       }
   });

   cmsTl.from(cmsWrap, {
       height: '0%',
       duration: 1.6,
       ease: 'back.inOut(1)',
   }, 0.1);

   cmsTl.from(cmsVideo, {
       y: '-120%',
       scale: 1.4,
       ease: 'back.inOut(1))',
       duration: 1.2
   }, 0.1);

   // Animate the characters
   cmsTl.from(cH2.chars, {
       y: '120%',
       opacity: 0,
       stagger: 0.02,
       ease: 'expo.out',
       duration: 1.4
   }, 0.1);

   cmsTl.from(cH3.chars, {
       y: '120%',
       opacity: 0,
       stagger: 0.02,
       ease: 'expo.out',
       duration: 1.4
   }, 0.1);

   cmsTl.from(cH4.chars, {
       y: '120%',
       opacity: 0,
       stagger: 0.02,
       ease: 'expo.out',
       duration: 1.4
   }, 0.1);

   gsap.to(cmsVideo, {
    scale: 1.1, // scale to 200%
    scrollTrigger: {
        trigger: cmsVideo,
        start: 'top bottom', // start when top of cmsVideo hits bottom of viewport
        end: 'bottom top', // end when bottom of cmsVideo hits top of viewport
        scrub: true
    }
});
});

// Debug
// const gui = new GUI({ width: 340 })
// const debugObject = {}








//CASE STUDIES COLOORRRR

// const caseStudies = document.querySelectorAll('.case_study_cl_item');
// const gradients = [
//   [
//     ['#000000', '#808080'], // black and gray
//     ['#03c1df', '#FFA500'], // #03c1df and orange
//     ['#FFA500', '#800080'], // orange and purple
//     ['#800080', '#FFA500']  // purple and orange
//   ],
//   [
//     ['#000000', '#808080'], // black and gray
//     ['red', '#0000FF'], // #00063d and blue
//     ['#FFA500', '#800080'], // orange and purple
//     ['#800080', '#FFA500']  // purple and orange
//   ],
//   [
//     ['#000000', '#808080'], // black and gray
//     ['#00063d', 'blue'], // #00063d and blue
//     ['#FFA500', '#800080'], // orange and purple
//     ['#800080', '#FFA500']  // purple and orange
//   ],
//   [
//     ['#000000', '#808080'], // black and gray
//     ['#00063d', '#0000FF'], // #00063d and blue
//     ['#FFA500', '#800080'], // orange and purple
//     ['#800080', '#FFA500']  // purple and orange
//   ],
//   [
//     ['#000000', '#808080'], // black and gray
//     ['#00063d', '#0000FF'], // #00063d and blue
//     ['#FFA500', '#800080'], // orange and purple
//     ['#800080', '#FFA500']  // purple and orange
//   ]
// ];

// caseStudies.forEach((caseStudy, index) => {
//   const granimInstance = new Granim({
//     element: caseStudy.querySelector('#granim-canvas'),
//     direction: 'diagonal',
//     isPausedWhenNotInView: true,
//     states: {
//       "default-state": { gradients: gradients[index][0] },
//       "second-state": { gradients: gradients[index][1] },
//       "third-state": { gradients: gradients[index][2] },
//       "last-state": { gradients: gradients[index][3] }
//     }
//   });

//   const triggers = Array.from(caseStudy.querySelectorAll('.case_video_container, .case_study_sumary_container, .creative_section_results, .footer_grid_parent'));
//   const states = ['default-state', 'second-state', 'third-state', 'last-state'];

//   triggers.forEach((trigger, triggerIndex) => {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: trigger,
//         start: "top+=300 center",
//         end: "bottom+=300 center",
//         onEnter: () => granimInstance.changeState(states[triggerIndex]),
//         onLeaveBack: () => {
//           if (triggerIndex !== 0) {
//             const previousIndex = triggerIndex - 1;
//             granimInstance.changeState(states[previousIndex]);
//           }
//         },
//         scrub: true
//       }
//     });
//   });
// });




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
 * Camera
 */


//Group



const cameraGroup = new THREE.Group()


// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 3)
cameraGroup.add(camera)
scene.add(cameraGroup)
// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Water
 */

let aspectRatio2 = sizes.width / sizes.height;
// Calculate the visible height at the z position of the plane
let distance = camera.position.z;
let visibleHeight = 2 * Math.tan((camera.fov * Math.PI / 180) / 2) * distance;

// Calculate the visible width using the aspect ratio
let visibleWidth = visibleHeight * camera.aspect;
// Geometry
const waterGeometry = new THREE.PlaneGeometry( 5, 5, 30, 30 );




const bgGroup = new THREE.Group();


// Material
const waterMaterial = new THREE.ShaderMaterial({
    vertexShader: waterVertexShader,
    fragmentShader: waterFragmentShader,
    uniforms:
    {
        uTime: { value: 0 },
        uDisplacementStrength: { value: 0.004 },
        uColor1: { value: new THREE.Color('red') },
        uColor2: { value: new THREE.Color('gray') }, 
        uColor3: { value: new THREE.Color('#2F5ECA') }, 
        uColor4: { value: new THREE.Color('#00383C') }, 
        uColor5: { value: new THREE.Color('purple') }, 
        screenWidth: { value: window.innerWidth },
        screenHeight: { value: window.innerHeight },


        uPreviousColor1: { value: new THREE.Color('red') },
        uPreviousColor2: { value: new THREE.Color('green') },
        uPreviousGradientAngle: { value: 0.0 },
        uGradientAngle: { value: 0.0 },
        uTransition: { value: 0.0 },

        uStrength: {value: 0 },
        
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


        uGradientAngle: { value: 220},


        uDepthColor: { value: new THREE.Color('green') },
        uSurfaceColor: { value: new THREE.Color('blue') },
        uColorOffset: { value: 0.152 },
        uColorMultiplier: { value: 2.831 }
    }
})

waterMaterial.side = THREE.DoubleSide
// Mesh
const bg = new THREE.Mesh(waterGeometry, waterMaterial)
// bg.rotation.z =  - Math.PI * 0.5 

bgGroup.add(bg);
bgGroup.position.z = -1
// bgGroup.rotation.x = - Math.PI * 0.3

// bg.scale.set(sizes.width, sizes.height, 1);
// scene.add(bgGroup)


// Define your color pairs
const colorPairs = [
  { color1: 'black', color2: 'gray' },
  { color1: 'black', color2: 'green' },
  { color1: 'orange', color2: 'purple' },
  { color1: 'purple', color2: 'orange' }
];

// Define your gradient angles
const gradientAngles = [0, 45, 90, 135];

// Define your triggers
// const triggers = ['.about_section', '.cms_case_child', '.about_us_section', '.contact_us_section'];

// triggers.forEach((trigger, index) => {
//   const colorPair = colorPairs[index];
//   const timeline = gsap.timeline({
//     scrollTrigger: {
//       trigger: trigger,
//       start: 'top center',
//       end: 'bottom center',
//       scrub: true
//     }
//   });

//   timeline
//     .to(waterMaterial.uniforms.uColor1.value, { r: colorPair.color1.r, g: colorPair.color1.g, b: colorPair.color1.b }, 0)
//     .to(waterMaterial.uniforms.uColor2.value, { r: colorPair.color2.r, g: colorPair.color2.g, b: colorPair.color2.b }, 0)
//     .to(waterMaterial.uniforms.uGradientAngle, { value: (index * 90) % 360 }, 0);
// });


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

// const pointLight = new THREE.PointLight(0xffffff, 30, 100); // white color
// pointLight.position.set(0, 1, 0); // position it above the cube group
// scene.add(pointLight);

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

// const ambientLight = new THREE.AmbientLight(0xffffff, 1); // white color, intensity
// scene.add(ambientLight);



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

const particlesCount = 800
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
  
// // Update the cube positions
// for (let i = 0; i < geometry.attributes.position.count; i++) {
//     const angle = (i / numCubes) * Math.PI * 2;
//     const displacement = bNoise.perlin2(angle, elapsedTime) * 0.1;
//     cubeGroup1.children[i].position.x = positionsC[i * 3] + displacement;
//     cubeGroup1.children[i].position.y = positionsC[i * 3 + 1] + displacement;
//     // z position remains the same
//   }

//   cubeGroup1.children.forEach(cube => {
//     cube.scale.x = cube.scaleFactor;
//   });

//     const pX = cursor.x
//     const pY = - cursor.y 

//     cameraGroup.position.x += (pX  - cameraGroup.position.x) * 2 * deltaTime
//     cameraGroup.position.y += (pY - cameraGroup.position.y) * 2 * deltaTime

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



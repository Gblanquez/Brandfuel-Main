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

const taxi = new Core({
	renderers: {
		work: workRender,
    home: homeRender,
	},
  transitions: {
    homeTran: homeTransition,
    workTran: workTransition,
  }
});

// Swiper.use([Controller]);
// let swiper;


// $('.case_wrapper').each(function (index) {
//     swiper = new Swiper($(this).find('.swiper.is-bg')[0],{
//     slidesPerView: 1,
//     speed: 800,
//     cubeEffect: true,
//     direction: 'vertical',
//     // autoplay: {
//     //   delay: 10
//     // },
//     // loop: true,
//     // keyboard: true,
//     // thumbs:{
//     //   swiper: txtSwiper
//     // }
//   });

//   const txtSwiper = new Swiper($(this).find('.swiper.is-tx')[0],{
//     slidesPerView: 1,
//     speed: 800,
//     direction: 'vertical',
//   });


//   swiper.controller.control = txtSwiper;

// });



// Fetch all .case_link_cms elements
// const allLinks = document.querySelectorAll('.case_link_cms');

// allLinks.forEach((link, i) => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: allLinks[i],
//       start: 'top bottom',
//       end: 'bottom top',
//       scrub: true,
//       onEnter: () => console.log("It's working"),
//       onEnterBack: () => console.log("It's working"),
//       onLeave: () => console.log("It's working"),
//       markers: true,
//     },
//   });
// });
// console.log(gsap);
// console.log(ScrollTrigger);

// const aboutWrap = document.querySelector('.about_section')

// gsap.to(aboutWrap, {
//   opacity: '30%',
//   duration: 2,
//   scrollTrigger:{
//     trigger: aboutWrap,
//     scrub: true,
//     start: 'top center',
//     end: 'bottom bottom',
//     markers: true
//   }
// })
// ScrollTrigger.create({
//   trigger: aboutWrap,
//   start: 'top center',
//   end: 'bottom top', // Adjusted to increase the scroll range
//   onEnter: () => console.log('alo'),
//   markers: true, // Added to visualize the trigger in the viewport
// });
// allLinks.forEach( () => {
//   gsap.to('.case_component', {
//     scrollTrigger: {
//       trigger: link,
//       start: 'top 70%',
//       end: 'bottom bottom',
//       onEnter: () => {
//         swiper.slideNext();
//         gsap.to(swiper, { immediateRender: true });
//         console.log('this is fast');
//       },
//       onLeaveBack: () => {
//         swiper.slidePrev();
//         gsap.to(swiper, { immediateRender: true });
//         console.log('haha leaving');
//       },
//       markers: true,
//       scrub: true
//     }
//   });
// })

// $('.case_link_cms:gt(0)').each(function(index, link) {
  
// });



// Debug
// const gui = new GUI({ width: 340 })
// const debugObject = {}

let bNoise = new Noise(Math.random());

// let lenis;
// lenis = new Lenis({
//   lerp: 0.1,
//   orientation: 'vertical',
//   infinite: false,
//   wheelMultiplier: 0.9,
//   gestureOrientation: "both",
//   normalizeWheel: true,
//   smoothTouch: false
// });
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)

// const imgWrap = document.querySelector('.case_study_img_wrapper')
// const img1 = document.querySelector('.background_img_study.one')
// const div1 = document.querySelector('.case_study_info.one')
// const img2 = document.querySelector('.background_img_study.two')
// const div2 = document.querySelector('.case_study_info.two')
// const img3 = document.querySelector('.background_img_study.three')
// const div3 = document.querySelector('.case_study_info.three')
// const img4 = document.querySelector('.background_img_study.four')
// const div4 = document.querySelector('.case_study_info.four')
// const img5 = document.querySelector('.background_img_study.five')
// const div5 = document.querySelector('.case_study_info.five')


// let stl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.case_study_child',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true,
//   }
// })

// stl.from(img1,{
//   y: '120%',
//   scale: 1.1,
//   duration: 1.6
// }, 0.1),
// stl.from(div1,{
//   y: '120%',
//   opacity: 0,
//   duration: 1.6
// }, 0.1),
// stl.from('.case_study_img_wrapper',{
//   scale: 1.2,
//   y: '40%',
//   duration: 1.6,
//   ease: 'expo.out'
// })


// let link2tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link2',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true
//   }
// })

// let link3tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link3',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true
//   }
// })

// let link4tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link4',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true
//   }
// })

// let link5tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link5',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true
//   }
// })



// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link2',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true,
//     markers: true,
//     scrub: true,
//     onLeave: () => tl.progress(0),
//     onEnterBack: () => tl.progress(0)
//   }
// })

// tl.fromTo('.case_study_img_wrapper',{
// scale: 1.1,
// duration: 1.1
// },
// {
//   scale: 1,
//   duration: 1.1
// },0.1),
// tl.to(img1,{
//   y: '-120%',
//   duration: 1.6,
// }, 0.1),
// tl.to(div1,{
//   y: '-120%',
//   opacity: 0,
//   duration: 1.6
// }, 0.1),
// tl.to(img2,{
//   y: '-5%',
//   scale: 1.1,
//   duration: 1.1,
// }, 0.1),
// tl.to(div2,{
//   y:'0%',
//   duration: 2
// }, 0.2);






// let tl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link3',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true,
//     markers: true,
//     scrub: true,
//     onLeave: () => tl2.progress(0),
//     onEnterBack: () => tl2.progress(0)
//   }
// })

// tl2.fromTo('.case_study_img_wrapper',{
// scale: 1.1,
// duration: 1.1
// },
// {
//   scale: 1,
//   duration: 1.1
// },0.1),
// tl2.fromTo(img2,{
//   y: '3%',
//   duration: 1.6,
// },{
//   y: '-123%',
//   duration: 1.6
// }, 0.1),
// tl2.to(div2,{
//   y: '-120%',
//   opacity: 0,
//   duration: 1.6
// }, 0.1),
// tl.to(img3,{
//   y: '-5%',
//   scale: 1.1,
//   duration: 1.1,
// }, 0.1),
// tl2.to(div3,{
//   y:'0%',
//   duration: 2
// }, 0.2);




// let tl3 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link4',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true,
//     markers: true,
//     scrub: true,
//     onLeave: () => tl3.progress(0),
//     onEnterBack: () => tl3.progress(0)
//   }
// })

// tl3.fromTo('.case_study_img_wrapper',{
// scale: 1.1,
// duration: 1.1
// },
// {
//   scale: 1,
//   duration: 1.1
// },0.1),
// tl3.to(img3,{
//   y: '-120%',
//   duration: 1.6,
// }, 0.1),
// tl3.to(div3,{
//   y: '-120%',
//   opacity: 0,
//   duration: 1.6
// }, 0.1),
// tl3.to(img4,{
//   y: '-5%',
//   scale: 1.1,
//   duration: 1.1,
// }, 0.1),
// tl3.to(div4,{
//   y:'0%',
//   duration: 2
// }, 0.2);


// let tl4 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.link5',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     snap: true,
//     markers: true,
//     scrub: true,
//     onLeave: () => tl4.progress(0),
//     onEnterBack: () => tl4.progress(0)
//   }
// })

// tl4.fromTo('.case_study_img_wrapper',{
// scale: 1.1,
// duration: 1.1
// },
// {
//   scale: 1,
//   duration: 1.1
// },0.1),
// tl4.to(img4,{
//   y: '-120%',
//   duration: 1.6,
// }, 0.1),
// tl4.to(div4,{
//   y: '-120%',
//   opacity: 0,
//   duration: 1.6
// }, 0.1),
// tl4.to(img5,{
//   y: '-5%',
//   scale: 1.1,
//   duration: 1.1,
// }, 0.1),
// tl4.to(div5,{
//   y:'0%',
//   duration: 2
// }, 0.2);





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
const waterGeometry = new THREE.PlaneGeometry( 30, 30, 100, 100 );




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
        uGradientColor2: { value: new THREE.Color('blue') },
        uGradientColor3: { value: new THREE.Color('#001F21') },
        uGradientPosition1: { value: 0.3 }, // position of the first color stop
        uGradientPosition2: { value: 2.0 }, // position of the second color stop



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
  { color1: '#000102', color2: '#00464B', color3: '#2C2135' },
  { color1: '#2C2135', color2: '#BD4511', color3: '#5B267E' },
  { color1: '#2C2135', color2: '#5B267E', color3: '#000102' }
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

// const minScale = 1;
// const maxScale = 3;
// const baseScale = 0.5;
// const maxRandomScale = 3;
// const amplitude = 0.3;
// let scaleUpCubeIndex = null;
// let scaleUpStartTime = null;
// const maxDistance = circleRadius ; // Maximum distance a cube can move
// let isShrinking = false; 

// let btl = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.about_section',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     duration: 1.8,
//     scrub: true
//   }
// },)

// btl.to(cubeGroup1.scale,{
//   x: 4,
//   y: 4,
//   z: 4
// }, 0.1);
// btl.to(cubeGroup1.rotation,{
//   z: 1,
//   // y: 4,
//   // z: 4
// }, 0.1);
// btl.to(cubeGroup1.position,{
//   x: 2.3
// }, 0.1)

// let btl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.case_study_child',
//     duration: 1.8,
//     scrub: true,
//     start: 'top bottom',
//     end: 'bottom bottom',

//   }
// },)

// btl2.to(cubeGroup1.scale,{
//   x: 3,
//   y: 3,
//   z: 3
// }, 0.1);
// btl2.to(cubeGroup1.rotation,{
//   z: 2,
//   // y: 4,
//   // z: 4
// }, 0.1);
// btl2.to(cubeGroup1.position,{
//   x: -5,
//   y:3
// }, 0.1)

// let btl3 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.about_us_section',
//     duration: 1.8,
//     scrub: true,
//     start: 'top bottom',
//     end: 'bottom bottom',

//   }
// },)

// btl3.to(cubeGroup1.scale,{
//   x: 3,
//   y: 3,
//   z: 3
// }, 0.1);
// btl3.to(cubeGroup1.rotation,{
//   z: 3,
//   // y: 4,
//   // z: 4
// }, 0.1);
// btl3.to(cubeGroup1.position,{
//   x: -7,
//   y: 3
// }, 0.1)

// let btl4 = gsap.timeline({
//   scrollTrigger:{
//     trigger: '.contact_us_section',
//     duration: 1.8,
//     scrub: true,
//     start: 'top bottom',
//     end: 'bottom bottom',

//   }
// })

// btl4.to(cubeGroup1.scale,{
//   x: 3,
//   y: 3,
//   z: 3
// }, 0.1);
// btl3.to(cubeGroup1.rotation,{
//   z: 4,
//   // y: 4,
//   // z: 4
// }, 0.1);
// btl4.to(cubeGroup1.position,{
//   x: -3,
//   y: 8
// }, 0.1)

// var granimInstance = new Granim({
//   element: '#granim-canvas',
//   name: 'interactive-gradient',
//   elToSetClassOn: '.granim-canvas',
//   direction: 'diagonal',
//   isPausedWhenNotInView: true,
//   stateTransitionSpeed: 300,
//   states : {
//       "default-state": {
//           gradients: [
//               ['#000000', '#000A0A'],
//           ],
//           transitionSpeed: 800
//       },
//       "violet-state": {
//         gradients: [
//           ['#000A0A', '#00464B'],
//       ],
//           transitionSpeed: 400
//       },
//       "orange-state": {
//         gradients: [
//           ['#2C2135', '#DF4D08'],
//       ],
//       transitionSpeed: 400

//       },
//       "purple-state": {
//         gradients: [
//           ['#43285A', '#2C2135'],
//       ],
//       transitionSpeed: 400

//       }
//   }
// });

console.log('helloooooo');

// gsap.utils.toArray(['.about_section', '.case_component', '.about_us_section', '.contact_us_section']).forEach((section, index) => {
//   gsap.to(window, {
//     scrollTrigger: {
//       trigger: section,
//       start: 'top bottom',
//       end: 'bottom bottom',
//       onEnter: () => changeGradient(index),
//       onEnterBack: () => changeGradient(index),
//       onUpdate: ({progress, direction, isActive}) => {
//         if (isActive) {
//           changeGradient(index);
//         }
//       }
//     }
//   });
// });

// function changeGradient(index) {
//   switch(index) {
//     case 0:
//       granimInstance.changeState('default-state');
//       break;
//     case 1:
//       granimInstance.changeState('violet-state');
//       break;
//     case 2:
//       granimInstance.changeState('orange-state');
//       break;
//     case 3:
//       granimInstance.changeState('purple-state');
//       break;
//   }
// }


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



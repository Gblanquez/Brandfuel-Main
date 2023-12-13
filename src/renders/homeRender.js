import { Renderer } from '@unseenco/taxi';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { CustomEase } from "gsap/CustomEase";
import lottie from 'lottie-web';
gsap.registerPlugin(CustomEase)


export default class homeRenderer extends Renderer {

initialLoad() {
        // run code that should only happen once for your site

    console.log('this is the initial load');
    // window.scrollTo(0, 0)
    // document.body.style.overflow = 'hidden';

//     let animation = lottie.loadAnimation({
//         container: document.querySelector('.lottie_wrap'), // the dom element that will contain the animation
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         path: 'https://uploads-ssl.webflow.com/654ffd6810a99fe2eda01c9b/65735262e47f7cb0e69a0531_ShowreelLogo.json' // the path to the animation json
//       });
      
//       // Define your custom ease
//       let customEase = CustomEase.create("custom", "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1");
      
//       // Get the elements
//       let load_nmb = document.querySelector('.load_nmb');
//       let load_h1 = document.querySelector('.load-h1');
//       let load_parent = document.querySelector('.load_parent');
//       let background_img_wrap = document.querySelector('.background_img_wrap');
//       let logoLink = document.querySelector('.navbar_child');
//       let navLines = document.querySelectorAll('[data-a="nav-line"]');
//       let navTxt = document.querySelectorAll('.link_textspan');
      
//       // Create a timeline
//       let tl = gsap.timeline();
      
// // Split the text into individual characters
// let load_h1_split = new SplitType(load_h1, { types: 'chars' });

// // Hide the characters initially
// gsap.set(load_h1_split.chars, { opacity: 0 });
// gsap.set(background_img_wrap, { opacity: 0 });

// // Start counting to 100% here
// let counter = { val: 0 };

// // First animation
// gsap.to(counter, {
//   val: 100,
//   roundProps: "val",
//   ease: customEase, // Use your custom ease
//   onUpdate: function() {
//     // Update the text content
//     load_nmb.textContent = counter.val.toString();
//     animation.goToAndStop(counter.val, true);
//   },
//   duration: 3 // Adjust the duration as needed
// }).then(() => {
//   // Set the properties right before the second animation starts
//   gsap.set(load_h1_split.chars,{
//       y: '120%',
//       opacity: 0
//   })

//   gsap.to(load_nmb,{
//       y: '-120%',
//       duration: 1.4,
//       ease: 'expo.out',
//       opacity: 0
//   })

//   // Second animation
//   gsap.fromTo(load_h1_split.chars, {
//     y: '120%',
//     opacity: 0
//   }, {
//     y: '0%',
//     opacity: 1, // Make the characters visible again
//     ease: 'expo.out',
//     stagger: 0.02, // Stagger the animation for each character
//     duration: 1.6 // Adjust the duration as needed
//   }).then(() => {
// // Third animation
// tl.to(load_h1_split.chars, {
//     y: '-120%',
//     opacity: 0,
//     ease: 'expo.out',
//     stagger: 0.01, // Stagger the animation for each character
//     duration: 1.4 // Adjust the duration as needed
//   }).set(load_parent, {
//     zIndex: -1
//   }).set(background_img_wrap, { // Set the initial state of the background
//     display: 'block',
//     y: '120%',
//     borderRadius: '8rem',
//     scale: 0.6,
//     opacity: 0,
//   }).to(background_img_wrap, {
//     y: '0%',
//     borderRadius: '0rem',
//     scale: 1,
//     ease: 'expo.out',
//     opacity: 1,
//     duration: 1.8 // Adjust the duration as needed
//   }, "+=0.1") // Start this animation 0.1 seconds after the previous one
//   .fromTo(navLines,{
//     width: '0%',
//     opacity: 0,
//     ease: 'expo.out',
//   },{
//     width: '100%',
//     ease: 'expo.out',
//     opacity: 1,
//     duration: 0.8,
//     stagger:{
//       each: 0.2
//     }
//   }, "+=0") // Start this animation 0.1 seconds after the previous one
//   .from(logoLink,{
//     y: '120%',
//     opacity: 0,
//     ease: 'expo.out',
//     duration: 0.8
//   }, "+=0") // Start this animation 0.1 seconds after the previous one
//   .from(navTxt,{
//     y: '120%',
//     opacity: 0,
//     ease: 'expo.out',
//     duration: 0.8,
//     stagger:{
//       each: 0.02
//     }
//   }, "+=0") // Start this animation 0.1 seconds after the previous one
//   .then(() =>{
//     document.body.style.overflow = 'auto';
//     load_parent.style.display = 'none';
//   });
//   });
// });



//Animate lottie Blue

// let animation2 = lottie.loadAnimation({
//     container: document.querySelector('.cms_lottie_wrap'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'https://uploads-ssl.webflow.com/654ffd6810a99fe2eda01c9b/6573486260cf3c6846f64f76_BFLottieblueSimple02%20(1).json' // the path to the animation json
//   });

//   ScrollTrigger.create({
//     trigger: '.cms_case_study',
//     start: 'top bottom',
//     end: 'bottom top',
//     scrub: true,
//     onUpdate: self => {
//         let progress = self.progress;
//         let totalFrames = animation2.totalFrames;
//         let frame = Math.round(totalFrames * progress);
//         animation2.goToAndStop(frame, true);
//     }
// });


// ScrollTrigger.create({
//     trigger: '.about_section',
//     start: 'top bottom',
//     end: 'bottom top',
//     onEnter: () => animation3.play(),
//     onLeave: () => animation3.stop(),
//     onEnterBack: () => animation3.play(),
//     onLeaveBack: () => animation3.stop()
// });





// //Animate Lottie Red
// let animation3 = lottie.loadAnimation({
//     container: document.querySelector('.img_about_p'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'https://uploads-ssl.webflow.com/654ffd6810a99fe2eda01c9b/6572f6684681cf023dba4395_BFLottiered01.json' // the path to the animation json
// });





  //Intialize Animations



  // const cmsLink = document.querySelectorAll('[data-a="cms-link"]');
  //   //  const cmsWrap = document.querySelectorAll('[data-a="cms-v-wrap"]');
  //   //  const cmsVideo = document.querySelectorAll('[data-a="cms-v"]');
  //   //  const cmsH2 = document.querySelectorAll('[data-a="cms-h2"]');
  //   //  const cmsH3 = document.querySelectorAll('[data-a="cms-h3"]');
  //   //  const cmsH4 = document.querySelectorAll('[data-a="cms-h4"]');
  //   cmsLink.forEach((link) => {
  //       const cmsWrap = link.querySelector('[data-a="cms-v-wrap"]');
  //       const cmsVideo = link.querySelector('[data-a="cms-v"]');
  //       const cmsH2 = link.querySelector('[data-a="cms-h2"]');
  //       const cmsH3 = link.querySelector('[data-a="cms-h3"]');
  //       const cmsH4 = link.querySelector('[data-a="cms-h4"]');
    
  //       // Split the text into characters
  //       const cH2 = new SplitType(cmsH2, { types: 'chars' });
  //       const cH3 = new SplitType(cmsH3, { types: 'chars' });
  //       const cH4 = new SplitType(cmsH4, { types: 'chars' });
    
  //       const cmsTl = gsap.timeline({
  //           scrollTrigger:{
  //               trigger: link,
  //               start: 'top bottom',
  //               onEnter: () => cmsTl.restart(),
  //               // onEnterBack: () => cmsTl.restart(),
  //               // onLeave: () => cmsTl.restart(),
  //           }
  //       });
    
  //       cmsTl.from(cmsWrap, {
  //           height: '0%',
  //           duration: 1.6,
  //           ease: 'expo.out',
  //       }, 0.1);
    
  //       cmsTl.from(cmsVideo, {
  //           y: '-120%',
  //           scale: 1.2,
  //           ease: 'expo.out',
  //           duration: 1.8
  //       }, 0.1);
    
  //       // Animate the characters
  //       cmsTl.from(cH2.chars, {
  //           y: '120%',
  //           opacity: 0,
  //           stagger: 0.02,
  //           ease: 'expo.out',
  //           duration: 1.6
  //       }, 0.1);
    
  //       cmsTl.from(cH3.chars, {
  //           y: '120%',
  //           opacity: 0,
  //           stagger: 0.02,
  //           ease: 'expo.out',
  //           duration: 1.6
  //       }, 0.1);
    
  //       cmsTl.from(cH4.chars, {
  //           y: '120%',
  //           opacity: 0,
  //           stagger: 0.02,
  //           ease: 'expo.out',
  //           duration: 1.6
  //       }, 0.1);
  //   });
    

      }
onEnter() {
    // run after the new content has been added to the Taxi container
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0)


    console.log('its home');
  }

  onEnterCompleted() {
     // run after the transition.onEnter has fully completed
     document.body.style.overflow = 'auto';

    //  window.Webflow && window.Webflow.destroy();
    //  window.Webflow && window.Webflow.ready();
    //  window.Webflow && window.Webflow.require('ix2').init();

  }

  onLeave() {
    // run before the transition.onLeave method is called

    console.log('home is leaving');
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}

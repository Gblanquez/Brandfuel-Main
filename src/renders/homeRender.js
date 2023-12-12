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
    document.body.style.overflow = 'hidden';

    let animation = lottie.loadAnimation({
        container: document.getElementById('lottie'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'https://uploads-ssl.webflow.com/654ffd6810a99fe2eda01c9b/65735262e47f7cb0e69a0531_ShowreelLogo.json' // the path to the animation json
      });
      
      // Define your custom ease
      let customEase = CustomEase.create("custom", "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1");
      
      // Get the elements
      let load_nmb = document.querySelector('.load_nmb');
      let load_h1 = document.querySelector('.load-h1');
      let load_parent = document.querySelector('.load_parent');
      let background_img_wrap = document.querySelector('.background_img_wrap');
      
      // Create a timeline
      let tl = gsap.timeline();
      
      // Split the text into individual characters
      let load_h1_split = new SplitType(load_h1, { types: 'chars' });
      
      // Start counting to 100% here
      let counter = { val: 0 };
// First animation
gsap.to(counter, {
    val: 100,
    roundProps: "val",
    ease: customEase, // Use your custom ease
    onUpdate: function() {
      // Update the text content
      load_nmb.textContent = counter.val.toString();
      animation.goToAndStop(counter.val, true);
    },
    duration: 3 // Adjust the duration as needed
  }).then(() => {
    // Set the properties right before the second animation starts
    gsap.set(load_h1_split.chars,{
        y: '120%',
        opacity: 0
    })

    gsap.to(load_nmb,{
        y: '-120%',
        duration: 1.4,
        ease: 'expo.out',
        opacity: 0
    })

    // Second animation
    gsap.fromTo(load_h1_split.chars, {
      y: '120%',
      opacity: 0
    }, {
      y: '0%',
      opacity: 1,
      ease: 'expo.out',
      stagger: 0.02, // Stagger the animation for each character
      duration: 1.6 // Adjust the duration as needed
    }).then(() => {
      // Third animation
      tl.to(load_h1_split.chars, {
        y: '-120%',
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.01, // Stagger the animation for each character
        duration: 1.4 // Adjust the duration as needed
      }).set(load_parent, {
        zIndex: -1
      }).fromTo(background_img_wrap, {
        y: '120%',
        borderRadius: '2rem',
        scale: 0.8
      }, {
        y: '0%',
        borderRadius: '0rem',
        scale: 1,
        ease: 'expo.out',
        duration: 2.4 // Adjust the duration as needed
      }).then(() =>{
        document.body.style.overflow = 'auto';
      });
    });
  });
    

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


  }

  onLeave() {
    // run before the transition.onLeave method is called

    console.log('home is leaving');
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}

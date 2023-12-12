import { Transition } from '@unseenco/taxi'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis'

export default class homeTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    // do something ...
    console.log('its leaving home in transition');
    done()
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    // do something else ...

    console.log('its entering home in transition');


    const cmsLink = document.querySelectorAll('[data-a="cms-link"]');
    //  const cmsWrap = document.querySelectorAll('[data-a="cms-v-wrap"]');
    //  const cmsVideo = document.querySelectorAll('[data-a="cms-v"]');
    //  const cmsH2 = document.querySelectorAll('[data-a="cms-h2"]');
    //  const cmsH3 = document.querySelectorAll('[data-a="cms-h3"]');
    //  const cmsH4 = document.querySelectorAll('[data-a="cms-h4"]');
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
                onEnter: () => cmsTl.restart(),
                onEnterBack: () => cmsTl.restart(),
                // onLeave: () => cmsTl.restart(),
            }
        });
    
        cmsTl.from(cmsWrap, {
            height: '0%',
            duration: 1.6,
            ease: 'expo.out',
        }, 0.1);
    
        cmsTl.from(cmsVideo, {
            y: '-120%',
            scale: 1.2,
            ease: 'expo.out',
            duration: 1.8
        }, 0.1);
    
        // Animate the characters
        cmsTl.from(cH2.chars, {
            y: '120%',
            opacity: 0,
            stagger: 0.02,
            ease: 'expo.out',
            duration: 1.6
        }, 0.1);
    
        cmsTl.from(cH3.chars, {
            y: '120%',
            opacity: 0,
            stagger: 0.02,
            ease: 'expo.out',
            duration: 1.6
        }, 0.1);
    
        cmsTl.from(cH4.chars, {
            y: '120%',
            opacity: 0,
            stagger: 0.02,
            ease: 'expo.out',
            duration: 1.6
        }, 0.1);
    });

    done()
  }
}
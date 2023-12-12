import { Transition } from '@unseenco/taxi'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis'

export default class workTransition extends Transition {
  /**
   * Handle the transition leaving the previous page.
   * @param { { from: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onLeave({ from, trigger, done }) {
    // do something ...
    console.log('its leaving work tran');
    done()
  }

  /**
   * Handle the transition entering the next page.
   * @param { { to: HTMLElement, trigger: string|HTMLElement|false, done: function } } props
   */
  onEnter({ to, trigger, done }) {
    // do something else ...
    Webflow.destroy();
    Webflow.ready();
    Webflow.require('ix2').init();
    console.log(Webflow);


    const caseh1 = document.querySelectorAll('[data-a="case-h1"]');
    const texth1 = new SplitType(caseh1, { types: 'words, chars, lines' });

    const caseh2 = document.querySelectorAll('[data-a="case-h2"]');
    const texth2 = new SplitType(caseh2, { types: 'words, chars, lines' });

    const casetxt = document.querySelectorAll('[data-a="case-txt"]');
    const texth3 = new SplitType(casetxt, { types: 'words, chars, lines' });

    const caselinks = document.querySelectorAll('.share_link');
    const caseLine = document.querySelectorAll('[data-a="case-line"]');

    const caseVideo = document.querySelectorAll('.cms_video_embed');
    const caseVideoWrap = document.querySelectorAll('.case_video_container');




    const workTl = gsap.timeline({})


    workTl.from(caseVideoWrap,{
        height: '0vh',
        ease: 'expo.out',
        duration: 1.8
    }, 0.1),

    workTl.from(caseVideo,{
        y: '120%',
        scale: 1.2,
        ease: 'expo.out',
        duration: 1.8
    },0.2),

    workTl.from(texth1.chars,{
        y: '120%',
        opacity: 0,
        ease: 'expo.out',
        duration: 1.4,
        stagger: {
            each: 0.02
        }

    }, 0.3),

    workTl.from(caseLine,{
        width: '0%',
        ease: 'expo.out',
        duration: 1.8
    }, 0.4),

    workTl.from(texth2.chars,{
        y: '120%',
        opacity: 0,
        ease: 'expo.out',
        duration: 1.4,
        stagger: {
            each: 0.02
        }
    }, 0.5),

    workTl.from(texth3.chars,{
        y: '120%',
        opacity: 0,
        ease: 'expo.out',
        duration: 1.4,
        stagger: {
            each: 0.02
        }
    }, 0.6),

    workTl.from(caselinks,{
        scale: 0,
        opacity: 0,
        duration: 1.4,
        stagger: {
            each: 0.02
        }
    }, 0.6)


    console.log('its entering work tran');

    done()
  }
}
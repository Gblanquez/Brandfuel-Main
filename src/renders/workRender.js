import { Renderer } from '@unseenco/taxi';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
import Lenis from '@studio-freight/lenis'

let lenis;

export default class workRenderer extends Renderer {
  onEnter() {
    // run after the new content has been added to the Taxi container
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0)
    
  }

  onEnterCompleted() {
     // run after the transition.onEnter has fully completed

     document.body.style.overflow = 'auto';


     const caseVideo = document.querySelector('.cms_video_embed');
     const caseVideoWrap = document.querySelector('.case_video_container');
    const workP = document.querySelectorAll('[data-a="case-txt2"]');
    const workTitles = document.querySelectorAll('[data-a="case-title"]');
    const workLines = document.querySelectorAll('[data-a="case-line2"]');
    const workImgs = document.querySelectorAll('[data-a="case-img"]');





const resultH1 = document.querySelectorAll('.result_h1');

resultH1.forEach((element) => {
    const endValue = parseInt(element.textContent, 10);
    const obj = { val: 0 }; // start value

    gsap.to(obj, {
        val: endValue,
        roundProps: "val", // round to nearest integer
        duration: 2,
        ease: 'power1.inOut',
        onUpdate: function () {
            element.textContent = obj.val; // update the text content in each frame
        },
        scrollTrigger: {
            trigger: element,
            start: 'top center',
            toggleActions: 'restart none none none'
        }
    });
});



    workLines.forEach( (element) =>{

        gsap.from(element,{
            width: '0%',
            ease: 'expo.out',
            duration: 2,
            scrollTrigger:{
                trigger: element,
                start: 'top center'
            }
        })
    })

    workTitles.forEach((element) => {
        const workTitle = new SplitType(element, { types: 'chars' });
    
        gsap.from(workTitle.chars.flat(), {
            y: '120%',
            opacity: 0,
            delay: 0.02,
            duration: 1.8,
            ease: 'expo.out',
            stagger: {
                each: 0.02
            },
            scrollTrigger: {
                trigger: element,
                start: 'top 30%'
            }
        });
    });

    workP.forEach((element) => {
        const workText = new SplitType(element, { types: 'lines' });
    
        gsap.from(workText.lines.flat(), {
            y: '120%',
            opacity: 0,
            delay: 0.02,
            duration: 1.8,
            ease: 'expo.out',
            stagger: {
                each: 0.1
            },
            scrollTrigger: {
                trigger: element,
                start: 'top 40%'
            }
        });
    });

    workImgs.forEach((element) => {
        gsap.fromTo(element, {
            y: '-20%',
            scale: 1.4
        },
        {
            y: '10%',
            scale: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });



  }

  onLeave() {
    // run before the transition.onLeave method is called
    console.log('work is leaving');
  }

  onLeaveCompleted() {
    // run after the transition.onleave has fully completed
  }
}
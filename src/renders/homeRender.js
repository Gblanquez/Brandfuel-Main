import { Renderer } from '@unseenco/taxi';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis'


export default class homeRenderer extends Renderer {

initialLoad() {
        // run code that should only happen once for your site

    console.log('this is the initial load');

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

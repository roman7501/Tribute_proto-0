import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class Particules {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    // this.animKissText();
  }

  animKissText() {
    this.kissEls = document.querySelectorAll(".kiss");

    this.kissEls.forEach((kiss) => {
      this.kissTexts = kiss.querySelectorAll(".kiss-text");

      gsap.fromTo(
        this.kissTexts,
        {
          x: 0,
        },
        {
          scrollTrigger: {
            scroller: "[data-scroll-container]",
            trigger: ".particules",
            start: "top top",
          },
          x: "-100%",
          repeat: -1,
          duration: 15,
          ease: "linear",
          stagger: 0,
        }
      );
    });
  }
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";

export default class Lines {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

    this.textEls = document.querySelectorAll(".lines .text-beau");
  }

  anim() {
    this.animText();
    this.animMoon();
    // this.animLines();
  }

  animText() {
    this.textEls.forEach((text) => {
      let splitText = new SplitText(text, { type: "words,chars" });

      gsap.from(splitText.chars, {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: text,
          start: "top bottom",
        },
        y: 20,
        stagger: 0.05,
        duration: 6,
        yoyo: true,
        ease: "elastic",
      });
    });
  }

  animMoon() {
    gsap.from("#moon-container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-3",
        start: "top bottom-=50",
      },
      opacity: 0,
      y: 700,
      duration: 6,
      ease: "linear",
    });
  }

  animLines() {
    gsap.from("#rain-1", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#intro-1",
        start: "top top",
        endTrigger: "#text-3",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      opacity: 0,
      ease: "linear",
    });
    gsap.from("#rain-2", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-1",
        start: "top top",
        endTrigger: "#text-4",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      opacity: 0,
      ease: "linear",
    });
    gsap.from("#rain-3", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-3",
        start: "top top",
        endTrigger: "#text-5",
        end: "top top",
        scrub: true,
      },
      drawSVG: 0,
      transformOrigin: "center center",
      ease: "linear",
    });
  }
}

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
  }

  animText() {
    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "top top",
        endTrigger: ".lines",
        end: "bottom bottom",
        scrub: true,
        ease: "linear",
      },
    });

    let i = 1;
    let offset = 120;
    let opacityPrev = 0.5;
    let opacityCurrent = 1;

    /*------------------------------
      TEXT ACCORDION
    ------------------------------*/

    tl.to(".lines__container", {
      opacity: 1,
    });
    tl.to("#text-1", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-2, #text-3, #text-4, #text-5, #text-6",
      {
        y: i * offset,
        onComplete: i++,
      },
      "<"
    );

    tl.to("#text-2", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-1",
      {
        opacity: opacityPrev,
      },
      "<"
    );
    tl.to(
      " #text-3, #text-4, #text-5, #text-6",
      {
        y: i * offset,
        onComplete: i++,
      },
      "<"
    );

    tl.to("#text-3", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-2",
      {
        opacity: opacityPrev,
      },
      "<"
    );
    tl.to(
      " #text-4, #text-5, #text-6",
      {
        y: i * offset,
        onComplete: i++,
      },
      "<"
    );

    tl.to("#text-4", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-3",
      {
        opacity: opacityPrev,
      },
      "<"
    );
    tl.to(
      "#text-5, #text-6",
      {
        y: i * offset,
        onComplete: i++,
      },
      "<"
    );

    tl.to("#text-5", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-4",
      {
        opacity: opacityPrev,
      },
      "<"
    );
    tl.to(
      "#text-6",
      {
        y: i * offset,
        onComplete: i++,
      },
      "<"
    );

    tl.to("#text-6", {
      opacity: opacityCurrent,
    });
    tl.to(
      "#text-5",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.to(".lines__container", {
      opacity: 0.1,
    });
  }
}

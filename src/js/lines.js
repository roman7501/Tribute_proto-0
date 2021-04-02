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

    let offset = 0;
    let opacityPrev = 0.25;
    let opacityCurrent = 1;

    /*------------------------------
      TEXT ACCORDION
    ------------------------------*/

    // tl.to(".lines__container", {
    //   opacity: 1,
    // });
    tl.from("#text-1", {
      y: offset,
    });
    tl.to(
      "#text-1",
      {
        opacity: opacityCurrent,
      },
      "<"
    );

    tl.from("#text-2", {
      y: offset,
    });
    tl.to(
      "#text-2",
      {
        opacity: opacityCurrent,
      },
      "<"
    );
    tl.to(
      "#text-1",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.from("#text-3", {
      y: offset,
    });
    tl.to(
      "#text-3",
      {
        opacity: opacityCurrent,
      },
      "<"
    );
    tl.to(
      "#text-2",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.from("#text-4", {
      y: offset,
    });
    tl.to(
      "#text-4",
      {
        opacity: opacityCurrent,
      },
      "<"
    );
    tl.to(
      "#text-3",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.from("#text-5", {
      y: offset,
    });
    tl.to(
      "#text-5",
      {
        opacity: opacityCurrent,
      },
      "<"
    );
    tl.to(
      "#text-4",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.from("#text-6", {
      y: offset,
    });
    tl.to(
      "#text-6",
      {
        opacity: opacityCurrent,
      },
      "<"
    );
    tl.to(
      "#text-5",
      {
        opacity: opacityPrev,
      },
      "<"
    );

    tl.to(".lines__container", {
      opacity: 0.2,
    });
  }
}

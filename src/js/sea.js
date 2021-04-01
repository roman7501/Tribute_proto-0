import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

import lottie from "lottie-web";
import data from "./animations/data.json";
import data2 from "./animations/data-2.json";

export default class Sea {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin, MotionPathHelper);
  }

  anim() {
    this.animWhale();
  }

  animWhale() {
    gsap.to("#open-mouth-path", {
      morphSVG: "#closed-mouth-path",
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "linear",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#whale-full",
        start: "bottom bottom",
        endTrigger: ".whale-1",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to("#whale-full", {
      ease: "power1.inOut",
      duration: 10,
      motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.85, 0.85],
      },
    });

    // MotionPathHelper.create("#whale-full");
  }
}

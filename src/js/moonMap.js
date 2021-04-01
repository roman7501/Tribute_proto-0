import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import * as moonMapEls from "./animations/moonMap.json";

export default class MoonMap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
    this.mouse = { x: 0, y: 0 };
    this.mouseEased = { x: { value: 0 }, y: { value: 0 } };

    this.moonMapEls = moonMapEls;
  }

  anim() {
    this.animLines();
  }

  animLines() {
    /*------------------------------
      1. Draw small lines + part of triangle
    ------------------------------*/

    this.tlLines1 = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "linear",
    });

    // 1.a. draw small lines
    this.tlLines1.fromTo(
      ".small-line",
      {
        opacity: 0,
        drawSVG: "0%",
      },
      {
        opacity: 0.2,

        transformOrigin: "center center",
        drawSVG: "100%",
        scale: 3.5,
      }
    );

    // 1.b. draw part of triangle
    this.tlLines1.fromTo(
      "#triangle-down",
      {
        transformOrigin: "center center",
        drawSVG: "0%",
        scale: 4,
        opacity: 0.2,
      },
      {
        opacity: 0.2,
        scale: 1.5,
        drawSVG: "30%",
      },
      "-=0.4"
    );

    /*------------------------------
      2. CHANGE FOR PLEASE ??
    ------------------------------*/

    this.tlLines2 = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-4",
        start: "top top",
        endTrigger: ".lines",
        end: "bottom bottom",
        scrub: true,
      },
      ease: "linear",
    });

    /*------------------------------
      3. Make it turn
    ------------------------------*/

    this.tlLines3 = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "bottom bottom+=400",
        endTrigger: ".god",
        end: "center center",
        scrub: true,
      },
      ease: "linear",
    });

    // 3.a turn + fade-out triangle
    this.tlLines3.to(
      "#triangle-down",
      {
        opacity: 1,
        drawSVG: "100%",
        scale: 1.2,
        transformOrigin: "center",
        rotate: 300,
      },
      "<"
    );

    // 3.b turn + fade-out small lines
    this.tlLines3.to(
      ".small-line",
      {
        opacity: 1,
        transformOrigin: "center",
        rotate: 300,
      },
      "<"
    );

    /*------------------------------
      FADE OUT ALL ELEMENTS
    ------------------------------*/

    gsap.fromTo(
      ".big-line, .middle-line,  .moon-path, #triangle-up, .circle, .polygon",
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".voice",
          start: "bottom top",
          endTrigger: ".voice",
          start: "bottom top+=1000",
          scrub: true,
        },
        opacity: 0,
      },
      {
        opacity: 0,
      }
    );
  }
}

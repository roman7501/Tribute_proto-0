import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class MoonMap {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
    this.mouse = { x: 0, y: 0 };
    this.mouseEased = { x: { value: 0 }, y: { value: 0 } };
  }

  anim() {
    this.animLines();
    this.animMoons();
    this.metamorphose();
  }

  animCircleCenter() {
    gsap.fromTo(
      "#small-circle, #small-line-1, #small-line-2",
      { stroke: "#fff", opacity: 0, drawSVG: 0 },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#text-1",
          start: "center center",
        },
        drawSVG: "100%",
        opacity: 0.5,
        delay: 0.3,
        duration: 3.7,
        ease: "linear",
      }
    );
  }

  animLines() {
    this.animCircleCenter();

    // Init timeline
    this.tl = gsap.timeline(
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: "#text-2",
          start: "center bottom-=200",
          endTrigger: ".lines",
          end: "bottom bottom",
          scrub: true,
        },
        ease: "linear",
      },
      "<"
    );

    this.tl.from(
      "#big-line-2",
      {
        transformOrigin: "center center",
        drawSVG: 0,
        scale: 5,
        opacity: 0,
      },
      "<"
    );

    this.tl.from(
      "#big-line-3,#big-line-1",
      {
        transformOrigin: "center center",
        opacity: 0,
      },
      "<"
    );
    this.tl.from(
      ".middle-line, #triangle-down, #triangle-up, #small-polygon, #big-polygon",
      {
        drawSVG: 0,
        transformOrigin: "center center",
      },
      "<"
    );
    this.tl.from(
      "#big-circle",
      {
        drawSVG: 0,
        scale: 6,
        opacity: 1,
      },
      "<"
    );
  }

  animMoons() {
    gsap.from("#moon-1,#moon-2,#moon-6", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
      },
      opacity: 0,
      duration: 3,
      ease: "linear",
    });
    gsap.from("#moon-8,#moon-4,#moon-5, #moon-3, #moon-7", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
      },
      opacity: 0,
      duration: 3,
      ease: "linear",
    });
    gsap.from("#moon-path__wrapper", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: "#text-5",
        start: "top top",
      },
      transformOrigin: "center center",
      rotation: -50,
      duration: 2.5,
      ease: "linear",
    });
  }

  metamorphose() {
    this.tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".lines",
        start: "bottom top",
        endTrigger: ".god",
        end: "bottom center",
        scrub: true,
        ease: "linear",
      },
    });

    // 1. Rotate little bit

    this.tl.to("#moon-path__wrapper", {
      transformOrigin: "center center",
      rotation: 360,
      scale: 0.8,
    });

    this.tl.to(
      "#triangle-down",
      {
        transformOrigin: "center center",
        rotation: 50,
      },
      "<"
    );
    this.tl.to(
      "#triangle-up",
      {
        transformOrigin: "center center",
        rotation: -30,
      },
      "<"
    );

    this.tl.to(
      ".middle-line",
      {
        scale: 1.4,
        opacity: 0.15,
      },
      "<"
    );
    this.tl.to(
      "#big-circle",
      {
        opacity: 0.1,
      },
      "<"
    );

    // 2. Get smaller

    this.tl.to("#moon-path__wrapper", {
      transformOrigin: "center center",
      rotation: 2 * 360,
      scale: 0.04,
      opacity: 0,
    });

    this.tl.to(
      "#big-polygon",
      {
        transformOrigin: "center center",
        rotation: 2 * 360,
        scale: 0.1,
      },
      "<"
    );

    this.tl.to(
      "#small-polygon",
      {
        transformOrigin: "center center",
        rotation: 2 * 360,
        scale: 0.1,
      },
      "<"
    );
    this.tl.to(
      ".small-line",
      {
        transformOrigin: "center center",
        rotation: 2 * 360,
        scale: 0.1,
      },
      "<"
    );

    this.tl.to(
      "#triangle-down, #triangle-up",
      {
        transformOrigin: "center center",
        rotation: 70,
        scale: 3,
      },
      "<"
    );

    this.tl.to(
      ".middle-line",
      {
        transformOrigin: "center center",
        rotation: 70,
        scale: 4.7,
      },
      "<"
    );

    this.tl.to(
      ".big-line",
      {
        rotation: -70,
        scale: 0.7,
      },
      "<"
    );
    this.tl.to(
      "#big-circle",
      {
        transformOrigin: "center center",
        scale: 0.05,
      },
      "<"
    );
    this.tl.to(
      "#small-circle",
      {
        transformOrigin: "center center",
        scale: 0.2,
      },
      "<"
    );

    // 3. Change color

    this.tl.to("#small-circle", {
      fill: "#2070F0",
      opacity: 1,
    });

    this.tl.to(
      "#triangle-down, #triangle-up",
      {
        transformOrigin: "center center",

        rotation: 120,
        scale: 4.7,
      },
      "<"
    );

    this.tl.to(
      ".big-line",
      {
        opacity: 0.05,
        rotation: 120,
        scale: 10.7,
      },
      "<"
    );
    this.tl.to(
      ".middle-line",
      {
        opacity: 0.05,
        rotation: 120,
        scale: 10.7,
      },
      "<"
    );
    this.tl.to(
      "#middle-line-4",
      {
        opacity: 1,
        rotation: 40,
        scale: 4,
        stroke: "#174CA2",
      },
      "<"
    );

    // this.tl.to("#moon-map__container", {
    //   scrollTrigger: {
    //     pin: true,
    //   },
    //   x: -300,
    // });
  }
}

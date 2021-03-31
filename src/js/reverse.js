import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

export default class Reverse {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
  }

  anim() {
    this.animGod();
    this.animCatch();
  }

  animGod() {
    // Snap position .god
    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".god",
      start: "center center",
      endTrigger: ".reverse",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      ease: "linear",
    });

    this.tlMoon = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".reverse",
        start: "top bottom",
        endTrigger: ".catch",
        end: "top center",
        scrub: true,
      },
      ease: "linear",
    });

    // God appears from right
    gsap.to(".god", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god",
        start: "center center",
        endTrigger: ".catch",
        end: "top bottom+=200",
        scrub: true,
      },
      x: 0,
      ease: "linear",
    });

    // Small lines leave
    this.tlMoon.to("#small-line-1", {
      opacity: 0.4,
      x: "100vw",
    });

    this.tlMoon.to(
      "#small-line-2",
      {
        opacity: 0.4,
        x: "-100vw",
      },
      "<"
    );

    // Triangle get bigger
    this.tlMoon.to(
      "#triangle-down",
      {
        opacity: 0.4,
        scale: 4,
      },
      "<"
    );

    // New line appear in the middle
    this.tlMoon.fromTo(
      "#big-line-3",
      {
        drawSVG: "0%",
        scale: 1,
      },
      {
        drawSVG: "50%",
        opacity: 1,
        scale: 6,
      },
      "<"
    );
  }

  animCatch() {
    this.tlCatch = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".catch",
        start: "center bottom",
        endTrigger: ".reverse",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // New line gets down
    this.tlCatch.to("#big-line-3", {
      y: "400",
    });

    // God fade out
    this.tlCatch.to(
      ".god",

      {
        opacity: 0.1,
      },
      "<"
    );

    // Snap catch
    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".catch",
      start: "center center",
      endTrigger: ".reverse",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      ease: "linear",
    });

    this.tlCatchReverse = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".catch",
        start: "center center-=10",
        endTrigger: ".reverse",
        end: "bottom bottom",
        scrub: true,
      },
    });

    /*------------------------------
      ROTATION
    ------------------------------*/

    // new triangle draw + rotate
    this.tlCatchReverse.fromTo(
      "#triangle-up",
      {
        drawSVG: "0%",
        scale: 1,
        opacity: 1,
      },
      {
        drawSVG: "100%",
        opacity: 1,
        scale: 3,
        rotate: -400,
      }
    );

    // prev triangle rotate + offset
    this.tlCatchReverse.to(
      "#triangle-down",
      {
        x: -400,
        rotate: 200,
      },
      "<"
    );

    // Catch rotate
    this.tlCatchReverse.to(
      ".catch",
      {
        transformOrigin: "center",
        rotate: 200,
      },
      "<"
    );

    // Line rotate
    this.tlCatchReverse.to(
      "#big-line-3",
      {
        x: -400,
        rotate: 200,
      },
      "<"
    );

    /*------------------------------
      ROTATION II
    ------------------------------*/

    this.tlCatchReverse.to("#moon-map__container", {
      transformOrigin: "center",
      scale: 0.7,
      rotate: 100,
    });

    /*------------------------------
      NEW CIRCLE
    ------------------------------*/

    // drawing circle
    this.tlCatchReverse.fromTo(
      "#big-circle",
      {
        drawSVG: "50%",
      },
      {
        drawSVG: "100%",
        opacity: 1,
        x: 400,
        scale: 4,
      },
      "<"
    );

    // Fade out new triangle
    this.tlCatchReverse.to(
      "#triangle-up",
      {
        opacity: 0.2,
      },
      "<"
    );

    // Fade in "How i fell"
    this.tlCatchReverse.to(
      ".fell",
      {
        opacity: 1,
      },
      "<"
    );

    // Rotate the moon map
    this.tlCatchReverse.to(
      ".moon__container",
      {
        transformOrigin: "center",
        opacity: 1,
        rotate: 100,
      },
      "<"
    );

    /*------------------------------
      ROTATE THE MOONS + THE MOON MAP
    ------------------------------*/
    this.tlParticules = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top bottom",
        endTrigger: ".sea",
        end: "bottom bottom",
        scrub: true,
        ease: "linear",
      },
    });

    this.tlParticules.to(".moon__container", {
      rotate: 360,
    });
    this.tlParticules.to(
      "#moon-map__container",
      {
        rotate: 360,
      },
      "<"
    );
  }
}

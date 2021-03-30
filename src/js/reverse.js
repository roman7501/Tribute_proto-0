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
    // this.animGodReversed();
    this.animTransition();
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

    // New line appear in the middle
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

    this.tlCatchReverse.to(
      "#triangle-down",
      {
        x: -400,
        rotate: 200,
      },
      "<"
    );
    this.tlCatchReverse.to(
      ".catch",
      {
        transformOrigin: "center",
        rotate: 200,
      },
      "<"
    );
    this.tlCatchReverse.to(
      "#big-line-3",
      {
        x: -400,
        rotate: 200,
      },
      "<"
    );
    this.tlCatchReverse.to(".catch", {
      x: -2000,
      rotate: 200,
    });

    this.tlCatchReverse.to(
      "#moon-map__container",
      {
        transformOrigin: "center",
        scale: 0.7,
        rotate: 100,
      },
      "<"
    );
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
    this.tlCatchReverse.to(
      "#triangle-up",
      {
        opacity: 0.2,
      },
      "<"
    );
  }

  animGodReversed() {
    this.tlGodReversed = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".god-reversed",
        start: "top bottom",
        endTrigger: ".reverse",
        end: "bottom bottom",
        scrub: true,
      },
    });

    this.tlGodReversed.to(".god-reversed", {
      rotate: 180,
    });

    this.tlGodReversed.to(
      "#small-circle",
      {
        scale: 0,
      },
      "<"
    );
  }

  animTransition() {
    gsap.to(".moon-map__container", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".particules",
        start: "top bottom",
        end: "top top-=3000",
        scrub: true,
      },
      y: "-180vh",
    });
  }
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { SplitText } from "gsap/SplitText";

export default class Reverse {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin, SplitText);
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

    // Fade in God
    gsap.fromTo(
      ".god",
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".god",
          start: "center center",
          endTrigger: ".catch",
          end: "top bottom+=200",
          scrub: true,
        },
        opacity: 1,
        ease: "linear",
      }
    );

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

    this.tlCatch = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".catch",
        start: "center center",
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

    // Catch fade in
    this.tlCatch.fromTo(
      ".catch",
      { opacity: 0 },
      {
        opacity: 1,
      },
      "<"
    );

    this.tlCatch.to(
      "#big-line-3, #big-circle, #triangle-up, #triangle-down",
      {
        stroke: "#fc00bd",
      },
      "<"
    );

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

    // Fade in "How i fell"
    this.tlCatchReverse.to(
      ".fell",
      {
        opacity: 1,
      },
      "<"
    );

    /*------------------------------
      ANIM COMING BACK
    ------------------------------*/

    // Snap position .coming-back
    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".coming-back__wrapper",
      start: "center center",
      endTrigger: ".particules",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      ease: "linear",
    });

    this.tlComing = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".coming-back__wrapper",
        start: "center center",
        endTrigger: ".particules",
        end: "bottom bottom",
        scrub: true,
        ease: "linear",
      },
    });

    // Rotation coming wrapper
    gsap.fromTo(
      ".coming-back__wrapper",
      {
        rotate: 100,
      },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".coming-back__wrapper",
          start: "center center",
          endTrigger: ".particules",
          end: "bottom bottom",
          scrub: true,
          ease: "linear",
        },
        rotate: -270,
      }
    );

    // Fade text elements coming back
    this.tlComing.to(".youre", {
      opacity: 1,
    });

    this.tlComing.to(
      ".coming",
      {
        opacity: 1,
      },
      "<"
    );

    this.tlComing.to(".place", {
      opacity: 1,
    });

    this.tlComing.to(".where, .you, .came, .from", {
      opacity: 1,
      stagger: 0.56,
    });

    this.tlComing.to(
      ".coming, .place",
      {
        opacity: 0.1,
        delay: 0.5,
      },
      "<"
    );

    /*------------------------------
      ROTATE LINES
    ------------------------------*/
    this.tlParticules1 = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".reverse",
        start: "bottom bottom",
        endTrigger: ".sea",
        end: "bottom bottom",
        scrub: true,
        ease: "linear",
      },
    });

    this.tlParticules1.to(
      ".lines__container",
      {
        autoAlpha: 0,
      },
      "<"
    );
    this.tlParticules1.to(
      "#triangle-up",
      {
        rotate: -500,
      },
      "<"
    );
    this.tlParticules1.to(
      "#triangle-down",
      {
        x: -500,
        rotate: 300,
      },
      "<"
    );
    // this.tlParticules1.to(
    //   "#big-line-3, #big-circle, #triangle-up, #triangle-down",
    //   {
    //     rotate: 250,
    //     duration: 2,
    //   },
    //   "<"
    // );
    /*------------------------------
      ANIM ACROSS SEA
    ------------------------------*/
    this.tlSea = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".sea",
        start: "top bottom",
        endTrigger: ".voice",
        end: "top top",
        scrub: true,
        ease: "linear",
      },
    });

    const mySplitText = new SplitText(".text-sea", { type: "words" });

    this.tlSea.fromTo(
      mySplitText.words,
      {
        opacity: 0,
      },
      {
        opacity: 0.6,
        stagger: 1,
        duration: 3,
      }
    );
    this.tlSea.to(
      ".text-sea",
      {
        color: "#2070f0",
        duration: 12,
      },
      "<"
    );
    this.tlSea.to(
      "#triangle-down, #triangle-up, #big-circle, #big-line-3, #big-line-1, .small-line",
      {
        stroke: "#2070f0",
      },
      "<"
    );

    /*------------------------------
      REVEAL MOON MAP
    ------------------------------*/

    this.tlVoice = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".voice",
        start: "top bottom",
        endTrigger: ".voice",
        end: "bottom top",
        scrub: true,
        ease: "linear",
      },
    });

    this.tlVoice.to("#triangle-down, #triangle-up, #big-circle, #big-line-3, #big-line-1, .small-line", {
      scale: 1,
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
    });

    // this.tlVoice.fromTo(
    //   ".middle-line",
    //   {
    //     drawSVG: "0%",
    //     opacity: 0.5,
    //     stroke: "#2070f0",
    //   },
    //   {
    //     drawSVG: "100%",
    //     opacity: 0.5,
    //     stroke: "#2070f0",
    //   },
    //   "<"
    // );
    this.tlVoice.fromTo(
      ".moon-path",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<"
    );
    this.tlVoice.to(
      ".text-sea",
      {
        opacity: 0.1,
      },
      "<"
    );
    this.tlVoice.to(
      ".moon-map__container",
      {
        x: -200,
        y: -200,
        scale: 0.2,
        delay: 0.4,
      },
      "<"
    );
  }
}

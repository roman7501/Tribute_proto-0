import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

import lottie from "lottie-web";
import data from "./animations/data.json";
import data2 from "./animations/data-2.json";

export default class Particules {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);

    this.sunMapContainer = document.querySelector(".sun-map__container");
    this.particulesContainer = document.querySelector(".particules__container");
    lottie.loadAnimation({
      container: this.particulesContainer, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: data,
    });
  }

  anim() {
    this.animKissText();
    this.animTextSea();
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

  animTextSea() {
    gsap.to(".kill-wrapper", {
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".kill-wrapper",
        start: "top bottom",
      },
      backgroundPositionX: `-100vw`,
      repeat: -1,
      duration: 20,
      ease: "linear",
    });
  }
}

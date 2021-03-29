import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { SplitText } from "gsap/SplitText";

import * as subtitles from "./animations/subtitles.json";
import { RedIntegerFormat } from "three";

export default class Subtitles {
  constructor() {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, DrawSVGPlugin, SplitText);

    this.subtitles = subtitles;
    this.createSubtitles();
  }

  anim() {
    gsap.fromTo(
      ".subtitles",
      { opacity: 0 },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".title",
          start: "top top",
        },
        opacity: 1,
      }
    );

    this.animSubtitles();
  }

  animSubtitles() {
    Object.keys(this.subtitles).forEach((sub, i) => {
      if (sub === "default") return;
      let sTrig = Object.entries(this.subtitles[sub])[0][1];
      let spTrig = Object.entries(this.subtitles[sub])[1][1];

      const tl = gsap.timeline({
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: sTrig,
          start: spTrig,
        },
      });

      // FADE IN
      tl.from(`#subtitle-${i + 1}`, {
        autoAlpha: 0,
        duration: 2,
      });

      // FADE OUT
      tl.to(`#subtitle-${i + 1}`, {
        autoAlpha: 0,
        duration: 6,
      });
    }, "+=2");
  }

  createSubtitles() {
    const subtitlesContainer = document.querySelector(".subtitles");
    Object.keys(this.subtitles).forEach((sub, i) => {
      if (sub === "default") return;

      const subEl = document.createElement("p");

      subEl.className += `text subtitle subtitle-${i + 1}`;
      subEl.id += `subtitle-${i + 1}`;
      subEl.innerText = sub;

      subtitlesContainer.appendChild(subEl);
    });
  }
}

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

export default class Header {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, SplitText);
  }

  anim() {
    gsap.from(".title", { opacity: 0 });

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".title",
      start: "top top+=270vh",
      endTrigger: ".reverse",
      end: "top bottom-=300",
      scrub: true,
      pin: true,
      ease: "linear",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".header",
        start: "top top",
        endTrigger: ".header",
        end: "bottom top",
        scrub: true,
      },
      ease: "linear",
    });

    const titleTop = new SplitText(".title-top", { type: "words" });
    const topLine = new SplitText(".top-line", { type: "words" });
    const titleDesc = new SplitText(".title .desc", { type: "words" });

    tl.to(titleTop.words, {
      y: "-100%",
    });
    tl.to(
      topLine.words,
      {
        y: "-100%",
        duration: 0.1,
      },
      "<"
    );
    tl.from(
      titleDesc.words,
      {
        y: "-100%",
        duration: 0.2,
        delay: 0.3,
      },
      "<"
    );
    tl.to(titleDesc.words, {
      opacity: 0,
      delay: 0.3,
    });
  }
}

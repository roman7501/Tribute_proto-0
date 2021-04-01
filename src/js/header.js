import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

export default class Header {
  constructor() {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  }

  anim() {
    gsap.from(".title", { opacity: 0 });
    gsap.from("#info", { opacity: 0, duration: 1 });

    gsap.fromTo(
      ".info",
      { opacity: 0.7 },
      {
        scrollTrigger: {
          scroller: "[data-scroll-container]",
          trigger: ".header",
          start: "top top-=200",
          end: "center top-=200",
          scrub: true,
        },
        opacity: 0,
        ease: "linear",
      }
    );

    ScrollTrigger.create({
      scroller: "[data-scroll-container]",
      trigger: ".title",
      start: "top top+=320vh",
      endTrigger: ".lines",
      end: "top bottom-=300",
      scrub: true,
      pin: true,
      ease: "linear",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scroller: "[data-scroll-container]",
        trigger: ".info",
        start: "center center+=300",
        endTrigger: ".lines",
        end: "top bottom-=300",
        scrub: true,
      },
      ease: "linear",
    });

    tl.to(".title h1 span", {
      opacity: 0,
      x: -100,
    });
    tl.to(
      ".title .top-line",
      {
        opacity: 0,
        x: -200,
      },
      "<"
    );

    tl.to(
      ".title .title-top",
      {
        x: -150,
      },
      "<"
    );
    tl.fromTo(
      ".title .desc",
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
      },
      "<"
    );
  }
}

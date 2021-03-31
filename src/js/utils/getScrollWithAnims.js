import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import LocomotiveScroll from "locomotive-scroll";

import ProgressBar from "../progressBar.js";
import Subtitles from "../subtitles.js";
import Header from "../header.js";
import Lines from "../lines.js";
import MoonMap from "../moonMap.js";
import Reverse from "../reverse.js";
import Particules from "../particules.js";
import Sea from "../sea.js";

export default class getScrollWithAnims {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);

    this.progressBar = new ProgressBar();
    this.header = new Header();
    this.lines = new Lines();
    this.moonMap = new MoonMap();
    this.reverse = new Reverse();
    this.particules = new Particules();
    this.sea = new Sea();
    // this.subtitles = new Subtitles();

    this.scrollPosition = null;

    this.scrollAndAnims();
  }

  AnimProgressBar(locoScroll) {
    locoScroll.on("scroll", (e) => {
      this.scrollPosition = Math.round((e.scroll.y / e.limit.y) * 100);
      this.progressBar.animOnScroll(this.scrollPosition);
    });
  }

  scrollAndAnims() {
    /**
     * Scroll set up
     */
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "[data-scroll-container]" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed",
    });

    /**
     * Animations
     */
    this.AnimProgressBar(locoScroll);
    this.progressBar.anim();
    this.header.anim();
    this.lines.anim();
    this.moonMap.anim();
    this.reverse.anim();
    this.particules.anim();
    this.sea.anim();
    // this.subtitles.anim();

    /**
     * Scroll event listener
     */
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }

  scrollEventListener() {}
}

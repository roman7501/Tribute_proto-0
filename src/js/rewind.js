export default class Rewind {
  constructor() {
    this.btnRewind = document.getElementById("rewind");
    this.header = document.querySelector(".header");
  }

  anim(locoScroll) {
    this.btnRewind.addEventListener("click", () => {
      locoScroll.scrollTo(this.header, { duration: 12000, easing: [0.7, 0.05, 0.55, 0.86] });
    });
  }
}

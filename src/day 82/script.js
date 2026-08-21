const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

// Object
const animation = {
  isAnimating: false,

  start() {
    this.isAnimating = true;
    box.classList.add("animate");
    animateBtn.textContent = "Reset";
  },

  reset() {
    this.isAnimating = false;
    box.classList.remove("animate");
    animateBtn.textContent = "Animate";
  },

  toggle() {
    if (this.isAnimating) {
      this.reset();
    } else {
      this.start();
    }
  }
};

// Button event
animateBtn.addEventListener("click", () => {
  animation.toggle();
});

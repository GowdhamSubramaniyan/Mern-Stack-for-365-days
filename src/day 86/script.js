// =========================
// GET HTML ELEMENTS
// =========================

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const status = document.getElementById("status");


// =========================
// ANIMATION STATE
// =========================

const animation = {

  // Stores whether the animation is active
  isAnimating: false,


  // Activate animation
  start() {
    this.isAnimating = true;

    // Add animation class
    box.classList.add("animate");

    // Update button
    animateBtn.textContent = "Reset";

    // Update accessibility state
    animateBtn.setAttribute("aria-pressed", "true");

    // Tell screen readers the current state
    status.textContent = "Animation is active";
  },


  // Reset animation
  reset() {
    this.isAnimating = false;

    // Remove animation class
    box.classList.remove("animate");

    // Update button
    animateBtn.textContent = "Animate";

    // Update accessibility state
    animateBtn.setAttribute("aria-pressed", "false");

    // Tell screen readers the current state
    status.textContent = "Animation is inactive";
  },


  // Toggle animation
  toggle() {
    if (this.isAnimating) {
      this.reset();
    } else {
      this.start();
    }
  }
};


// =========================
// CLICK EVENT
// =========================

animateBtn.addEventListener("click", () => {
  animation.toggle();
});

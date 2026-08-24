// =========================
// GET HTML ELEMENTS
// =========================

const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");


// =========================
// ANIMATION OBJECT
// =========================

const animation = {

  // Stores the current animation state
  isAnimating: false,


  // Start the animation
  start() {
    this.isAnimating = true;

    // Add the CSS animation class
    box.classList.add("animate");

    // Change button text
    animateBtn.textContent = "Reset";
  },


  // Reset the animation
  reset() {
    this.isAnimating = false;

    // Remove the CSS animation class
    box.classList.remove("animate");

    // Change button text
    animateBtn.textContent = "Animate";
  },


  // Toggle between animation and reset
  toggle() {
    if (this.isAnimating) {
      this.reset();
    } else {
      this.start();
    }
  }
};


// =========================
// BUTTON EVENT
// =========================

// Run the toggle method when the button is clicked
animateBtn.addEventListener("click", () => {
  animation.toggle();
});

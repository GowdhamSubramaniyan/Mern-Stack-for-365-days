function handleChoice(choice) {
  const result = document.getElementById("result");

  result.textContent = "You chose: " + choice;
}

const foodButton = document.getElementById("foodBtn");
const movieButton = document.getElementById("movieBtn");
const gameButton = document.getElementById("gameBtn");

foodButton.addEventListener("click", function () {
  handleChoice("Order Food");
});

movieButton.addEventListener("click", function () {
  handleChoice("Watch Movie");
});

gameButton.addEventListener("click", function () {
  handleChoice("Play Game");
});

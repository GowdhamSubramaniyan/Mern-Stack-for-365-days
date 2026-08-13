// State
let score = 0;


// Arrow function
const handleChoice = (choice) => {

    if (choice === "Order Food") {
        return "Let's order some food! 🍕";
    }

    else if (choice === "Watch Movie") {
        return "Let's watch a movie! 🎬";
    }

    else if (choice === "Play Game") {
        return "Let's play a game! 🎮";
    }

    else {
        return "I don't understand your choice.";
    }
};


// Get buttons
const foodButton = document.getElementById("foodBtn");
const movieButton = document.getElementById("movieBtn");
const gameButton = document.getElementById("gameBtn");

// Get result
const result = document.getElementById("result");


// Food button
foodButton.addEventListener("click", () => {

    score = score + 1;

    const message = handleChoice("Order Food");

    result.textContent = message + " | Score: " + score;

});


// Movie button
movieButton.addEventListener("click", () => {

    score = score + 1;

    const message = handleChoice("Watch Movie");

    result.textContent = message + " | Score: " + score;

});


// Game button
gameButton.addEventListener("click", () => {

    score = score + 1;

    const message = handleChoice("Play Game");

    result.textContent = message + " | Score: " + score;

});

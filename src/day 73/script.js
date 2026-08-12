function handleChoice(choice) {

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
}


// Get the buttons
const foodButton = document.getElementById("foodBtn");
const movieButton = document.getElementById("movieBtn");
const gameButton = document.getElementById("gameBtn");

// Get the result area
const result = document.getElementById("result");


// Food button
foodButton.addEventListener("click", function () {

    const message = handleChoice("Order Food");

    result.textContent = message;

});


// Movie button
movieButton.addEventListener("click", function () {

    const message = handleChoice("Watch Movie");

    result.textContent = message;

});


// Game button
gameButton.addEventListener("click", function () {

    const message = handleChoice("Play Game");

    result.textContent = message;

});

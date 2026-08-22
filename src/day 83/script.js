// Select elements from the DOM

const title = document.getElementById("title");
const subtitle = document.querySelector("#subtitle");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");


// Reusable function

function showMessage(messageId, message) {
    const element = document.querySelector(messageId);

    element.textContent = message;
}


// Button 1

button1.addEventListener("click", function () {
    showMessage("#message1", "hello im gowdham .");
});


// Button 2

button2.addEventListener("click", function () {
    showMessage("#message2", "JavaScript makes websites interactive.");
});


// Button 3

button3.addEventListener("click", function () {
    showMessage("#message3", "Functions help us avoid repeated code.");
});


// Change the title

title.textContent = "Day 83 - DOM Functions";

subtitle.textContent = "Selecting elements and reusing code";

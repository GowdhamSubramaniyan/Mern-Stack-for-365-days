const form = document.querySelector("#userForm");
const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (name === "") {
    message.textContent = "Please enter your name.";
    return;
  }

  if (age <= 0 || age > 120) {
    message.textContent = "Please enter a valid age.";
    return;
  }

  message.textContent = `Welcome, ${name}!`;
});

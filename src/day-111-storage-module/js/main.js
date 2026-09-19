import { saveData, loadData } from "./storage.js";

const saveButton = document.getElementById("saveButton");
const loadButton = document.getElementById("loadButton");
const status = document.getElementById("status");
const userList = document.getElementById("userList");

const users = [
  { name: "Alex" },
  { name: "Sam" },
  { name: "John" }
];

function displayUsers(users) {
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

saveButton.addEventListener("click", () => {
  saveData("users", users);
  status.textContent = "Users saved!";
});

loadButton.addEventListener("click", () => {
  const savedUsers = loadData("users");

  if (!savedUsers) {
    status.textContent = "No saved users.";
    return;
  }

  displayUsers(savedUsers);
  status.textContent = "Users loaded!";
});

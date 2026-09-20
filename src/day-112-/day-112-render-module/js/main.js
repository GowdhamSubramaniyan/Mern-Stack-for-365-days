import { saveData, loadData } from "./storage.js";
import { renderUsers, showStatus } from "./render.js";

const userList = document.getElementById("userList");
const status = document.getElementById("status");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");

const users = [
  { name: "Gowshik" },
  { name: "Alex" },
  { name: "Sarah" }
];

renderUsers(users, userList);

saveBtn.addEventListener("click", () => {
  saveData("users", users);
  showStatus("Users saved!", status);
});

loadBtn.addEventListener("click", () => {
  const savedUsers = loadData("users");

  if (!savedUsers) {
    showStatus("No saved users found.", status);
    return;
  }

  renderUsers(savedUsers, userList);
  showStatus("Saved users loaded!", status);
});

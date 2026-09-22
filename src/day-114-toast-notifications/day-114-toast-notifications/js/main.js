import { showToast } from "./toast.js";

const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const errorBtn = document.getElementById("errorBtn");

saveBtn.addEventListener("click", () => {
  showToast("Data saved successfully!");
});

deleteBtn.addEventListener("click", () => {
  showToast("User deleted!");
});

errorBtn.addEventListener("click", () => {
  showToast("Something went wrong.", "error");
});

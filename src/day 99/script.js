const taskText = document.getElementById("taskText");
const completeBtn = document.getElementById("completeBtn");

function toggleComplete() {
    taskText.classList.toggle("completed");

    if (taskText.classList.contains("completed")) {
        completeBtn.textContent = "Undo";
    } else {
        completeBtn.textContent = "Complete";
    }
}

completeBtn.addEventListener("click", toggleComplete);

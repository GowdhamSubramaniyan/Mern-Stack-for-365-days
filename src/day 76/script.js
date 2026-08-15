const tasks = [
    "Learn HTML",
    "Learn CSS",
    "Learn JavaScript",
    "Learn React",
    "Learn Node.js"
];

let completed = 0;

const task = document.getElementById("task");
const progress = document.getElementById("progress");
const completeButton = document.getElementById("completeBtn");

completeButton.addEventListener("click", () => {

    if (completed < tasks.length) {

        completed = completed + 1;

        progress.textContent = completed + " of " + tasks.length;

        if (completed < tasks.length) {
            task.textContent = tasks[completed];
        } else {
            task.textContent = "All tasks completed! 🎉";
            completeButton.disabled = true;
        }
    }

});

let tasks = [];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

function saveTasks() {
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");

        li.textContent = task;

        taskList.appendChild(li);
    });
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);

    saveTasks();
    displayTasks();

    taskInput.value = "";
});

loadTasks();
displayTasks();

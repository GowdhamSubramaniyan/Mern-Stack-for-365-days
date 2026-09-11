let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


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

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    displayTasks();

    taskInput.value = "";

});


displayTasks();

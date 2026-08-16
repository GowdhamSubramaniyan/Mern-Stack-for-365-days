const tasks = [];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = taskInput.value;

    tasks.push(task);

    taskList.innerHTML = "";

    tasks.forEach((task) => {

        const listItem = document.createElement("li");

        listItem.textContent = task;

        taskList.appendChild(listItem);

    });

    taskInput.value = "";

});

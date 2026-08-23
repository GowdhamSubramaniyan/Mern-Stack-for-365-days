// Select elements

const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

const error = document.querySelector("#error");
const status = document.querySelector("#status");


// Add task function

function addTask() {

    // Get input value

    const taskText = taskInput.value.trim();


    // EDGE CASE 1:
    // User enters nothing

    if (taskText === "") {

        error.textContent = "Please enter a task.";

        return;
    }


    // Clear error message

    error.textContent = "";


    // Create new list item

    const task = document.createElement("li");

    task.classList.add("task");


    // Add task text

    task.innerHTML = `
        <span>${taskText}</span>

        <button class="delete-button">
            Delete
        </button>
    `;


    // Add task to list

    taskList.appendChild(task);


    // Clear input

    taskInput.value = "";


    // Update status

    status.textContent = "Your tasks:";
}


// Delete task

function deleteTask(task) {

    task.remove();


    // EDGE CASE 2:
    // No tasks remaining

    if (taskList.children.length === 0) {

        status.textContent = "No more tasks. Add a new task!";
    }
}


// Add button event

addButton.addEventListener("click", addTask);


// Delete button event

taskList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-button")) {

        const task = event.target.parentElement;

        deleteTask(task);
    }
});

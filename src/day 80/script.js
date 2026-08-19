let tasks = ["Study JavaScript", "Go to Gym", "Read a Book"];

let taskList = document.getElementById("taskList");
let restartBtn = document.getElementById("restartBtn");


// Display tasks
function showTasks() {

  taskList.innerHTML = "";

  tasks.forEach(function(task) {

    let li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

  });
}


// Display tasks when page loads
showTasks();


// Restart button
restartBtn.addEventListener("click", function() {

  tasks = ["Study JavaScript", "Go to Gym", "Read a Book"];

  showTasks();

});

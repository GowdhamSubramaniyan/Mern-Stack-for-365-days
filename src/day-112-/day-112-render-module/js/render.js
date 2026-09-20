export function renderUsers(users, userList) {
  userList.innerHTML = "";

  if (!users || users.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No users found.";
    userList.appendChild(li);
    return;
  }

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

export function showStatus(message, statusElement) {
  statusElement.textContent = message;
}

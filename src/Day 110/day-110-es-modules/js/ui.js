export function showLoading(status) {
    status.textContent = "Loading...";
}

export function showError(status) {
    status.textContent = "❌ Something went wrong.";
}

export function showEmpty(status) {
    status.textContent = "No users found.";
}

export function displayUsers(status, userList, users) {
    userList.innerHTML = "";

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user.name;
        userList.appendChild(li);
    });

    status.textContent = "Users loaded!";
}

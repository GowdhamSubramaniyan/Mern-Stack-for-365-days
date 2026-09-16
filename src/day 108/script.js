const status = document.getElementById("status");
const userList = document.getElementById("userList");

async function loadUsers() {

    status.textContent = "Loading...";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to load users.");
        }

        const users = await response.json();

        status.textContent = "Users loaded!";

        users.forEach((user) => {

            const li = document.createElement("li");

            li.textContent = user.name;

            userList.appendChild(li);
        });

    } catch (error) {

        status.textContent = "❌ Something went wrong.";

        console.log(error);

    }
}

loadUsers();

const status = document.getElementById("status");
const userContainer = document.getElementById("userContainer");

const userData = {
    name: "Gowdham",
    age: 23,
    course: "Engineering Management"
};

function loadUser() {

    status.textContent = "Loading...";

    setTimeout(() => {

        const jsonData = JSON.stringify(userData);

        const user = JSON.parse(jsonData);

        status.textContent = "Data loaded!";

        userContainer.innerHTML = `
            <h2>${user.name}</h2>
            <p>Age: ${user.age}</p>
            <p>Course: ${user.course}</p>
        `;

    }, 2000);
}

loadUser();

const state = {
    online: true
};

const status = document.getElementById("status");
const button = document.getElementById("button");

button.addEventListener("click", function () {

    state.online = !state.online;

    if (state.online) {
        status.textContent = "Online";
        status.classList.add("online");
        status.classList.remove("offline");
    } else {
        status.textContent = "Offline";
        status.classList.add("offline");
        status.classList.remove("online");
    }

});

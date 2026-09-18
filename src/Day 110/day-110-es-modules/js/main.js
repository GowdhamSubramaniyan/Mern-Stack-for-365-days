import { getUsers } from "./api.js";

import {
    showLoading,
    showError,
    showEmpty,
    displayUsers
} from "./ui.js";

const status = document.getElementById("status");
const userList = document.getElementById("userList");

async function loadUsers() {
    showLoading(status);

    try {
        const users = await getUsers();

        if (users.length === 0) {
            showEmpty(status);
            return;
        }

        displayUsers(status, userList, users);
    } catch (error) {
        showError(status);
        console.log(error);
    }
}

loadUsers();

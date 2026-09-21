import {saveData,loadData} from "./storage.js";
import {renderUsers} from "./render.js";
const userList=document.getElementById("userList");const status=document.getElementById("status");const deleteModal=document.getElementById("deleteModal");const cancelBtn=document.getElementById("cancelBtn");const confirmDeleteBtn=document.getElementById("confirmDeleteBtn");
let users=loadData("users")||[{id:1,name:"Gowshik"},{id:2,name:"Alex"},{id:3,name:"Sarah"}];let userToDelete=null;
function refreshUsers(){renderUsers(users,userList);saveData("users",users);}
function closeDeleteModal(){userToDelete=null;deleteModal.classList.add("hidden");}
userList.addEventListener("click",event=>{const deleteButton=event.target.closest(".delete-btn");if(!deleteButton)return;userToDelete=Number(deleteButton.dataset.id);deleteModal.classList.remove("hidden");});
cancelBtn.addEventListener("click",closeDeleteModal);
confirmDeleteBtn.addEventListener("click",()=>{if(userToDelete===null)return;users=users.filter(user=>user.id!==userToDelete);refreshUsers();status.textContent="User deleted.";closeDeleteModal();});
renderUsers(users,userList);

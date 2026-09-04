const form = document.querySelector("#item-form");
const input = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");

let items = JSON.parse(localStorage.getItem("items")) || [];

function renderItems() {
  itemList.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    itemList.appendChild(li);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const itemName = input.value.trim();

  if (!itemName) return;

  const newItem = {
    id: Date.now(),
    name: itemName
  };

  items.push(newItem);

  localStorage.setItem("items", JSON.stringify(items));

  renderItems();

  input.value = "";
});

renderItems();

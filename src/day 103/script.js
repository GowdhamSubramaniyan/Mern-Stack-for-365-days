const items = [
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "HTML",
    "CSS"
];

const searchInput = document.getElementById("searchInput");
const itemList = document.getElementById("itemList");
const sortAscButton = document.getElementById("sortAsc");
const sortDescButton = document.getElementById("sortDesc");

let timer;

function displayItems(itemsToDisplay) {

    itemList.innerHTML = "";

    itemsToDisplay.forEach((item) => {

        const li = document.createElement("li");

        li.textContent = item;

        itemList.appendChild(li);

    });
}


function searchItems() {

    const searchText = searchInput.value.toLowerCase();

    const filteredItems = items.filter((item) => {

        return item.toLowerCase().includes(searchText);

    });

    displayItems(filteredItems);
}


searchInput.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {

        searchItems();

    }, 500);

});


sortAscButton.addEventListener("click", () => {

    items.sort();

    searchItems();

});


sortDescButton.addEventListener("click", () => {

    items.sort().reverse();

    searchItems();

});


displayItems(items);

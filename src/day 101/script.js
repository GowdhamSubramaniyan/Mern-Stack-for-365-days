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

let timer;


// Show items
function displayItems(itemsToDisplay) {

    itemList.innerHTML = "";

    itemsToDisplay.forEach((item) => {

        const li = document.createElement("li");

        li.textContent = item;

        itemList.appendChild(li);
    });
}


// Search items
function searchItems() {

    const searchText = searchInput.value.toLowerCase();

    const filteredItems = items.filter((item) => {
        return item.toLowerCase().includes(searchText);
    });

    displayItems(filteredItems);
}


// Debounce the search
searchInput.addEventListener("input", () => {

    clearTimeout(timer);

    timer = setTimeout(() => {
        searchItems();
    }, 500);

});


// Show all items initially
displayItems(items);

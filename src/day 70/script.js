// Product data

const products = [
    {
        name: "AVANMODA Heritage T-Shirt",
        price: 39,
        inStock: true
    },

    {
        name: "AVANMODA Premium Joggers",
        price: 59,
        inStock: true
    },

    {
        name: "AVANMODA Heavyweight Hoodie",
        price: 79,
        inStock: false
    }
];


// HTML elements

const button = document.getElementById("showProduct");

const output = document.getElementById("productOutput");


// Button click

button.addEventListener("click", function () {

    // Get the first product

    const firstProduct = products[0];


    // Check product conditions

    if (firstProduct.inStock && firstProduct.price > 0) {

        output.innerHTML = `
            <h2>${firstProduct.name}</h2>

            <p>Price: £${firstProduct.price}</p>

            <p>Available: Yes</p>
        `;

    } else {

        output.innerHTML = `
            <h2>Product unavailable</h2>

            <p>This product cannot currently be displayed.</p>
        `;
    }

});

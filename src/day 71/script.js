let product = "T-Shirt";

let price = 39;


const button = document.getElementById("button");

const productBox = document.getElementById("product");


function showProduct() {

    switch (product) {

        case "T-Shirt":

            productBox.innerHTML = `
                <h2>${product}</h2>
                <p>Price: £${price}</p>
            `;

            break;


        case "Hoodie":

            productBox.innerHTML = `
                <h2>Hoodie</h2>
                <p>Price: £70</p>
            `;

            break;


        default:

            productBox.innerHTML = `
                <p>Product not found.</p>
            `;
    }
}


button.addEventListener("click", showProduct);

const products = [
  { name: "Milk", price: 1.50 },
  { name: "Bread", price: 1.20 },
  { name: "Coffee", price: 4.50 },
  { name: "Apples", price: 2.00 }
];

const shoppingList = document.querySelector("#shopping-list");
const findResult = document.querySelector("#find-result");
const someResult = document.querySelector("#some-result");
const everyResult = document.querySelector("#every-result");

// ------------------------------------
// 1. MAP()
// Render every product into the list
// ------------------------------------

shoppingList.innerHTML = products
  .map(product => {
    return `
      <li>
        ${product.name} - £${product.price.toFixed(2)}
      </li>
    `;
  })
  .join("");


// ------------------------------------
// 2. FIND()
// Find the first product that costs
// more than £2
// ------------------------------------

const expensiveProduct = products.find(product => product.price > 2);

findResult.textContent = `find(): ${expensiveProduct.name} costs more than £2.`;


// ------------------------------------
// 3. SOME()
// Check if at least one product
// costs more than £4
// ------------------------------------

const hasExpensiveProduct = products.some(product => product.price > 4);

someResult.textContent = `some(): Is there a product over £4? ${hasExpensiveProduct ? "Yes" : "No"}.`;


// ------------------------------------
// 4. EVERY()
// Check if every product costs
// less than £10
// ------------------------------------

const allProductsUnderTen = products.every(product => product.price < 10);

everyResult.textContent = `every(): Are all products under £10? ${allProductsUnderTen ? "Yes" : "No"}.`;

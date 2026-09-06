# 📚 Day 98 — JavaScript Destructuring

**Date:** Sunday, September 6, 2026
**Topic:** Destructuring — Arrays & Objects
**Build:** Edit an Item
**Month 4:** JavaScript Deeper — Async, Fetch & Storage
**Commit:** 98 of 365

---

## 1. What is Destructuring?

**Destructuring** is a JavaScript feature that allows us to extract values from **arrays** or **objects** and store them in variables easily.

Instead of writing:

```js
const name = user.name;
const age = user.age;
```

we can write:

```js
const { name, age } = user;
```

It makes code shorter and easier to read.

---

# 2. Array Destructuring

Array destructuring extracts values based on their **position**.

```js
const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango
```

### Important

Arrays use **position/order**.

```text
Index 0 → first
Index 1 → second
Index 2 → third
```

---

## 3. Skip Array Values

We can skip values using an empty space.

```js
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

The second value is ignored.

---

# 4. Default Values

We can provide a default value if an array doesn't contain a value.

```js
const numbers = [10];

const [first, second = 20] = numbers;

console.log(first);  // 10
console.log(second); // 20
```

Because there is no second value, JavaScript uses `20`.

---

# 5. Swapping Variables

Destructuring makes swapping values easy.

```js
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10
```

Without destructuring, we normally need a temporary variable.

---

# 6. Object Destructuring

Object destructuring extracts values using their **property names**.

```js
const user = {
  name: "Gowdham",
  age: 25,
  city: "Nottingham"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

### Important

Objects use **property names**, not position.

```js
const { name } = user;
```

means:

> Find the `name` property inside `user`.

---

# 7. Rename Variables

We can give a destructured property a different variable name.

```js
const user = {
  name: "Gowdham",
  age: 25
};

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

Syntax:

```js
const { propertyName: newVariableName } = object;
```

---

# 8. Default Values in Objects

If a property doesn't exist, we can provide a default.

```js
const user = {
  name: "Gowdham"
};

const { name, age = 25 } = user;

console.log(name); // Gowdham
console.log(age);  // 25
```

---

# 9. Destructuring Function Parameters

We can destructure an object directly inside a function parameter.

Without destructuring:

```js
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}
```

With destructuring:

```js
function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}
```

Call it normally:

```js
displayUser(user);
```

This is very common in modern JavaScript.

---

# 10. Destructuring in forEach()

Suppose we have:

```js
const items = [
  {
    id: 1,
    name: "Apple",
    quantity: 5
  },
  {
    id: 2,
    name: "Banana",
    quantity: 10
  }
];
```

Normal approach:

```js
items.forEach((item) => {
  console.log(item.name);
  console.log(item.quantity);
});
```

Using destructuring:

```js
items.forEach(({ name, quantity }) => {
  console.log(name);
  console.log(quantity);
});
```

This is cleaner.

---

# 11. Destructuring and the Edit Item Feature

This is the most important connection to today's project.

Suppose we have:

```js
const item = {
  id: 1,
  name: "Apple",
  quantity: 5
};
```

We can extract the values:

```js
const { id, name, quantity } = item;
```

Now we have:

```text
id       → 1
name     → "Apple"
quantity → 5
```

We can use those values in our edit form:

```js
nameInput.value = name;
quantityInput.value = quantity;
```

So when the user clicks **Edit**, the existing item appears in the form.

---

# 12. Finding an Item Before Editing

We can find an item using its ID:

```js
const item = items.find(item => item.id === id);
```

Then destructure it:

```js
const { name, quantity } = item;
```

Then put those values into the form:

```js
nameInput.value = name;
quantityInput.value = quantity;
```

The basic process is:

```text
Click Edit
    ↓
Get item ID
    ↓
Find item
    ↓
Destructure item
    ↓
Put values into form
    ↓
User changes values
    ↓
Update item
    ↓
Save to localStorage
    ↓
Render again
```

---

# 13. Destructuring with localStorage

When working with `localStorage`, remember:

```js
localStorage
```

stores data as **strings**.

So we usually use:

```js
JSON.stringify()
```

when saving:

```js
localStorage.setItem("items", JSON.stringify(items));
```

And:

```js
JSON.parse()
```

when reading:

```js
const items = JSON.parse(
  localStorage.getItem("items")
) || [];
```

Then we can destructure the objects inside the array:

```js
items.forEach(({ id, name, quantity }) => {
  console.log(id, name, quantity);
});
```

---

# 🧠 Key Difference

## Array

Array destructuring depends on **position**:

```js
const [first, second] = ["Apple", "Banana"];
```

```text
first  → Apple
second → Banana
```

## Object

Object destructuring depends on **property name**:

```js
const { name, age } = user;
```

```text
name → user.name
age  → user.age
```

Remember:

> **Array → position**
> **Object → property name**

---


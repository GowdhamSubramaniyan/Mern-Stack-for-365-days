# Day 88 — Reading Form Values

**Date:** Thursday, August 27, 2026
**Month:** 3 — JavaScript Fundamentals
**Commit:** 88 of 365

## 📚 What I Learned

Today I learned how JavaScript can read values entered by a user into an HTML form.

HTML forms allow users to enter information such as:

* Names
* Email addresses
* Passwords
* Messages
* Numbers
* Selections

JavaScript can access this information using the element's `.value` property.

---

## 1. Getting an Input Element

First, select the input using `querySelector()`.

```js
const nameInput = document.querySelector("#name");
```

If the HTML is:

```html
<input id="name" type="text">
```

JavaScript now has a reference to that input element.

---

## 2. Reading the Value

The `.value` property gives us whatever the user has entered.

```js
const nameInput = document.querySelector("#name");

console.log(nameInput.value);
```

If the user enters:

```text
Gowdham
```

The result will be:

```text
Gowdham
```

The important idea is:

```text
HTML input
     ↓
.user enters data
     ↓
.value
     ↓
JavaScript reads the data
```

---

## 3. Reading a Form on Submit

Instead of reading the value immediately, we can read it when the user submits the form.

```html
<form id="myForm">
  <input id="name" type="text">
  <button type="submit">Submit</button>
</form>
```

JavaScript:

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  console.log(name);
});
```

---

## 4. Why `preventDefault()`?

Normally, submitting a form can cause the browser to perform its default form-submission behavior, often including a page reload.

```js
event.preventDefault();
```

stops that default behavior.

This allows JavaScript to handle the form itself.

---

## 5. Reading Multiple Values

We can read multiple form fields.

```html
<form id="myForm">
  <input id="name" type="text">
  <input id="email" type="email">

  <button type="submit">Submit</button>
</form>
```

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;

  console.log(name);
  console.log(email);
});
```

Now JavaScript can access both values.

---

## 6. Storing the Values

The values can be stored in variables.

```js
const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
```

We can then use those variables for other operations.

For example:

```js
console.log(`Hello, ${name}`);
console.log(`Your email is ${email}`);
```

---

## 7. Checking for Empty Input

Form values can also be checked before processing them.

```js
const name = document.querySelector("#name").value;

if (name === "") {
  console.log("Please enter your name");
} else {
  console.log(`Hello, ${name}`);
}
```

This is a basic example of form validation.

---

## 8. Reading a Number

An input's `.value` is returned as a string.

For example:

```html
<input id="age" type="number">
```

```js
const age = document.querySelector("#age").value;
```

Even though the input type is `number`, JavaScript receives the value as a string.

If I need an actual number, I can convert it:

```js
const age = Number(document.querySelector("#age").value);
```

Now `age` is a number.

---

## 9. The Basic Form Pattern

A useful pattern to remember is:

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = document.querySelector("#input").value;

  // Use the value here
});
```

This pattern can be reused for many small JavaScript projects.

---

## 🧠 Key Concepts

### `querySelector()`

Finds an HTML element.

```js
document.querySelector("#name");
```

### `.value`

Reads the current value of a form control.

```js
input.value;
```

### `addEventListener()`

Waits for an event.

```js
form.addEventListener("submit", callback);
```

### `preventDefault()`

Stops the browser's default form behavior.

```js
event.preventDefault();
```

---

## 🔄 Mental Model

The process is:

```text
User enters information
        ↓
User submits the form
        ↓
JavaScript catches "submit"
        ↓
preventDefault()
        ↓
JavaScript reads .value
        ↓
JavaScript processes the data
```

---

## 🛠 Mini Practice

I can build a simple form that asks for a user's name and displays a greeting.

```html
<form id="myForm">
  <input id="name" type="text" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form>

<p id="message"></p>
```

```js
const form = document.querySelector("#myForm");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  message.textContent = `Hello, ${name}!`;
});
```

This combines today's main concepts:

* Selecting elements
* Listening for form submission
* Preventing default behavior
* Reading `.value`
* Changing page content

---

## ✅ What I Should Remember

1. Form controls contain user-entered data.
2. `.value` reads that data.
3. `submit` lets JavaScript respond when the form is submitted.
4. `preventDefault()` stops the browser's default submission behavior.
5. Form values are commonly returned as strings.
6. `Number()` can convert a numeric string into a number.
7. Basic validation can check whether a value is empty before using it.

## Day 88 Summary

Today I learned how to connect HTML forms with JavaScript.

The most important line is:

```js
const value = input.value;
```

It allows JavaScript to take information entered by the user and use it inside the program.

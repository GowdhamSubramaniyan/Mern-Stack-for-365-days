# Day 93 — Render a Hard-Coded List

**Date:** Tuesday, September 1, 2026  
**Month 4:** JavaScript Deeper — Async, Fetch & Storage  
**Commit:** 93 / 365

## 1. What is `filter()`?

`filter()` is a built-in JavaScript array method used to select specific items from an array based on a condition.

It checks every item in the array. If the condition returns `true`, the item is included in a **new array**. If the condition returns `false`, the item is not included.

Example:

```js
const numbers = [10, 15, 20, 25, 30];

const result = numbers.filter(number => number > 20);

console.log(result);
// [25, 30]
```

The basic idea is:

```text
true  → keep the item
false → don't keep the item
```

So `filter()` means:

> "Give me only the items that match my condition."

## 2. `filter()` does not change the original array

`filter()` creates a new array instead of changing the original array.

```js
const numbers = [10, 20, 30];

const result = numbers.filter(number => number > 15);

console.log(numbers);
// [10, 20, 30]

console.log(result);
// [20, 30]
```

The original array remains unchanged.

## 3. Filtering objects

Arrays can contain objects, and `filter()` can check properties inside those objects.

```js
const users = [
  { name: "John", age: 17 },
  { name: "Sarah", age: 25 },
  { name: "Mike", age: 15 },
  { name: "Emma", age: 30 }
];

const adults = users.filter(user => user.age >= 18);
```

The result contains Sarah and Emma because their ages are 18 or higher.

The important part is:

```js
user.age >= 18
```

JavaScript checks this condition for every user.

## 4. What is a hard-coded list?

A hard-coded list is data that is manually written directly inside the JavaScript code.

Example:

```js
const tasks = [
  "Learn JavaScript",
  "Practice filter()",
  "Build a project"
];
```

The data is not coming from an API, database, server, or storage. We are writing it ourselves.

This is useful for learning because it allows us to focus on how JavaScript processes and displays data.

## 5. What does rendering mean?

Rendering means taking data from JavaScript and displaying it on the webpage.

For example:

```js
const fruits = ["Apple", "Banana", "Orange"];
```

We can turn this data into HTML:

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>
```

The process is:

```text
JavaScript data
      ↓
Process the data
      ↓
Create HTML
      ↓
Add HTML to the DOM
      ↓
Display on webpage
```

## 6. What is the DOM?

DOM stands for **Document Object Model**.

The DOM is the browser's representation of the HTML document. JavaScript uses the DOM to find, create, change, and remove HTML elements.

For example:

```js
const heading = document.querySelector("h1");
```

This finds an `<h1>` element in the webpage.

JavaScript can then change it:

```js
heading.textContent = "Hello JavaScript";
```

## 7. Creating HTML with JavaScript

JavaScript can create HTML elements using `createElement()`.

```js
const li = document.createElement("li");
```

This creates a new `<li>` element.

We can add text:

```js
li.textContent = "Learn JavaScript";
```

Now the element represents:

```html
<li>Learn JavaScript</li>
```

## 8. Adding the element to the webpage

Creating an element does not automatically display it.

We need to add it to an existing element using `appendChild()`.

HTML:

```html
<ul id="task-list"></ul>
```

JavaScript:

```js
const taskList = document.querySelector("#task-list");

taskList.appendChild(li);
```

Now the `<li>` appears inside the `<ul>`.

## 9. What is `forEach()`?

`forEach()` is an array method that runs a function once for every item in an array.

Example:

```js
const names = ["John", "Sarah", "Mike"];

names.forEach(name => {
  console.log(name);
});
```

It runs the code for:

```text
John
Sarah
Mike
```

`forEach()` is useful for rendering because we often need to create one HTML element for every item.

## 10. Difference between `filter()` and `forEach()`

These methods have different jobs.

`filter()` is used to **select items**.

```js
const completedTasks = tasks.filter(task => task.completed);
```

Think:

> "Which items do I want?"

`forEach()` is used to **do something with each item**.

```js
completedTasks.forEach(task => {
  // display the task
});
```

Think:

> "What should I do with each item?"

## 11. Complete Day 93 concept

Suppose we have:

```js
const tasks = [
  { name: "Learn JavaScript", completed: true },
  { name: "Practice filter()", completed: false },
  { name: "Build project", completed: true }
];
```

We want to display only completed tasks.

The process is:

```text
All tasks
    ↓
filter()
    ↓
Completed tasks
    ↓
forEach()
    ↓
Create HTML elements
    ↓
Add elements to DOM
    ↓
Display on webpage
```

## 12. Complete example

HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Day 93</title>
</head>
<body>

  <h1>My Tasks</h1>

  <ul id="task-list"></ul>

  <script src="script.js"></script>
</body>
</html>
```

JavaScript:

```js
const tasks = [
  { name: "Learn filter()", completed: true },
  { name: "Practice filter()", completed: false },
  { name: "Render a list", completed: true },
  { name: "Make a commit", completed: false }
];

const taskList = document.querySelector("#task-list");

const completedTasks = tasks.filter(task => task.completed);

completedTasks.forEach(task => {
  const li = document.createElement("li");

  li.textContent = task.name;

  taskList.appendChild(li);
});
```

The webpage will display:

```text
My Tasks

Learn filter()
Render a list
```

## 13. Why today's lesson matters

Today the data is hard-coded:

```js
const tasks = [...]
```

Later, JavaScript will receive data from an API using `fetch()`.

The process will become:

```text
API
 ↓
fetch()
 ↓
JavaScript data
 ↓
filter()
 ↓
forEach()
 ↓
DOM
 ↓
Webpage
```

So today's lesson teaches an important foundation:

> **Take data → process data → render data.**

## 14. Key things to remember

**`filter()`**  
Selects items that meet a condition and returns a new array.

**`forEach()`**  
Runs a function once for every item in an array.

**Hard-coded data**  
Data manually written inside JavaScript.

**Rendering**  
Taking JavaScript data and displaying it on the webpage.

**DOM**  
The browser's representation of the HTML document that JavaScript can interact with.

**`createElement()`**  
Creates a new HTML element using JavaScript.

**`appendChild()`**  
Adds an element to another element in the DOM.

## ⭐ Main idea

```text
DATA
 ↓
filter()
 ↓
SELECTED DATA
 ↓
forEach()
 ↓
CREATE HTML
 ↓
DOM
 ↓
WEBPAGE
```

The main lesson from Day 93 is understanding how JavaScript can **select data using `filter()` and then render that data onto a webpage using the DOM**.



**Date:** Saturday, August 29, 2026
**Month:** 3 — JavaScript Fundamentals
**Commit:** 90 of 365
**Project:** Project 3 — Interactive App Hosted



## 🎯 Today's Goal

Today is a milestone day.

You will:

1. Review the core JavaScript fundamentals learned during Month 3.
2. Check that your interactive app works correctly.
3. Make the final small fixes/polish.
4. Host the app so it is publicly accessible.
5. Tag the project as **v1.0**.
6. Commit and push everything to GitHub.

The main idea:

> **Learn → Build → Test → Ship**



# 📚 Part 1 — JavaScript Fundamentals Review

## 1. Variables

JavaScript uses `let` and `const` to store values.

```javascript
let score = 0;
const username = "Gowdham";
```

### `let`

Use when the value can change.

```javascript
let count = 0;

count = count + 1;
```

### `const`

Use when the variable should not be reassigned.

```javascript
const appName = "My App";
```

---

## 2. Data Types

Important JavaScript data types include:

```javascript
const name = "Alex";       // String
const age = 20;            // Number
const isOnline = true;     // Boolean
const user = null;         // Null
let value;                 // Undefined
```

Arrays:

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

Objects:

```javascript
const user = {
    name: "Alex",
    age: 20
};
```

---

# 3. Operators

### Arithmetic

```javascript
+
-
*
/
%
```

Example:

```javascript
let total = 10 + 5;
```

### Comparison

```javascript
===
!==
>
<
>=
<=
```

Prefer strict comparison:

```javascript
if (score === 10) {
    console.log("Perfect!");
}
```

### Logical operators

```javascript
&&
||
!
```

Example:

```javascript
if (isLoggedIn && isAdmin) {
    console.log("Access granted");
}
```

---

# 4. Conditions

Conditions allow your application to make decisions.

```javascript
if (score >= 10) {
    console.log("You won!");
} else {
    console.log("Try again.");
}
```

You can also use `else if`:

```javascript
if (score >= 90) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else {
    grade = "C";
}
```

This is fundamental to interactive applications because user actions often require different responses.

---

# 5. Functions

Functions package reusable logic.

```javascript
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Alex"));
```

Arrow functions:

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

Short version:

```javascript
const double = number => number * 2;
```

A good function should generally have **one clear responsibility**.

---

# 6. Arrays

Arrays store collections of values.

```javascript
const users = ["Alex", "John", "Sam"];
```

Useful methods:

### `push()`

Adds an item.

```javascript
users.push("Mike");
```

### `pop()`

Removes the last item.

```javascript
users.pop();
```

### `map()`

Creates a new array by transforming every item.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);
```

Result:

```text
[2, 4, 6]
```

### `filter()`

Creates a new array containing items that satisfy a condition.

```javascript
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter(number => number % 2 === 0);
```

Result:

```text
[2, 4]
```

---

# 7. Objects

Objects represent structured data.

```javascript
const user = {
    name: "Alex",
    age: 21,
    active: true
};
```

Access properties:

```javascript
console.log(user.name);
console.log(user.age);
```

Change properties:

```javascript
user.age = 22;
```

Objects are especially useful when your application needs to represent things such as:

* users
* products
* tasks
* settings
* scores
* application state

---

# 8. DOM Manipulation

The **DOM (Document Object Model)** allows JavaScript to interact with HTML.

Select an element:

```javascript
const button = document.querySelector("#myButton");
```

Change text:

```javascript
button.textContent = "Clicked!";
```

Change HTML:

```javascript
element.innerHTML = "<strong>Hello</strong>";
```

Change a class:

```javascript
element.classList.add("active");
```

Remove a class:

```javascript
element.classList.remove("active");
```

Toggle a class:

```javascript
element.classList.toggle("active");
```

This is what makes a normal webpage become an **interactive application**.

---

# 9. Events

Events allow your JavaScript to react to user actions.

Example:

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

Common events:

```text
click
input
change
submit
keydown
mouseover
```

Example:

```javascript
input.addEventListener("input", () => {
    console.log(input.value);
});
```

The basic interaction model is:

```text
User action
     ↓
Event
     ↓
JavaScript function
     ↓
Application state changes
     ↓
UI updates
```

---

# 10. Application State

State means the information your application currently remembers.

Example:

```javascript
let count = 0;
```

When the user clicks:

```javascript
count++;
```

Then update the UI:

```javascript
counter.textContent = count;
```

Think of it as:

```text
STATE → LOGIC → UI
```

A large part of building interactive applications is managing this flow correctly.

---

# 11. Local Storage

If your project uses persistence, JavaScript can store data in the browser.

Save:

```javascript
localStorage.setItem("username", "Alex");
```

Read:

```javascript
const username = localStorage.getItem("username");
```

Remove:

```javascript
localStorage.removeItem("username");
```

For objects or arrays:

```javascript
localStorage.setItem(
    "users",
    JSON.stringify(users)
);
```

Read them back:

```javascript
const users = JSON.parse(
    localStorage.getItem("users")
);
```

Remember:

> `localStorage` stores strings, so objects/arrays usually need `JSON.stringify()` and `JSON.parse()`.

---

# 🧠 Part 2 — The Most Important Review

Before shipping your app, make sure you understand these concepts:

| Concept                    | Can you explain it? |
| -------------------------- | ------------------- |
| `let` vs `const`           | ☐                   |
| Strings, numbers, booleans | ☐                   |
| Arrays                     | ☐                   |
| Objects                    | ☐                   |
| `if / else`                | ☐                   |
| Functions                  | ☐                   |
| Arrow functions            | ☐                   |
| `map()`                    | ☐                   |
| `filter()`                 | ☐                   |
| DOM selection              | ☐                   |
| DOM manipulation           | ☐                   |
| Event listeners            | ☐                   |
| Application state          | ☐                   |
| `localStorage`             | ☐                   |
| Debugging with console     | ☐                   |

You don't need to memorize every method.

You should understand **what problem each concept solves**.

---

# 🛠 Part 3 — Prepare Project 3 for v1.0

Before calling your application v1.0, test the complete user flow.

### Test:

```text
Open app
   ↓
Use the main feature
   ↓
Interact with buttons/forms
   ↓
Check UI updates
   ↓
Refresh page
   ↓
Check persistence (if implemented)
   ↓
Test invalid/empty input
   ↓
Check browser console
```

---

## 🔍 Check the Console

Open browser DevTools:

```text
F12
```

or:

```text
Right click → Inspect → Console
```

Look for:

* JavaScript errors
* undefined variables
* failed event handlers
* failed resource requests
* unexpected warnings

Your goal for v1.0:

> **No known critical errors.**

---

# ✨ Part 4 — Final Polish

Don't rebuild the entire project today.

Focus on small improvements:

### UI

* Buttons work correctly.
* Text is readable.
* Spacing is consistent.
* No obvious broken elements.
* App works on different screen sizes.

### JavaScript

* Remove unnecessary `console.log()` statements.
* Fix obvious duplicated code.
* Use meaningful variable names.
* Remove unused variables/functions.
* Make sure event listeners work.

### User experience

Ask yourself:

> "If someone opens this app for the first time, can they understand what to do?"

If the answer is yes, you're ready to ship.

---

# 🚀 Part 5 — Deploy the Application

Your app should be hosted publicly.

After deployment, test the **actual live URL**, not just the local version.

Example:

```text
Local:
http://localhost:...

        ↓

Hosted:
https://your-app...
```

Test the hosted version again.

Important:

> A project is not truly "LIVE" just because it works on your computer.

The deployed version must work independently.

---

# 🏷️ Part 6 — Tag v1.0

Once the project is working:

```bash
git status
```

Review your changes.

Then:

```bash
git add .
```

Commit:

```bash
git commit -m "Release v1.0"
```

Push:

```bash
git push
```

Create the version tag:

```bash
git tag v1.0
```

Push the tag:

```bash
git push origin v1.0
```

Now your repository has a clear milestone:

```text
v1.0
│
└── Interactive App — LIVE
```

---

# 🧩 What You Should Understand After Day 90

By the end of Month 3, you should understand the basic architecture of a small JavaScript application:

```text
HTML
 ↓
Structure

CSS
 ↓
Presentation

JavaScript
 ↓
Logic
 ↓
State
 ↓
Events
 ↓
DOM Updates
 ↓
User Interaction
```

You have moved from:

```text
"Writing JavaScript code"
```

to:

```text
"Building a working web application"
```

That distinction is important.

---

# 📝 Day 90 Summary

### Learn

Review:

* Variables
* Data types
* Conditions
* Functions
* Arrays
* Objects
* DOM
* Events
* State
* localStorage
* Debugging


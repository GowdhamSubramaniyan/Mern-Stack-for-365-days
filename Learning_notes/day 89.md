



## 📚 What I Learned

Today I learned about **debugging with the browser console**.

Debugging means finding and fixing problems in a program.

When JavaScript doesn't behave as expected, the browser's Developer Tools and Console help me understand what is happening.

---

## 1. What is Debugging?

Debugging is the process of:

1. Finding a problem
2. Understanding why it happened
3. Fixing it
4. Testing the fix

For example:

```js
const name = "Gowdham";

console.log(nam);
```

This produces an error because `nam` doesn't exist.

The correct code is:

```js
console.log(name);
```

---

## 2. Opening the Browser Console

The browser provides Developer Tools that allow me to inspect and debug my JavaScript.

I can usually open Developer Tools with:

```text
F12
```

or:

```text
Ctrl + Shift + I
```

Then I can open the **Console** tab.

The Console displays:

* JavaScript errors
* Warnings
* Logged values
* Other messages from the webpage

---

## 3. `console.log()`

`console.log()` is one of the most commonly used debugging tools.

```js
const username = "Gowdham";

console.log(username);
```

The Console displays:

```text
Gowdham
```

I can use it to check whether my code is running and what values my variables contain.

For example:

```js
const age = 23;

console.log(age);
console.log(typeof age);
```

This helps me inspect the program while it is running.

---

## 4. Logging Multiple Values

I can log multiple pieces of information.

```js
const name = "Gowdham";
const age = 23;

console.log(name, age);
```

I can also add a description:

```js
console.log("User name:", name);
console.log("User age:", age);
```

This makes the Console easier to understand.

---

## 5. `console.error()`

`console.error()` displays an error message.

```js
console.error("Something went wrong");
```

It is useful when I want to clearly identify a problem.

---

## 6. `console.warn()`

`console.warn()` displays a warning.

```js
console.warn("This value may be incorrect");
```

Warnings are useful when something isn't necessarily broken but should be checked.

---

## 7. Reading JavaScript Errors

JavaScript errors usually provide useful information.

For example:

```js
console.log(username);
```

If `username` was never declared, the Console may show:

```text
ReferenceError: username is not defined
```

The important information is:

**Error type:**

```text
ReferenceError
```

**Message:**

```text
username is not defined
```

This tells me that JavaScript cannot find the variable `username`.

---

## 8. Common JavaScript Errors

### ReferenceError

Happens when JavaScript cannot find a variable or reference.

```js
console.log(username);
```

when `username` hasn't been declared.

---

### TypeError

Happens when an operation is performed on an inappropriate value.

For example:

```js
const user = null;

console.log(user.name);
```

JavaScript cannot read `name` from `null`.

---

### SyntaxError

Happens when JavaScript code doesn't follow the language syntax.

For example:

```js
const name = ;
```

The code is incomplete and therefore invalid JavaScript.

---

## 9. Debugging Values

One of the most useful debugging techniques is checking the value of a variable.

```js
const name = "Gowdham";

console.log("name:", name);
```

If I expected the value to be `"Gowdham"` but the Console shows something different, I know where to investigate.

I can also check the type:

```js
console.log(typeof name);
```

This is particularly useful because JavaScript is dynamically typed.

---

## 10. Debugging Form Values

This connects with what I learned on Day 88.

For example:

```js
const form = document.querySelector("#myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;

  console.log("Submitted name:", name);
});
```

If the form isn't behaving correctly, I can use the Console to check whether JavaScript is actually receiving the value.

---

## 11. Debugging Events

I can also use `console.log()` to check whether an event is firing.

```js
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

If I click the button and don't see the message, I know the problem is somewhere around the event setup or element selection.

This is a simple but powerful debugging technique.

---

## 12. Debugging Step by Step

When something doesn't work, I shouldn't immediately rewrite everything.

Instead:

```text
Something doesn't work
        ↓
Open the Console
        ↓
Look for errors
        ↓
Read the error message
        ↓
Check the file and line number
        ↓
Inspect relevant variables
        ↓
Find the cause
        ↓
Fix the problem
        ↓
Test again
```

This makes debugging systematic instead of guessing.

---

## 13. Don't Leave Unnecessary Logs

`console.log()` is useful during development, but not every debugging statement needs to remain in the final project.

For example:

```js
console.log("test");
console.log("hello");
console.log("is this working?");
```

These temporary messages should usually be removed when the project is polished.

Useful application logging should remain only when it has a real purpose.

---

## 14. My Debugging Practice

Today I practiced creating and fixing simple JavaScript errors.

For example:

```js
const name = "Gowdham";

console.log(nam);
```

I used the Console to identify the `ReferenceError`.

I then corrected the variable name:

```js
console.log(name);
```

I also practiced using:

```js
console.log()
console.warn()
console.error()
```

to inspect what my JavaScript was doing.

---

## 🧠 Key Lessons

* Debugging means finding and fixing problems in code.
* The browser Console is an important JavaScript debugging tool.
* `console.log()` helps inspect values and program flow.
* `console.warn()` displays warnings.
* `console.error()` displays errors.
* Error messages usually tell me what went wrong and where.
* `ReferenceError`, `TypeError`, and `SyntaxError` are common JavaScript errors.
* Checking variables with `console.log()` can reveal unexpected values.
* I should debug systematically instead of guessing.
* Temporary debugging logs should be removed when they are no longer useful.

---

## 🔑 Most Important Concept

The Console isn't just a place where errors appear.

It is a tool that lets me **see what my JavaScript is actually doing**.

Instead of thinking:

> "Why isn't my code working?"

I can ask:

> "What is the code doing right now, and what does the Console tell me?"

That change in mindset makes debugging much easier.

---

## Day 89 Summary

Today I learned how to use the browser Console to debug JavaScript.

I learned how to inspect values, identify common errors, trace problems to specific lines, and fix issues systematically.

I also practiced debugging my existing project before giving it a final polish and committing it as **Commit 89 of 365**.

# Day 120 — Project 4: Notes App Hosted

**Date:** Monday, September 28, 2026  
**Commit:** 120 of 365  
**Progress:** 32.88%  
**Month 4:** JavaScript Deeper — Async, Fetch & Storage

## Today's Task

### 📚 Learn — Review: Deeper JavaScript

Today is a review and shipping day rather than a brand-new concept day.

The goal is to review the JavaScript concepts learned throughout Month 4 and use them together in a finished Notes App.

### Concepts reviewed

- Async JavaScript
- Promises
- `async` / `await`
- Fetch API
- JSON
- `localStorage`
- DOM manipulation
- Loading, error and empty states
- ES modules
- Event delegation
- Small reusable functions
- Toast notifications
- Dark mode
- Accessibility
- npm and `package.json`
- Vite
- Production builds
- Deployment

---

# 🧠 Month 4 Review

## 1. localStorage

`localStorage` allows the browser to remember data.

Save data:

```js
localStorage.setItem("notes", JSON.stringify(notes));
```

Read data:

```js
const notes = JSON.parse(
    localStorage.getItem("notes")
) || [];
```

The flow is:

```text
JavaScript data
      ↓
JSON.stringify()
      ↓
JSON string
      ↓
localStorage
```

When reading:

```text
localStorage
      ↓
JSON string
      ↓
JSON.parse()
      ↓
JavaScript data
```

---

## 2. ES Modules

Instead of putting the entire application into one JavaScript file, code can be separated into modules.

```js
import { saveData, loadData } from "./storage.js";
```

A module can export functions:

```js
export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
```

Example structure:

```text
notes-app/
├── index.html
├── style.css
├── package.json
├── README.md
│
└── js/
    ├── main.js
    ├── storage.js
    ├── render.js
    └── toast.js
```

Responsibilities:

```text
main.js       → controls the application
storage.js    → saves and loads data
render.js     → displays notes
toast.js      → shows notifications
```

---

## 3. Async JavaScript

Some operations take time.

```js
const response = await fetch(url);
```

`await` allows JavaScript to wait for the result of a Promise before continuing that async function.

Example:

```js
async function loadData() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}
```

---

## 4. Fetch API

`fetch()` is used to request data from a server or API.

```js
const response = await fetch(url);
const data = await response.json();
```

The basic flow:

```text
fetch()
   ↓
Response
   ↓
response.json()
   ↓
JavaScript data
```

---

## 5. Loading, Error and Empty States

A real application can have different states.

**Loading**

```text
Loading...
```

**Success**

```text
Notes loaded!
```

**Error**

```text
Something went wrong.
```

**Empty**

```text
No notes found.
```

These states tell the user what is happening.

---

## 6. Event Delegation

Instead of adding an event listener to every individual button, one parent element can handle events from its children.

```js
noteList.addEventListener("click", (event) => {
    if (event.target.closest(".delete-button")) {
        // Delete note
    }
});
```

The parent listens for the event and checks what was clicked.

---

## 7. Toast Notifications

A toast is a small temporary message shown to the user.

Examples:

```text
✓ Note saved
✓ Note deleted
```

It gives the user immediate feedback without interrupting the application.

---

## 8. Dark Mode

Dark mode can be controlled by adding or removing a CSS class.

```js
document.body.classList.add("dark");
```

Remove it:

```js
document.body.classList.remove("dark");
```

The selected theme can be saved in `localStorage` so it survives a refresh.

---

## 9. Accessibility

The application should be usable by as many people as possible.

Example:

```html
<button
    aria-label="Toggle dark mode"
    aria-pressed="false">
    🌙
</button>
```

Status messages can use:

```html
<p
    id="status"
    role="status"
    aria-live="polite">
</p>
```

Keyboard focus should also remain visible.

---

# 🚀 Build: Notes App v1.0

Today the goal is to make the Notes App feel like a finished small application.

## Features to check

```text
[ ] Create a note
[ ] Display notes
[ ] Delete a note
[ ] Save notes to localStorage
[ ] Load notes when the app starts
[ ] Search/filter notes
[ ] Loading state
[ ] Error state
[ ] Empty state
[ ] Toast notifications
[ ] Dark mode
[ ] Dark mode persists after refresh
[ ] Accessible controls
[ ] No console errors
[ ] Production build works
[ ] Application is hosted
```

---

# 📁 Final Project Structure

```text
notes-app/
│
├── index.html
├── style.css
├── package.json
├── README.md
│
└── js/
    ├── main.js
    ├── storage.js
    ├── render.js
    └── toast.js
```

---

# 🏗️ Production Build

Before deployment:

```bash
npm run build
```

If the build succeeds, test the application and make sure there are no console errors.

---

# 🌍 Deploy

The important difference is:

```text
Development
    ↓
localhost
    ↓
You are testing the application

Production
    ↓
Hosted URL
    ↓
Other people can access the application
```

---

# 🏷️ Tag Version 1.0

Once the Notes App is working and hosted:

```bash
git add .
git commit -m "release: notes app v1.0"
git tag v1.0.0
git push
git push origin v1.0.0
```

The tag `v1.0.0` marks the first completed version of the application.

---

# 🧠 What I Learned in Month 4

During Month 4, I moved from basic JavaScript into deeper JavaScript concepts.

I learned how JavaScript handles asynchronous work using Promises and `async` / `await`.

I learned how to use the Fetch API to communicate with APIs and work with JSON data.

I learned how to store application data using `localStorage`.

I learned how to split a JavaScript application into separate ES modules.

I learned how to create loading, error and empty states.

I learned event delegation, confirmation modals and toast notifications.

I learned how to implement persistent dark mode.

I learned basic accessibility practices.

I learned about npm, `package.json`, Vite, production builds and deployment.

Most importantly, I learned how these individual concepts can work together to create a real application.

---

# 🎯 Today's Main Lesson

The biggest lesson from Day 120 is not a new JavaScript syntax feature.

It is learning how to **finish and ship something**.

The journey looked like:

```text
JavaScript
    ↓
Async JavaScript
    ↓
Promises
    ↓
Fetch
    ↓
JSON
    ↓
localStorage
    ↓
ES Modules
    ↓
UI states
    ↓
Accessibility
    ↓
npm / Vite
    ↓
Production build
    ↓
Deployment
    ↓
🚀 LIVE NOTES APP
```

A project becomes much more valuable when it is finished, tested and available for people to use.

---

# ✅ Day 120 Checklist

```text
[ ] Review Month 4 concepts
[ ] Test the Notes App
[ ] Fix remaining bugs
[ ] Run production build
[ ] Deploy the application
[ ] Update README
[ ] Commit final version
[ ] Create v1.0.0 tag
[ ] Push to GitHub
```

---

# Git Commit

```bash
git add .
git commit -m "release: notes app v1.0"
git tag v1.0.0
git push
git push origin v1.0.0
```

---

## Progress

**Day 120 / 365**

**32.88% complete**

**Month 4 is complete.**

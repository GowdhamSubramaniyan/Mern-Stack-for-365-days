# Day 119 — Final Polish + Commit

**Commit 119 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** Clean code & small functions  
**Build & Commit (~30 min):** Final polish + commit

## Project Structure

```text
day-119-final-polish/
├── index.html
├── style.css
├── package.json
└── js/
    ├── main.js
    ├── theme.js
    └── storage.js
```

## 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 119 - Final Polish</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>My JavaScript App</h1>
        <p>Day 119 — Final polish and clean code.</p>

        <button
            id="themeBtn"
            type="button"
            aria-label="Toggle dark mode"
            aria-pressed="false"
        >
            🌙 Dark Mode
        </button>

        <p id="status" role="status" aria-live="polite">
            Light mode is active.
        </p>
    </main>

    <script type="module" src="js/main.js"></script>
</body>
</html>
```

## 2. style.css

```css
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: white;
    color: #222;
    line-height: 1.6;
    transition: background 0.3s, color 0.3s;
}

body.dark {
    background: #121212;
    color: white;
}

.container {
    max-width: 700px;
    margin: 100px auto;
    padding: 30px;
    text-align: center;
}

button {
    padding: 12px 20px;
    border: 2px solid currentColor;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    opacity: 0.8;
}

button:focus-visible {
    outline: 3px solid currentColor;
    outline-offset: 4px;
}
```

## 3. js/storage.js

```js
export function saveData(key, value) {
    localStorage.setItem(key, value);
}

export function loadData(key) {
    return localStorage.getItem(key);
}
```

## 4. js/theme.js

```js
export function enableDarkMode() {
    document.body.classList.add("dark");
}

export function disableDarkMode() {
    document.body.classList.remove("dark");
}

export function isDarkMode() {
    return document.body.classList.contains("dark");
}
```

## 5. js/main.js

```js
import { saveData, loadData } from "./storage.js";

import {
    enableDarkMode,
    disableDarkMode,
    isDarkMode
} from "./theme.js";

const themeButton = document.getElementById("themeBtn");
const statusMessage = document.getElementById("status");

function updateThemeButton() {
    const darkMode = isDarkMode();

    themeButton.textContent = darkMode
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";

    themeButton.setAttribute(
        "aria-pressed",
        String(darkMode)
    );
}

function updateStatusMessage() {
    statusMessage.textContent = isDarkMode()
        ? "Dark mode is active."
        : "Light mode is active.";
}

function updateInterface() {
    updateThemeButton();
    updateStatusMessage();
}

function applySavedTheme() {
    const savedTheme = loadData("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    updateInterface();
}

function toggleTheme() {
    if (isDarkMode()) {
        disableDarkMode();
        saveData("theme", "light");
    } else {
        enableDarkMode();
        saveData("theme", "dark");
    }

    updateInterface();
}

themeButton.addEventListener("click", toggleTheme);

applySavedTheme();
```

## What I Learned

### Clean Code

Clean code means writing code that is easy to read, understand, change, and maintain.

One important idea is keeping functions small and giving them clear responsibilities.

Instead of one large function doing everything, I can separate the work:

```text
toggleTheme()
     ↓
change theme
     ↓
save preference
     ↓
updateInterface()
     ↓
updateThemeButton()
updateStatusMessage()
```

### Small Functions

A small function should have one clear job.

For example:

```js
function updateStatusMessage() {
    statusMessage.textContent = isDarkMode()
        ? "Dark mode is active."
        : "Light mode is active.";
}
```

Its responsibility is simply to update the status message.

### Meaningful Names

Good names explain what a function does:

```js
updateThemeButton()
applySavedTheme()
updateStatusMessage()
toggleTheme()
```

Less useful names would be:

```js
doStuff()
thing()
run()
```

Good names make code easier to understand.

## Final Polish Checklist

```text
☑ HTML is semantic
☑ Button is keyboard accessible
☑ Focus state is visible
☑ ARIA attributes are updated
☑ Dark mode works
☑ Theme preference is saved
☑ Saved theme loads on startup
☑ JavaScript is split into modules
☑ Functions have clear responsibilities
☑ Variable names are meaningful
☑ Code is formatted consistently
```

## Final Project Flow

```text
Page loads
    ↓
applySavedTheme()
    ↓
Read localStorage
    ↓
Apply saved theme
    ↓
updateInterface()
    ↓
User clicks button
    ↓
toggleTheme()
    ↓
Save new preference
    ↓
updateInterface()
```

## Key Lesson

Clean code is not about making code complicated.

It is about making code easier to understand.

The main principles practiced today were:

- Use meaningful names.
- Keep functions small.
- Give functions one clear responsibility.
- Avoid unnecessary repetition.
- Separate responsibilities into modules.
- Keep code easy to read.

## Git Commit

```bash
git add .
git commit -m "refactor: polish app and clean up code"
git push
```

## Month 4 Progress

**119 / 365 = 32.60%**

## Month 4 Topics

```text
Async JavaScript
Fetch
localStorage
JSON
Loading states
Error states
Empty states
ES modules
Storage modules
Render modules
Event delegation
Modals
Toast notifications
Dark mode
Accessibility
npm
Vite
Deployment
Clean code
```

## Final Reflection

Today's task is not about adding a huge new feature.

It is about looking at code I already built and asking:

> "Can I make this easier to understand?"

That is an important part of becoming a better developer.

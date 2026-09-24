# Day 116 — Accessibility Pass

**Commit 116 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** ES Modules — `import`  
**Build & Commit (~30 min):** Accessibility pass

## Project Structure

```text
day-116-accessibility/
├── index.html
├── style.css
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
    <title>Day 116 - Accessibility Pass</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>My Accessible Website</h1>

        <p>
            Day 116 — Improving accessibility and learning ES module imports.
        </p>

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

const themeBtn = document.getElementById("themeBtn");
const status = document.getElementById("status");

function updateAccessibilityState() {
    const darkMode = isDarkMode();

    if (darkMode) {
        themeBtn.textContent = "☀️ Light Mode";
        themeBtn.setAttribute("aria-pressed", "true");
        status.textContent = "Dark mode is active.";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        themeBtn.setAttribute("aria-pressed", "false");
        status.textContent = "Light mode is active.";
    }
}

function applySavedTheme() {
    const savedTheme = loadData("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    updateAccessibilityState();
}

themeBtn.addEventListener("click", () => {
    if (isDarkMode()) {
        disableDarkMode();
        saveData("theme", "light");
    } else {
        enableDarkMode();
        saveData("theme", "dark");
    }

    updateAccessibilityState();
});

applySavedTheme();
```

## What I Learned

### ES Modules — `import`

`import` brings exported functions or values from another JavaScript file.

```js
import { saveData, loadData } from "./storage.js";
```

### Accessibility

Accessibility means making a website usable by as many people as possible, including people who use keyboards or assistive technologies.

Today I used:

```html
aria-label="Toggle dark mode"
```

to give the button an accessible name.

I used:

```html
aria-pressed="false"
```

to communicate whether the dark-mode toggle is active.

I used:

```html
role="status"
aria-live="polite"
```

so the status message can be communicated appropriately to assistive technologies.

I also added:

```css
button:focus-visible
```

so keyboard users can clearly see which element has focus.

## Key Lesson

Today I combined:

- ES module `import`
- DOM manipulation
- localStorage
- accessible HTML
- ARIA attributes
- keyboard focus

## Git Commit

```bash
git add .
git commit -m "feat: improve accessibility"
git push
```

**Progress: 116 / 365 = 31.78%**

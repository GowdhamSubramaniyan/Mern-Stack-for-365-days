# Day 117 — Deploy the App

**Commit 117 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** npm & `package.json` (intro)  
**Build & Commit (~30 min):** Deploy the app

## Project Structure

```text
day-117-deploy-app/
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
    <title>Day 117 - Deploy the App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
        <h1>My Deployed App 🚀</h1>
        <p>Day 117 — My JavaScript application is ready to go online.</p>

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

## 6. package.json

```json
{
    "name": "day-117-deploy-app",
    "version": "1.0.0",
    "description": "Day 117 JavaScript deployment project",
    "private": true,
    "scripts": {
        "start": "npx serve ."
    }
}
```

## What I Learned

### npm

npm stands for **Node Package Manager**. It is used to install and manage JavaScript packages and run project scripts.

```bash
npm install package-name
```

### package.json

`package.json` describes a JavaScript project. It can contain the project name, version, dependencies, and scripts.

### Deployment

Deployment means making an application available online.

```text
Write Code
    ↓
Test Locally
    ↓
Git
    ↓
GitHub
    ↓
Hosting / Deployment
    ↓
Public URL 🌍
```

GitHub stores the source code. Hosting serves the website to visitors. Deployment is the process of publishing the application.

## Deployment Checklist

```text
☑ HTML works
☑ CSS works
☑ JavaScript works
☑ Dark mode works
☑ localStorage works
☑ ES modules work
☑ Accessibility features work
☑ Project is pushed to GitHub
☑ App is deployed
☑ Public URL works
```

## Git Commit

```bash
git add .
git commit -m "feat: prepare app for deployment"
git push
```

**Progress: 117 / 365 = 32.05%**

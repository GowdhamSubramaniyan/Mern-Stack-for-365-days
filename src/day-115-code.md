# Day 115 — Dark Mode (Persisted)

## Project Structure

```text
day-115-dark-mode/
├── index.html
├── style.css
└── js/
    ├── main.js
    ├── theme.js
    └── storage.js
```

---

## 1. index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 115 - Dark Mode</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <h1>My Website</h1>

        <p>
            Day 115 — Learning ES Modules and Persistent Dark Mode.
        </p>

        <button id="themeBtn">
            🌙 Dark Mode
        </button>
    </main>

    <script type="module" src="js/main.js"></script>
</body>
</html>
```

---

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
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
}
```

---

## 3. js/storage.js

```js
export function saveData(key, value) {
    localStorage.setItem(key, value);
}

export function loadData(key) {
    return localStorage.getItem(key);
}
```

---

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

---

## 5. js/main.js

```js
import { saveData, loadData } from "./storage.js";

import {
    enableDarkMode,
    disableDarkMode,
    isDarkMode
} from "./theme.js";

const themeBtn = document.getElementById("themeBtn");

function updateButton() {
    if (isDarkMode()) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}

function applySavedTheme() {
    const savedTheme = loadData("theme");

    if (savedTheme === "dark") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    updateButton();
}

themeBtn.addEventListener("click", () => {
    if (isDarkMode()) {
        disableDarkMode();
        saveData("theme", "light");
    } else {
        enableDarkMode();
        saveData("theme", "dark");
    }

    updateButton();
});

applySavedTheme();
```

---

## How It Works

```text
User clicks Dark Mode
        ↓
main.js
        ↓
theme.js changes the page
        ↓
storage.js saves "dark"
        ↓
localStorage remembers it
        ↓
Page refreshes
        ↓
main.js reads saved theme
        ↓
Dark mode stays ON
```

## Git Commit

```bash
git add .
git commit -m "feat: add persistent dark mode"
git push
```

**Day 115 / 365 — 31.51%**

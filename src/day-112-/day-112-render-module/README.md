# Day 112 — Extract a Render Module

**Commit 112 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** Saving app data locally  
**Build & Commit (~30 min):** Extract a render module

## What I Learned

A render module is responsible for displaying data on the page.

Instead of putting DOM-rendering code inside `main.js`, I moved it into a separate `render.js` module.

### Responsibilities

- `main.js` → coordinates the application
- `storage.js` → saves and loads data
- `render.js` → displays data in the UI

This separation makes the code easier to understand and maintain.

## ES Modules

`export` makes functions available from a module.

`import` brings those functions into another module.

## localStorage Review

```js
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
```

JavaScript arrays/objects are converted to strings before being stored in localStorage.

## Project Structure

```text
day-112-render-module/
├── index.html
├── style.css
├── README.md
└── js/
    ├── main.js
    ├── storage.js
    └── render.js
```

## Key Lesson

Each module should have a clear responsibility.

## Git Commit

```bash
git add .
git commit -m "refactor: extract render module"
git push
```

**Progress: 112 / 365 = 30.68%**

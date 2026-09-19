# Day 111 — Extract a Storage Module

Today I learned how to use `localStorage` for saving and reading data and how to extract storage logic into a separate ES module.

## Concepts

- `localStorage.setItem()` saves data.
- `localStorage.getItem()` reads data.
- `JSON.stringify()` converts JavaScript data into a JSON string.
- `JSON.parse()` converts JSON back into JavaScript data.
- `export` makes functions available to other modules.
- `import` allows another module to use exported functions.
- Separating storage logic makes the project easier to organize and maintain.

## File Structure

```text
day-111-storage-module/
├── index.html
├── style.css
├── js/
│   ├── main.js
│   ├── api.js
│   ├── ui.js
│   └── storage.js
└── README.md
```

Open the project using VS Code Live Server.

## Git Commit

```bash
git add .
git commit -m "refactor: extract localStorage into storage module"
git push
```

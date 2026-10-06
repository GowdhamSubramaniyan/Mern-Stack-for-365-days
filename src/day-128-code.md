# Day 128 — Persist to a JSON File

**Tuesday, October 6**  
**Month 5: Node.js & Express — The Backend**  
**Commit 128 of 365**

## Today's Goal

Learn:
- Query strings
- `fs` (File System)
- `JSON.parse()`
- `JSON.stringify()`
- Persisting API data to a JSON file

## Project Structure

```text
day-128-json-persistence/
├── data/
│   └── items.json
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## data/items.json

```json
[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Keyboard"
  },
  {
    "id": 3,
    "name": "Mouse"
  }
]
```

## index.js

```js
const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000;
const DATA_FILE = "./data/items.json";

app.use(express.json());

// Read items from JSON file
function readItems() {
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
}

// Save items to JSON file
function saveItems(items) {
    fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(items, null, 2)
    );
}

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// GET all items
app.get("/items", (req, res) => {
    const items = readItems();
    res.json(items);
});

// Search using query string
app.get("/search", (req, res) => {
    const items = readItems();
    const search = req.query.name;

    if (!search) {
        return res.json(items);
    }

    const results = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    res.json(results);
});

// GET item by ID
app.get("/items/:id", (req, res) => {
    const items = readItems();
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    res.json(item);
});

// POST create item
app.post("/items", (req, res) => {
    const items = readItems();
    const { name } = req.body;

    const newItem = {
        id: items.length > 0
            ? items[items.length - 1].id + 1
            : 1,
        name: name
    };

    items.push(newItem);
    saveItems(items);

    res.status(201).json(newItem);
});

// PUT update item
app.put("/items/:id", (req, res) => {
    const items = readItems();
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    item.name = req.body.name;
    saveItems(items);

    res.json(item);
});

// DELETE item
app.delete("/items/:id", (req, res) => {
    const items = readItems();
    const id = Number(req.params.id);

    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    const deletedItem = items.splice(index, 1);
    saveItems(items);

    res.json({
        message: "Item deleted successfully",
        item: deletedItem[0]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

## Simple Explanation

### `fs`

`fs` means **File System**. It lets Node.js read and write files.

```js
const fs = require("fs");
```

### Read the JSON file

```js
const data = fs.readFileSync(DATA_FILE, "utf-8");
const items = JSON.parse(data);
```

`JSON.parse()` converts JSON text into JavaScript data.

### Save the JSON file

```js
fs.writeFileSync(
    DATA_FILE,
    JSON.stringify(items, null, 2)
);
```

`JSON.stringify()` converts JavaScript data into JSON text.

### Query strings

Example:

```text
/search?name=laptop
```

Read it with:

```js
req.query.name
```

Remember:

```text
/items/2
      ↑
req.params.id
```

```text
/search?name=laptop
        ↑
req.query.name
```

**Params = identify**  
**Query = search/filter**

## Test

Start the server:

```bash
npm run dev
```

Get all items:

```text
http://localhost:3000/items
```

Search:

```text
http://localhost:3000/search?name=lap
```

Create an item:

```http
POST http://localhost:3000/items
```

Body:

```json
{
  "name": "Monitor"
}
```

Then check `data/items.json`. The new item should be saved there.

Stop and restart the server. The item should still exist.

## Git Commit

```bash
git add .
git commit -m "feat: persist items to JSON file"
git push
```

## Progress

**128 / 365 = 35.07%**

### Key idea

```text
JSON file
   ↓
read
   ↓
JavaScript
   ↓
add / update / delete
   ↓
write
   ↓
JSON file
```

This is your first simple form of **data persistence**.

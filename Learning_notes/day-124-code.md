# Day 124 — GET Item by ID

**Month 5: Node.js & Express — The Backend**  
**Commit 124 of 365**  
**Date: Friday, October 2**  
**Progress: 33.97%**

## Project Structure

```text
day-124-get-item-by-id/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## package.json

```json
{
  "name": "day-124-get-item-by-id",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

## Install Dependencies

```bash
npm init -y
npm install express
npm install --save-dev nodemon
```

## .gitignore

```text
node_modules/
```

# Complete `index.js`

```js
const express = require("express");
const fs = require("fs");

const app = express();

const PORT = 3000;

const items = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Keyboard"
    },
    {
        id: 3,
        name: "Mouse"
    }
];

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.get("/items", (req, res) => {
    res.json(items);
});

app.get("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    res.json(item);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

# What the Code Does

## Import Express

```js
const express = require("express");
```

Loads Express into the Node.js application.

## Import `fs`

```js
const fs = require("fs");
```

`fs` stands for **File System**. Node.js provides it for working with files and folders.

Examples include:

```js
fs.readFile()
fs.writeFile()
```

For today's task, `fs` is included because file-system reading/writing is part of today's learning. The actual GET-by-ID endpoint still uses the temporary array.

## Create the Express app

```js
const app = express();
```

Creates the backend application.

## Create the items

```js
const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];
```

For now, the data is stored in memory. Later, this will be replaced by MongoDB.

# GET All Items

```js
app.get("/items", (req, res) => {
    res.json(items);
});
```

Request:

```text
GET /items
```

Response:

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

# GET Item by ID

This is today's main feature:

```js
app.get("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    res.json(item);
});
```

## What is `:id`?

The `:id` is a **route parameter**.

This route:

```text
/items/:id
```

can match:

```text
/items/1
/items/2
/items/3
```

Express gives us the value using:

```js
req.params.id
```

For `/items/2`, the value is the string `"2"`, so we convert it to a number:

```js
const id = Number(req.params.id);
```

# Finding the Item

We use JavaScript's `.find()` method:

```js
const item = items.find((item) => item.id === id);
```

For `GET /items/2`:

```text
Laptop      → 1 === 2 ❌
Keyboard    → 2 === 2 ✅
```

The result is:

```json
{
  "id": 2,
  "name": "Keyboard"
}
```

# Handling an Invalid ID

If the requested ID doesn't exist, `.find()` returns `undefined`.

```js
if (!item) {
    return res.status(404).json({
        message: "Item not found"
    });
}
```

The client receives:

```json
{
  "message": "Item not found"
}
```

with HTTP status `404`.

# API Endpoints

```text
GET /health
GET /items
GET /items/:id
```

- `/health` checks whether the server is working.
- `/items` returns all items.
- `/items/:id` returns one specific item.

# Run the Project

```bash
npm start
```

Or during development:

```bash
npm run dev
```

Nodemon automatically restarts the server when you save changes.

# Test the Endpoints

## Health

```text
http://localhost:3000/health
```

Expected:

```json
{
  "status": "ok"
}
```

## All items

```text
http://localhost:3000/items
```

## Item 1

```text
http://localhost:3000/items/1
```

Expected:

```json
{
  "id": 1,
  "name": "Laptop"
}
```

## Item 2

```text
http://localhost:3000/items/2
```

Expected:

```json
{
  "id": 2,
  "name": "Keyboard"
}
```

## Item 3

```text
http://localhost:3000/items/3
```

Expected:

```json
{
  "id": 3,
  "name": "Mouse"
}
```

## Non-existent item

```text
http://localhost:3000/items/999
```

Expected:

```json
{
  "message": "Item not found"
}
```

Status:

```text
404 Not Found
```

# Git Commands

```bash
git add .
git commit -m "feat: add get item by id endpoint"
git push
```

# Day 124 Mental Model

```text
GET /items/2
      ↓
Express receives request
      ↓
req.params.id
      ↓
"2"
      ↓
Number("2")
      ↓
2
      ↓
items.find(...)
      ↓
Keyboard
      ↓
res.json(item)
      ↓
JSON response
```

# What I Learned Today

- Node.js `fs` module
- File-system basics
- Route parameters
- `req.params`
- `:id`
- `Number()`
- Array `.find()`
- HTTP 404 status
- Returning one specific resource
- GET-by-ID API routes
- Testing Express endpoints

# Commit

**Commit 124 of 365**

```text
feat: add get item by id endpoint
```

**Progress: 33.97%**

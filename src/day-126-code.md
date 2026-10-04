# Day 126 — PUT Update Item

**Month 5: Node.js & Express — The Backend**  
**Commit 126 of 365**  
**Date: Sunday, October 4**  
**Progress: 34.52%**

---

## Today's Task

### Learn — 30 min
- Express setup
- First route
- Request and response flow

### Build & Commit — ~30 min
- Create a `PUT /items/:id` endpoint
- Find an item by ID
- Update the item
- Return the updated item
- Handle an item that does not exist

---

# Project Structure

```text
day-126-put-update-item/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

# package.json

```json
{
  "name": "day-126-put-update-item",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

---

# Install Dependencies

```bash
npm init -y
npm install express
npm install --save-dev nodemon
```

---

# .gitignore

```text
node_modules/
```

---

# Complete `index.js`

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

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

app.post("/items", (req, res) => {
    const { name } = req.body;

    const newItem = {
        id: items.length + 1,
        name: name
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    item.name = req.body.name;

    res.json(item);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

# What Is PUT?

`PUT` is an HTTP method commonly used to update an existing resource.

Current item:

```json
{
  "id": 2,
  "name": "Keyboard"
}
```

Send:

```text
PUT /items/2
```

with:

```json
{
  "name": "Mechanical Keyboard"
}
```

The server finds item `2`, updates it, and returns the updated item.

---

# CRUD Progress

```text
CREATE → POST
READ   → GET
UPDATE → PUT/PATCH
DELETE → DELETE
```

So far:

```text
GET /items
GET /items/:id
POST /items
PUT /items/:id
```

---

# Express Setup

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());
```

Routes are then created with methods such as:

```js
app.get(...);
app.post(...);
app.put(...);
```

The server listens with:

```js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

# Understanding `:id`

This route:

```js
app.put("/items/:id", ...)
```

uses `:id` as a route parameter.

For:

```text
PUT /items/2
```

Express gives us:

```js
req.params.id
```

The value arrives as the string `"2"`, so we convert it:

```js
const id = Number(req.params.id);
```

---

# Finding the Item

```js
const item = items.find((item) => item.id === id);
```

For ID `2`, JavaScript checks the array until it finds:

```json
{
  "id": 2,
  "name": "Keyboard"
}
```

---

# Handling a Missing Item

If the ID does not exist:

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

---

# Updating the Item

```js
item.name = req.body.name;
```

If the request body is:

```json
{
  "name": "Mechanical Keyboard"
}
```

the existing name changes from `Keyboard` to `Mechanical Keyboard`.

---

# Testing the PUT Request

Start the server:

```bash
npm run dev
```

Using Postman:

```text
PUT http://localhost:3000/items/2
```

Choose:

```text
Body → raw → JSON
```

Send:

```json
{
  "name": "Mechanical Keyboard"
}
```

Expected response:

```json
{
  "id": 2,
  "name": "Mechanical Keyboard"
}
```

---

# Check the Updated Data

Request:

```text
GET http://localhost:3000/items
```

Expected:

```json
[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Mechanical Keyboard"
  },
  {
    "id": 3,
    "name": "Mouse"
  }
]
```

---

# Test a Missing Item

```text
PUT http://localhost:3000/items/999
```

Body:

```json
{
  "name": "Something"
}
```

Expected:

```json
{
  "message": "Item not found"
}
```

Status:

```text
404
```

---

# Testing With curl

```bash
curl -X PUT http://localhost:3000/items/2 \
-H "Content-Type: application/json" \
-d "{\"name\":\"Mechanical Keyboard\"}"
```

Expected:

```json
{
  "id": 2,
  "name": "Mechanical Keyboard"
}
```

---

# Important Limitation

The data is still stored in memory:

```js
const items = [];
```

Therefore, if the server restarts, the changes disappear.

Later, MongoDB will provide persistent storage.

---

# API Endpoints After Day 126

```text
GET /health
        ↓
Check server

GET /items
        ↓
Get all items

GET /items/:id
        ↓
Get one item

POST /items
        ↓
Create item

PUT /items/:id
        ↓
Update item
```

---

# Today's Mental Model

```text
Client
   │
   │ PUT /items/2
   │
   │ {
   │   "name": "Mechanical Keyboard"
   │ }
   ↓
Express
   ↓
req.params.id
   ↓
Find item 2
   ↓
Update item.name
   ↓
res.json(item)
   ↓
Updated item
```

---

# Most Important Code

```js
app.put("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find((item) => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    item.name = req.body.name;

    res.json(item);
});
```

---

# What I Learned Today

- Express application setup
- Express routes
- PUT requests
- Route parameters
- `req.params`
- `req.body`
- JavaScript `.find()`
- Updating objects
- HTTP `404 Not Found`
- CRUD operations
- Testing PUT requests with Postman/curl

---

# Git Commit

```bash
git add .
```

```bash
git commit -m "feat: add update item endpoint"
```

```bash
git push
```

**Commit 126 of 365**  
**Progress: 34.52%**

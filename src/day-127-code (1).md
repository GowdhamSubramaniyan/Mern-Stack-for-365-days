# Day 127 — DELETE Item

**Date:** Monday, October 5, 2026  
**Month:** 5 — Node.js & Express (The Backend)  
**Commit:** 127 of 365  
**Progress:** 34.79%

## Today's Task

📚 **Learn (30 min):** Route params  
🛠 **Build & Commit (30 min):** DELETE item

---

## What I Learned

### 1. DELETE in HTTP

The `DELETE` HTTP method is used when we want the backend to remove an existing resource.

Example:

```http
DELETE /items/2
```

This means: delete the item with ID `2`.

### 2. Route Parameters

A route parameter is a dynamic value inside a URL.

```js
app.delete("/items/:id", (req, res) => {
```

Here, `:id` is a route parameter.

If the request is:

```text
/items/2
```

we can access the value using:

```js
req.params.id
```

Express gives route parameters to us as strings, so we convert the ID to a number:

```js
const id = Number(req.params.id);
```

### 3. Finding the Item Index

To delete an item from an array, we need its index.

```js
const index = items.findIndex((item) => item.id === id);
```

`findIndex()` returns the position of the matching item.

If no item is found, it returns `-1`.

### 4. Removing the Item

Once we know the index, we can remove one item using `splice()`:

```js
items.splice(index, 1);
```

The first argument is where to start, and the second argument is how many items to remove.

---

# Project Structure

```text
day-127-delete-item/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

`node_modules/` should not be committed to GitHub.

`.gitignore`:

```text
node_modules/
```

---

# Complete Code

## `index.js`

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];

// Health check
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// GET all items
app.get("/items", (req, res) => {
    res.json(items);
});

// GET item by ID
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

// POST create item
app.post("/items", (req, res) => {
    const { name } = req.body;

    const newItem = {
        id: items.length + 1,
        name: name
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

// PUT update item
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

// DELETE item
app.delete("/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    const deletedItem = items.splice(index, 1);

    res.json({
        message: "Item deleted successfully",
        item: deletedItem[0]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

# How the DELETE Route Works

The route starts with:

```js
app.delete("/items/:id", (req, res) => {
```

For this request:

```http
DELETE /items/2
```

`req.params.id` is:

```js
"2"
```

We convert it to a number:

```js
const id = Number(req.params.id);
```

Then find the item's position:

```js
const index = items.findIndex((item) => item.id === id);
```

If the item does not exist:

```js
if (index === -1) {
    return res.status(404).json({
        message: "Item not found"
    });
}
```

If it exists, delete it:

```js
const deletedItem = items.splice(index, 1);
```

Finally, send a response:

```js
res.json({
    message: "Item deleted successfully",
    item: deletedItem[0]
});
```

---

# Testing

Start the development server:

```bash
npm run dev
```

## Get all items

```http
GET http://localhost:3000/items
```

Initial response:

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

## Delete item 2

Using Postman or Thunder Client:

```http
DELETE http://localhost:3000/items/2
```

Expected response:

```json
{
    "message": "Item deleted successfully",
    "item": {
        "id": 2,
        "name": "Keyboard"
    }
}
```

## Check the items again

```http
GET http://localhost:3000/items
```

Now the response should be:

```json
[
    {
        "id": 1,
        "name": "Laptop"
    },
    {
        "id": 3,
        "name": "Mouse"
    }
]
```

The Keyboard has been deleted.

## Test a missing item

```http
DELETE http://localhost:3000/items/99
```

Expected response:

```json
{
    "message": "Item not found"
}
```

HTTP status:

```text
404 Not Found
```

---

# CRUD Progress

At this point, the API supports the basic CRUD operations:

| Operation | HTTP Method | Endpoint |
|---|---|---|
| Create | POST | `/items` |
| Read all | GET | `/items` |
| Read one | GET | `/items/:id` |
| Update | PUT | `/items/:id` |
| Delete | DELETE | `/items/:id` |

CRUD means:

- **C**reate → POST
- **R**ead → GET
- **U**pdate → PUT
- **D**elete → DELETE

---

# Git Commit

After testing the endpoint:

```bash
git add .
git commit -m "feat: add delete item endpoint"
git push
```

---

# Important Note

The items are currently stored in a JavaScript array:

```js
const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];
```

This means the data is only stored in memory. If the Node.js server restarts, the deleted/created/updated changes disappear and the original array comes back.

Later in the backend journey, this temporary array can be replaced with a real database.

---

# Day 127 Summary

Today I learned how route parameters work in Express and used them to build a DELETE endpoint.

The key concepts were:

```text
req.params.id
Number()
findIndex()
splice()
404 Not Found
app.delete()
```

I also completed the basic CRUD API for the `items` resource.

**Commit 127 of 365 — 34.79% complete.**

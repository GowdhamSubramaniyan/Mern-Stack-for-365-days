# Day 125 — POST Create Item

**Month 5: Node.js & Express — The Backend**  
**Commit 125 of 365**  
**Date: Saturday, October 3**  
**Progress: 34.25%**

## Today's Task

### Learn — 30 min
- HTTP basics
- Requests and responses
- HTTP methods
- Request body
- Status codes

### Build & Commit — ~30 min
- Create a `POST /items` endpoint
- Receive an item from the request body
- Create a new item
- Return the created item
- Commit and push to GitHub

## Project Structure

```text
day-125-post-create-item/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## package.json

```json
{
  "name": "day-125-post-create-item",
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

## Complete `index.js`

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## HTTP Basics

HTTP is the communication system between a client and a server.

```text
Client → Request → Server
Client ← Response ← Server
```

A client could be a browser, React application, mobile application, Postman, or another server.

## HTTP Request

A request can contain:

```text
Method
URL
Headers
Body
```

Today's request is:

```text
POST /items
```

with a JSON body:

```json
{
  "name": "Monitor"
}
```

## HTTP Response

The server sends a response back to the client. For today's POST request:

```text
201 Created
```

and:

```json
{
  "id": 4,
  "name": "Monitor"
}
```

## GET vs POST

**GET** retrieves data:

```text
GET /items
```

**POST** creates data:

```text
POST /items
```

## CRUD

```text
Create → POST
Read   → GET
Update → PUT/PATCH
Delete → DELETE
```

Today we implement **Create → POST**.

## Understanding `express.json()`

```js
app.use(express.json());
```

This tells Express to parse JSON request bodies and make the data available through `req.body`.

If the client sends:

```json
{
  "name": "Monitor"
}
```

then:

```js
req.body
```

contains that object.

## POST Route

```js
app.post("/items", (req, res) => {
    const { name } = req.body;

    const newItem = {
        id: items.length + 1,
        name: name
    };

    items.push(newItem);

    res.status(201).json(newItem);
});
```

### Step 1 — Read the Request Body

```js
const { name } = req.body;
```

For:

```json
{
  "name": "Monitor"
}
```

`name` becomes `"Monitor"`.

### Step 2 — Create the New Item

```js
const newItem = {
    id: items.length + 1,
    name: name
};
```

With three existing items, the new item gets ID `4`.

### Step 3 — Add the Item

```js
items.push(newItem);
```

### Step 4 — Send the Response

```js
res.status(201).json(newItem);
```

`201` means **Created**.

## Testing With Postman

Start the server:

```bash
npm run dev
```

Create:

```text
POST http://localhost:3000/items
```

Select:

```text
Body → raw → JSON
```

Send:

```json
{
  "name": "Monitor"
}
```

Expected response:

```json
{
  "id": 4,
  "name": "Monitor"
}
```

Status:

```text
201 Created
```

## Testing With curl

```bash
curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d "{\"name\":\"Monitor\"}"
```

## Check All Items

After creating the item:

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
    "name": "Keyboard"
  },
  {
    "id": 3,
    "name": "Mouse"
  },
  {
    "id": 4,
    "name": "Monitor"
  }
]
```

## API Endpoints After Day 125

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
Create an item
```

## Important Limitation

The items are currently stored in memory. If the server stops, newly created items disappear.

Later, MongoDB will provide persistent storage:

```text
Express
   ↓
MongoDB
   ↓
Persistent data
```

## Git Commands

```bash
git add .
```

```bash
git commit -m "feat: add create item endpoint"
```

```bash
git push
```

## Today's Mental Model

```text
Client
   │
   │ POST /items
   │
   │ {
   │   "name": "Monitor"
   │ }
   ↓
Express
   ↓
req.body
   ↓
Create new object
   ↓
items.push()
   ↓
201 Created
   ↓
JSON response
   ↓
Client
```

## What I Learned Today

- HTTP requests
- HTTP responses
- GET vs POST
- Request body
- `req.body`
- `express.json()`
- HTTP status `201 Created`
- Creating a resource with POST
- CRUD fundamentals
- Testing POST requests with Postman/curl

## Commit

```text
feat: add create item endpoint
```

**Commit 125 of 365**  
**Progress: 34.25%**

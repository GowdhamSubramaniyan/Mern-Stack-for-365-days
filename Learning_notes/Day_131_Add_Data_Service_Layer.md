# Day 131 — Add a Data / Service Layer

**Date:** Friday, October 9  
**Month:** 5 — Node.js & Express (The Backend)  
**Commit:** 131 of 365

---

## 📚 Today's Goal

Learn how to separate **data/business logic** from Express routes by introducing a **Data / Service Layer**.

The goal is to make the backend cleaner, easier to maintain, and easier to scale.

---

## 1. What is a Data / Service Layer?

A **service layer** is a separate part of your backend that contains logic for working with data and performing business operations.

Instead of putting everything inside an Express route:

```js
app.get("/items", (req, res) => {
  const items = JSON.parse(fs.readFileSync("data.json"));
  res.json(items);
});
```

we move the data logic into another file.

Example structure:

```text
routes/
    itemRoutes.js

controllers/
    itemController.js

services/
    itemService.js
```

The responsibility becomes:

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Data
```

---

## 2. Why Do We Need a Service Layer?

Without a service layer, routes and controllers can become very large.

With a service layer, each part has a clear responsibility.

### Route

Responsible for:

- URL
- HTTP method
- Connecting the request to a controller

### Controller

Responsible for:

- Receiving `req`
- Sending `res`
- Handling HTTP-level concerns

### Service

Responsible for:

- Business logic
- Data operations
- Processing information

### Data Layer

Responsible for:

- Reading/writing data
- Database communication
- File storage

---

## 3. Sending JSON Responses

Express provides:

```js
res.json()
```

to send JSON data to the client.

Example:

```js
res.json({
  message: "Hello World"
});
```

The client receives:

```json
{
  "message": "Hello World"
}
```

You can also send arrays:

```js
res.json([
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Phone"
  }
]);
```

---

## 4. Why JSON?

JSON stands for **JavaScript Object Notation**.

It is commonly used for communication between:

```text
Frontend ↔ Backend
```

Example:

```json
{
  "id": 1,
  "name": "Laptop",
  "price": 999
}
```

A React frontend can request this data from an Express API and use it to display information.

---

## 5. Example Architecture

A simple project could look like:

```text
project/
│
├── server.js
│
├── routes/
│   └── itemRoutes.js
│
├── controllers/
│   └── itemController.js
│
├── services/
│   └── itemService.js
│
└── data/
    └── items.json
```

Each layer has a specific job.

---

## 6. Example Service

`itemService.js`

```js
const items = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Phone"
  }
];

const getAllItems = () => {
  return items;
};

module.exports = {
  getAllItems
};
```

The service doesn't know anything about Express.

It doesn't need:

```js
req
res
```

It simply handles the data/business logic.

---

## 7. Example Controller

`itemController.js`

```js
const itemService = require("../services/itemService");

const getItems = (req, res) => {
  const items = itemService.getAllItems();

  res.json(items);
};

module.exports = {
  getItems
};
```

The controller connects Express to the service.

---

## 8. Example Route

`itemRoutes.js`

```js
const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/", itemController.getItems);

module.exports = router;
```

The request flow is:

```text
GET /items
     ↓
itemRoutes
     ↓
itemController
     ↓
itemService
     ↓
data
     ↓
JSON response
```

---

## 9. The Important Idea

Don't put all your backend logic inside the route.

Instead, separate responsibilities.

### Less maintainable

```text
Route
 ├── database logic
 ├── business logic
 ├── validation
 └── response
```

### Better

```text
Route
  ↓
Controller
  ↓
Service
  ↓
Data
```

This is called **separation of concerns**.

---

# 🛠 Build Task

For today's project:

### Step 1

Create:

```text
services/
```

### Step 2

Create:

```text
itemService.js
```

### Step 3

Move your item/data logic into the service.

### Step 4

Update your controller to call the service.

### Step 5

Return the data using:

```js
res.json()
```

### Step 6

Test your API:

```text
GET /items
```

Expected response:

```json
[
  {
    "id": 1,
    "name": "Laptop"
  }
]
```

---

# 🧠 What I Learned Today

- What a service layer is
- Why separation of concerns matters
- How services interact with controllers
- How `res.json()` sends JSON responses
- How routes, controllers, services, and data work together
- Why business logic should not live directly inside routes

---

# 🔑 Key Concept

Remember:

```text
ROUTE
  ↓
CONTROLLER
  ↓
SERVICE
  ↓
DATA
```

Each layer has one main responsibility.

---

# 🔄 Request Flow

When a user requests:

```http
GET /items
```

the backend works like:

```text
Client
  ↓
GET /items
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Data
  ↓
Service returns data
  ↓
Controller
  ↓
res.json()
  ↓
Client
```

---

# 📌 Interview Question

### What is a service layer?

**Answer:**

A service layer is a part of an application that contains business and data-related logic separately from the HTTP routes and controllers. It helps keep the application modular, maintainable, and easier to test.

---

# 🚀 Day 131 Summary

Today I introduced a **data/service layer** into my Node.js and Express backend.

The main idea was to separate responsibilities:

```text
Routes → Controllers → Services → Data
```

I also learned how Express uses:

```js
res.json()
```

to send structured JSON responses to clients.

This makes the backend cleaner and prepares the project for working with a real database later.

---

**Commit 131 / 365**

> Added a data/service layer and separated business logic from the Express routes.

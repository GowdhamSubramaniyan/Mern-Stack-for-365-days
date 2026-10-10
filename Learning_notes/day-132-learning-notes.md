# Day 132 — Error-Handling Middleware

**Saturday, October 10**  
**Month 5: Node.js & Express — The Backend**  
**Commit 132 of 365**  
**Progress: 36.16%**

## 1. What is REST?

REST is a set of principles for designing APIs so clients can interact with resources consistently.

For an items API:

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/items` | Get all items |
| `GET` | `/items/1` | Get one item |
| `POST` | `/items` | Create an item |
| `PUT` | `/items/1` | Update an item |
| `DELETE` | `/items/1` | Delete an item |

Think of `/items` as the resource and the HTTP method as the action.

## 2. HTTP Status Codes

- **200 — OK:** The request succeeded.
- **201 — Created:** A new item was created.
- **400 — Bad Request:** The input is invalid.
- **404 — Not Found:** The requested item does not exist.
- **500 — Internal Server Error:** An unexpected server problem occurred.

## 3. What Is Error-Handling Middleware?

Error-handling middleware lets an Express app handle errors in one central place rather than repeating error-response code in every route.

It has four parameters:

```js
(err, req, res, next)
```

Create `middleware/errorHandler.js`:

```js
function errorHandler(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        message: "Something went wrong"
    });
}

module.exports = errorHandler;
```

## 4. Register the Error Handler

In `index.js`, require the handler and register it **after your routes**:

```js
const errorHandler = require("./middleware/errorHandler");

// Register your routes above this line

app.use(errorHandler);
```

To pass an error to the handler from a route or middleware:

```js
next(new Error("Something went wrong"));
```

The flow is:

```text
Request
   ↓
Route
   ↓
An error occurs
   ↓
next(error)
   ↓
Error-handling middleware
   ↓
Error response
```

Normal middleware usually uses `(req, res, next)`. Error-handling middleware uses `(err, req, res, next)`.

## 5. Today's Task Checklist

- [ ] Review REST principles and common HTTP status codes.
- [ ] Create `middleware/errorHandler.js`.
- [ ] Register the handler after the routes in `index.js`.
- [ ] Test that an error passed to `next(error)` reaches the handler.

Suggested structure:

```text
day-132-api/
├── controllers/
├── routes/
├── middleware/
│   └── errorHandler.js
├── data/
│   └── items.json
└── index.js
```

## Git Commit

```bash
git add .
git commit -m "feat: add error handling middleware"
git push
```

## Key Takeaway

- **REST** describes principles for structuring API interactions.
- **Status codes** communicate the result of an HTTP request.
- **Error-handling middleware** centralizes error responses in Express.

**Commit 132 / 365 — 36.16% complete.**

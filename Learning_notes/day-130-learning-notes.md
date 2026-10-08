# Day 130 — Custom Middleware & Controller Layer

**Thursday, October 8**  
**Month 5: Node.js & Express — The Backend**  
**Commit 130 of 365**  
**Progress: 35.62%**

## 1. Custom Middleware

Middleware is something that runs before your route.

```js
const logger = (req, res, next) => {
    console.log("Request received");
    next();
};

app.use(logger);
```

The flow is:

```text
Request
   ↓
Logger middleware
   ↓
next()
   ↓
Route
   ↓
Response
```

`next()` means:

> Continue to the next step.

---

## 2. What is a Controller?

A controller contains the actual logic for handling a request.

Instead of putting everything inside the route:

```js
router.get("/", (req, res) => {
    // lots of logic...
});
```

we move the logic into a controller.

### Route

```js
router.get("/", getItems);
```

### Controller

```js
const getItems = (req, res) => {
    res.json({
        message: "Here are the items"
    });
};

module.exports = {
    getItems
};
```

The route says:

> When `/items` is requested, call `getItems`.

The controller does the actual work.

---

## 3. Middleware vs Router vs Controller

**Middleware** → checks or processes the request.

**Router** → organizes the routes.

**Controller** → contains the route's actual logic.

---

## 4. Simple Mental Model

Think of your backend like a restaurant:

```text
Customer
   ↓
Middleware = security/check
   ↓
Router = tells where to go
   ↓
Controller = does the actual work
   ↓
Response = gives the result
```

Another way to remember it:

```text
Client
  ↓
Middleware
  ↓
Router
  ↓
Controller
  ↓
Response
```

---

## 5. Why Controllers?

Controllers keep routes clean.

Instead of:

```text
Route
 ├── read data
 ├── process data
 ├── error handling
 └── response
```

we have:

```text
Route
   ↓
Controller
   ↓
Logic
   ↓
Response
```

This makes larger applications easier to understand and maintain.

---

## Day 130 Checklist

- [x] Learned custom middleware
- [x] Learned `next()`
- [x] Learned what a controller is
- [x] Understand middleware vs router vs controller
- [x] Understand why controllers are useful

### Git Commit

```bash
git add .
git commit -m "refactor: add controller layer"
git push
```

**Commit 130 / 365 — 35.62% complete.**

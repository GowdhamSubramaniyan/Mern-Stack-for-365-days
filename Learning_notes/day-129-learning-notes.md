# Day 129 — Middleware & Router

**Month 5: Node.js & Express — The Backend**  
**Commit 129 of 365**  
**Progress: 35.34%**

## 1. What is a Route?

A route tells the backend what to do when a specific request reaches a specific URL.

```text
Client
  ↓
GET /items
  ↓
Express
  ↓
Matching route
  ↓
Response
```

## 2. What is Middleware?

Middleware is a function that runs during the request → response process.

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

Middleware can inspect or modify the request, process data, log requests, authenticate users, or pass control to the next step.

Example:

```js
app.use(express.json());
```

This middleware parses JSON request bodies so we can use:

```js
req.body
```

## 3. What is `next()`?

Middleware usually receives:

```js
(req, res, next)
```

`next()` means: continue to the next middleware or route.

Example:

```js
app.use((req, res, next) => {
    console.log("Request received");
    next();
});
```

Flow:

```text
Request
   ↓
Middleware
   ↓
next()
   ↓
Route
   ↓
Response
```

If middleware neither calls `next()` nor sends a response, the request can get stuck.

## 4. What is a Router?

A Router is a way to group related Express routes together.

Instead of putting everything in `index.js`, we can organize routes like this:

```text
routes/
├── itemRoutes.js
├── userRoutes.js
└── orderRoutes.js
```

For example, `itemRoutes.js` can contain:

```text
GET /
GET /:id
POST /
PUT /:id
DELETE /:id
```

## 5. Router vs Middleware

### Middleware

Processes the request during the request/response pipeline.

```text
Request
   ↓
Middleware
   ↓
Route
   ↓
Response
```

### Router

Groups and organizes related routes.

```text
/items
   ↓
Item Router
   ├── GET /
   ├── POST /
   ├── PUT /:id
   └── DELETE /:id
```

## 6. Why Use Routers?

As an application grows, putting hundreds of routes inside one file becomes difficult to maintain.

Instead:

```text
routes/
├── userRoutes.js
├── productRoutes.js
├── orderRoutes.js
├── paymentRoutes.js
└── authRoutes.js
```

This is called **separation of concerns**: each part of the application has a clear responsibility.

## 7. Simple Mental Model

```text
Client
  ↓
Request
  ↓
Middleware
  ↓
Router
  ↓
Route
  ↓
Response
```

### Key definitions

**Route** → Handles a specific HTTP request.

**Middleware** → Runs during the request/response pipeline.

**`next()`** → Passes control to the next step.

**Router** → Groups related routes together.

**Separation of concerns** → Keeps different responsibilities in different parts of the application.

## Day 129 Checklist

- [x] Learned what a route is
- [x] Learned middleware
- [x] Learned `next()`
- [x] Learned Express Router
- [x] Understand Router vs Middleware
- [x] Understand separation of concerns

## Git Commit

```bash
git add .
git commit -m "refactor: move item routes into router"
git push
```

**Commit 129 / 365 — 35.34% complete.**

# Day 135 — Error-Handling Middleware in Express.js

**Date:** Tuesday, October 13  
**Learning track:** Month 5 — Node.js & Express (the Backend)  
**Day:** 135 of 365

## 1. What is error handling?

Error handling is the process of catching problems in an application and returning a useful, controlled response instead of letting the application fail unexpectedly.

In an Express API, errors can happen when a requested item does not exist, the client sends invalid data, a database operation fails, or an unexpected exception occurs.

Good error handling helps an API return consistent responses and makes debugging easier.

## 2. What is middleware?

Middleware is a function that runs during the request-response cycle. It can read or modify the request and response, end the request, or pass control to the next middleware.

Regular Express middleware commonly has this signature:

```js
(req, res, next) => {
  // Do something
  next();
}
```

Error-handling middleware has **four parameters**:

```js
(err, req, res, next) => {
  // Handle the error
}
```

Express identifies error-handling middleware by its four-parameter signature. The first parameter is the error.

## 3. A basic error-handling example

```js
const express = require("express");

const app = express();

app.get("/error-demo", (req, res, next) => {
  const error = new Error("Something went wrong");
  error.status = 500;
  next(error);
});

// Error-handling middleware should come after routes.
app.use((err, req, res, next) => {
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Internal server error",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

When you visit `/error-demo`, the route passes an error to `next(error)`. Express skips normal middleware and moves to the error-handling middleware, which sends a JSON response.

Example response:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

## 4. Why use `next(error)`?

Calling `next()` without an argument passes control to the next regular middleware.

Calling `next(error)` signals that an error occurred and passes it through Express's error-handling flow.

```js
next();        // Continue normal middleware flow
next(error);   // Continue through error-handling flow
```

Do not call `next(error)` after you have already sent a response. Doing so can cause response-handling problems.

## 5. Handle missing resources with a 404

A `404 Not Found` response means the server could not find the requested resource. For example, an API might receive a request for an item ID that does not exist.

```js
app.get("/items/:id", (req, res, next) => {
  const item = null; // Imagine the item was not found.

  if (!item) {
    const error = new Error("Item not found");
    error.status = 404;
    return next(error);
  }

  res.json(item);
});
```

The error-handling middleware can then return the appropriate `404` status code.

## 6. Use a consistent error response

A small improvement is to keep the response format consistent across the API.

```js
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message:
      status === 500
        ? "Internal server error"
        : err.message,
  });
});
```

The `res.headersSent` check matters because an error might occur after a response has already started. In that case, delegate to Express's default error handler rather than attempting to send another response.

In a production application, avoid exposing sensitive internal error details to clients. Log useful diagnostic information on the server instead.

## 7. Handling errors in asynchronous routes

An asynchronous route may fail when it awaits a database call or another asynchronous operation.

With Express 5, rejected promises returned by route handlers are automatically passed to `next()`.

```js
app.get("/users/:id", async (req, res) => {
  const user = await findUserById(req.params.id);

  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }

  res.json(user);
});
```

Here, `findUserById` represents a function you would implement for your application.

If you are using Express 4, wrap asynchronous code in `try/catch` and pass the error to `next(err)`, or use a compatible async-handler wrapper:

```js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await findUserById(req.params.id);

    if (!user) {
      const error = new Error("User not found");
      error.status = 404;
      return next(error);
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
});
```

## 8. Middleware order matters

A common Express application structure is:

1. Register built-in middleware such as `express.json()`.
2. Register routes.
3. Register a not-found handler for requests that did not match a route.
4. Register error-handling middleware last.

Example:

```js
app.use(express.json());

// Register routes here.
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Not-found handler: no route matched the request.
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Error handler: keep this after routes and the not-found handler.
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: status === 500 ? "Internal server error" : err.message,
  });
});
```

The not-found handler is regular middleware: it creates an error and calls `next(error)`. The final middleware handles errors passed to it.

## 9. Common HTTP status codes

| Status | Meaning | Example |
|---|---|---|
| `400` | Bad Request | Invalid input |
| `401` | Unauthorized | Authentication is required |
| `403` | Forbidden | The user lacks permission |
| `404` | Not Found | Item or route does not exist |
| `500` | Internal Server Error | Unexpected server-side failure |

Choose a status code that accurately describes the problem. Do not return `200 OK` for a failed request.

## 10. Common mistakes to avoid

- Forgetting the four parameters in error middleware: `(err, req, res, next)`.
- Registering the error handler before the routes.
- Sending more than one response for a request.
- Failing to forward errors from asynchronous code when using Express 4.
- Returning internal stack traces or sensitive details to clients in production.
- Using `404` for every error instead of choosing the correct status code.

## 11. Key takeaway

Error-handling middleware gives an Express API a central place to process errors and return consistent responses. Routes can pass errors with `next(error)`, and the error handler can decide which HTTP status and message to return.

Today’s focus is to understand the difference between normal middleware and error-handling middleware, use `next(error)` correctly, and register the error handler after the routes.

## 12. Practice task

Extend your CRUD API with centralised error handling.

1. Create a `GET /items/:id` route that returns `404` when the item does not exist.
2. Add an error-handling middleware after your routes.
3. Return JSON in a consistent format: `{ "success": false, "message": "..." }`.
4. Test a successful request, a missing item, and a route that deliberately throws an error.
5. Confirm that unexpected server errors return status `500` without exposing sensitive details.

**Suggested commit message:**

```bash
git add .
git commit -m "Day 135: Add Express error-handling middleware"
```

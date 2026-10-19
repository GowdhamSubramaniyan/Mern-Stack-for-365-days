# Day 141 — Helmet, Morgan & Service Layer

**Monday, October 19**  
**Month 5: Node.js & Express — The Backend**  
**Commit 141 of 365**  
**Progress: 38.63%**

## 1. What Is a Service Layer?

A service layer keeps the main application logic separate from routes and controllers.

```text
Route → Controller → Service → Data
```

- **Route:** Matches the URL.
- **Controller:** Handles the request and response.
- **Service:** Performs the main work, such as finding or creating items.
- **Data:** Stores items in a JSON file or database.

## 2. What Is Helmet?

Helmet adds security-related HTTP headers to Express responses.

Install it:

```bash
npm install helmet
```

In `index.js`:

```js
const helmet = require("helmet");

app.use(helmet());
```

## 3. What Is Morgan?

Morgan logs HTTP requests in your terminal, helping you see which endpoint was requested and the response status.

Install it:

```bash
npm install morgan
```

In `index.js`:

```js
const morgan = require("morgan");

app.use(morgan("dev"));
```

When you request `GET /items`, Morgan prints a log in your terminal.

## 4. Middleware Setup

Add this before registering your routes in `index.js`:

```js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Register your routes below
```

Keep your existing routes, 404 handler, and error handler in the correct order.

## 5. Remember

| Tool / Layer | Purpose |
|---|---|
| Helmet | Adds security-related HTTP headers |
| Morgan | Logs HTTP requests |
| Service layer | Separates main logic from routes and controllers |

## Git Commit

```bash
git add .
git commit -m "feat: add Helmet and Morgan middleware"
git push
```

**Commit 141 / 365 — 38.63% complete.**

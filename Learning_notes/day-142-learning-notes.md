# Day 142 — Input Validation & Rate Limiting

**Tuesday, October 20**  
**Month 5: Node.js & Express — The Backend**  
**Commit 142 of 365**  
**Progress: 38.90%**

## 1. Input Validation

Input validation checks whether data sent by a client follows the rules your API expects. Validate data before saving it.

For example, an item might require:
- `name`: a non-empty string.
- `price`: a positive number.

Example validation in a controller:

```js
const { name, price } = req.body;

if (typeof name !== "string" || name.trim() === "") {
  return res.status(400).json({
    message: "Name is required",
  });
}

if (typeof price !== "number" || price <= 0) {
  return res.status(400).json({
    message: "Price must be a positive number",
  });
}
```

- `req.body` contains the request body (make sure `app.use(express.json())` is enabled).
- `trim()` catches names containing only spaces.
- HTTP `400 Bad Request` tells the client its input is invalid.
- Run these checks before saving the item through your service layer.

## 2. What Is Rate Limiting?

A rate limiter restricts how many requests a client can make during a defined time window. It helps reduce excessive traffic and some forms of abuse.

For example, a limit of 100 requests per 15 minutes can reject excess requests with HTTP `429 Too Many Requests`.

## 3. Install the Package

Run this in your backend project folder:

```bash
npm install express-rate-limit
```

## 4. Configure the Rate Limiter

In your main Express file (`index.js`, `app.js`, or equivalent), import and configure the package:

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,                // 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});
```

Apply it to the routes that should be limited. For example, if your API routes start with `/api`:

```js
app.use("/api", limiter);
```

A simplified middleware setup might look like this:

```js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api", limiter);

// Keep your existing route registrations here.
// Example: app.use("/api/items", itemsRouter);

// Keep your existing 404 and error handlers in the correct order.
```

**Important:** Match the prefix to your actual routes. If your routes use `/items` rather than `/api/items`, choose the appropriate prefix or apply the limiter directly to the router. Keep your existing routes; do not replace them with the example.

## 5. Test It

1. Start your server:

   ```bash
   npm run dev
   ```

2. Temporarily change `limit: 100` to `limit: 3`.
3. Send four or more requests to a route covered by the limiter within the same window.
4. Confirm that requests beyond the limit receive HTTP `429`.
5. Restore the intended limit (`100`) after testing.

By default, requests are generally counted per client IP and the counter resets when the window expires. If the app is behind a proxy, configure Express `trust proxy` carefully; incorrect proxy settings can make IP-based limiting unreliable or unsafe.

## 6. Quick Reference

| Concept | Purpose |
|---|---|
| Input validation | Rejects data that does not follow your rules |
| HTTP 400 | Indicates invalid client input |
| Rate limiter | Limits requests within a time window |
| HTTP 429 | Indicates too many requests |
| `express-rate-limit` | Express middleware package for rate limiting |

## 7. Day 142 Checklist

- [ ] Understand why input validation matters.
- [ ] Validate required fields before saving data.
- [ ] Install `express-rate-limit`.
- [ ] Configure and mount the limiter on the correct routes.
- [ ] Test that excess requests receive HTTP `429`.
- [ ] Commit and push the changes.

## Git Commit

```bash
git add .
git commit -m "feat: add API rate limiter"
git push
```

**Commit 142 / 365 — 38.90% complete.**

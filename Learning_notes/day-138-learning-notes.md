# Day 138 — Sorting & CORS

**Friday, October 16**  
**Month 5: Node.js & Express — The Backend**  
**Commit 138 of 365**  
**Progress: 37.81%**

## 1. What Is Sorting?

Sorting means arranging items in an order, such as A–Z or Z–A.

Example items:

```js
[
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
]
```

You can request:

```text
GET /items?sort=name&order=asc
```

- `sort=name` means sort by the item's name.
- `order=asc` means ascending order (A–Z).
- `order=desc` means descending order (Z–A).

## 2. Add Sorting to the GET Route

In `routes/itemRoutes.js`, update your existing `router.get("/")` route. This example assumes you already have a `readItems()` function.

```js
router.get("/", (req, res) => {
    const items = readItems();

    const sort = req.query.sort;
    const order = req.query.order === "desc" ? -1 : 1;

    if (sort === "name") {
        items.sort((a, b) => {
            return a.name.localeCompare(b.name) * order;
        });
    }

    res.json(items);
});
```

### Try These Requests

- `/items` — return items without sorting.
- `/items?sort=name&order=asc` — sort names A–Z.
- `/items?sort=name&order=desc` — sort names Z–A.

`localeCompare()` compares two strings. Multiplying by `1` sorts ascending; multiplying by `-1` reverses the order.

## 3. What Is CORS?

**CORS** means Cross-Origin Resource Sharing.

A browser uses it to decide whether a web page from one origin (such as a frontend running on port `5173`) can read responses from an API on another origin (such as a backend on port `3000`).

### Enable CORS in Express

Install the package:

```bash
npm install cors
```

At the top of `index.js`:

```js
const cors = require("cors");
```

Before your routes, add:

```js
app.use(cors());
```

This allows cross-origin requests from any origin by default. For a production app, restrict access to the frontend origin you trust, for example:

```js
app.use(cors({
    origin: "http://localhost:5173"
}));
```

Change that origin to your actual frontend URL when deploying.

## Remember

- **Sorting** arranges results in an order.
- `req.query` reads options from the URL.
- `asc` means ascending; `desc` means descending.
- **CORS** controls which browser origins can read responses from your API.

## Git Commit

```bash
git add .
git commit -m "feat: add item sorting"
git push
```

**Commit 138 / 365 — 37.81% complete.**

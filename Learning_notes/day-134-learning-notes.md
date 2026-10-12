# Day 134 — Validate Create

**Monday, October 12**  
**Month 5: Node.js & Express — The Backend**  
**Commit 134 of 365**  
**Progress: 36.71%**

## 1. Read Request Bodies

Add this before your routes in `index.js`:

```js
app.use(express.json());
```

This middleware reads JSON sent by the client and makes it available as `req.body`.

Example request body:

```json
{
  "name": "Laptop"
}
```

Read the name with `req.body.name`.

## 2. Validate the Create Route

Use this in your item router for `POST /items`:

```js
router.post("/", (req, res) => {
    const { name } = req.body;

    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            message: "Name is required and must be a non-empty string"
        });
    }

    const items = readItems();

    const newItem = {
        id: items.length > 0
            ? Math.max(...items.map((item) => item.id)) + 1
            : 1,
        name: name.trim()
    };

    items.push(newItem);
    saveItems(items);

    res.status(201).json(newItem);
});
```

### What matters?

- `req.body` contains the submitted JSON data.
- `name.trim()` removes extra spaces at the beginning and end.
- Invalid input returns **400 Bad Request**.
- Successful creation returns **201 Created**.
- `return` stops the route after sending the error response.

Make sure `readItems()` and `saveItems()` are available in this router or imported from your storage module.

## 3. Test It

Valid request — `POST /items`:

```json
{
  "name": "Laptop"
}
```

Expected: `201 Created` and the new item.

Invalid request — `POST /items`:

```json
{
  "name": "   "
}
```

Expected: `400 Bad Request`.

Also test an empty body or a missing `name`.

## 4. Git Commit

```bash
git add .
git commit -m "feat: validate create item input"
git push
```

## Key Takeaway

**Read the body with `express.json()`, validate the input, and only then create the item.**

**Commit 134 / 365 — 36.71% complete.**

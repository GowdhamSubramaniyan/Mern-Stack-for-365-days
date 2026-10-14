# Day 136 — Query Filtering

**Wednesday, October 14**  
**Month 5: Node.js & Express — The Backend**  
**Commit 136 of 365**  
**Progress: 37.26%**

## 1. What Is Query Filtering?

Imagine your API has these products:

```js
const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];
```

`GET /items` returns all products.

`GET /items/search?name=laptop` searches for Laptop.

**Query filtering** means returning only items that match a search condition.

## 2. Query Strings

The part after `?` is the query string:

```text
/items/search?name=laptop
```

Read the value in Express with:

```js
req.query.name
```

For this URL, the value is `"laptop"`.

## 3. How `.filter()` Works

```js
const name = req.query.name;

const results = items.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
);
```

- `req.query.name` reads the search word.
- `.filter()` keeps matching items.
- `.toLowerCase()` ignores uppercase/lowercase differences.
- `.includes()` checks whether a name contains the search word.

Searching for `key` matches `Keyboard`.

## 4. Example Search Route

Add this to `routes/itemRoutes.js`, before `router.get("/:id", ...)`:

```js
router.get("/search", (req, res) => {
    const items = readItems();
    const name = req.query.name;

    if (typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            message: "Please provide a name to search"
        });
    }

    const results = items.filter((item) =>
        item.name.toLowerCase().includes(name.trim().toLowerCase())
    );

    res.json(results);
});
```

This uses the `readItems()` function from your existing JSON-file setup.

## 5. Try These URLs

| URL | Result |
|---|---|
| `/items/search?name=laptop` | Laptop |
| `/items/search?name=key` | Keyboard |
| `/items/search?name=mouse` | Mouse |
| `/items/search?name=phone` | `[]` (no matches) |

## 6. 404 vs Empty Search Results

- `GET /items/2`: item exists → `200 OK`.
- `GET /items/99`: item does not exist → `404 Not Found`.
- `/items/search?name=phone`: search route works but nothing matches → `200 OK` with `[]`.

A search with no matches is not automatically a 404 because the search request itself succeeded.

## Remember

- `req.params` → route parameters, such as `/items/2`.
- `req.query` → query-string values, such as `/items/search?name=laptop`.
- `.filter()` → keeps matching items from an array.

## Git Commit

```bash
git add .
git commit -m "feat: add query filtering"
git push
```

**Commit 136 / 365 — 37.26% complete.**

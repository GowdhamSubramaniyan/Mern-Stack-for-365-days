# Day 154 — Get All Items with Pagination

**Date:** Sunday, 1 November 2026  
**Journey:** Commit 154 of 365 · Month 6: MongoDB & Mongoose

**Goal:** Create a GET endpoint that retrieves items from MongoDB in pages using Mongoose.

> Builds on Day 151 Atlas connection, Day 152 `Item` model and Day 153 POST route. Adapt paths to your repository and keep your existing code.

## 1. Pagination in simple terms

Imagine your database has 100 items. Instead of returning all 100 at once, divide them into pages.

With 10 items per page:
- Page 1: items 1–10
- Page 2: items 11–20
- Page 3: items 21–30

Two Mongoose methods:

- `limit(10)` — return at most 10 documents.
- `skip(10)` — skip the first 10 documents.

Formula:

```text
skip = (page - 1) * limit
```

| Page | Calculation with limit 10 | Skip |
|---:|---|---:|
| 1 | (1 - 1) × 10 | 0 |
| 2 | (2 - 1) × 10 | 10 |
| 3 | (3 - 1) × 10 | 20 |

## 2. Add the GET controller

Open `controllers/itemController.js`. Add this function without deleting your existing `createItem` controller:

```js
const Item = require("../models/Item");

async function getAllItems(req, res, next) {
  try {
    const page = Math.max(1, Number.parseInt(req.query.page, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, Number.parseInt(req.query.limit, 10) || 10)
    );

    const skip = (page - 1) * limit;

    const items = await Item.find()
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      page,
      limit,
      data: items,
    });
  } catch (error) {
    next(error);
  }
}
```

If `Item` is already imported, do not import it twice.

Update your existing exports so both controllers are exported:

```js
module.exports = {
  createItem,
  getAllItems,
};
```

If you use ES modules, use matching `import` and `export` syntax instead.

### Understand the code

| Code | Meaning |
|---|---|
| `req.query.page` | Reads the page number from the URL |
| `req.query.limit` | Reads the requested page size |
| `skip` | Calculates how many documents to skip |
| `Item.find()` | Retrieves documents from MongoDB |
| `sort()` | Puts newest items first |
| `skip()` | Skips documents from previous pages |
| `limit()` | Restricts how many documents are returned |

The maximum page size is capped at 100. Sorting by `createdAt` and `_id` helps keep the order consistent when timestamps match.

## 3. Add the GET route

Open your existing `routes/itemRoutes.js`. Import the controller and register the route:

```js
const express = require("express");
const {
  createItem,
  getAllItems,
} = require("../controllers/itemController");

const router = express.Router();

router.get("/", getAllItems);
router.post("/", createItem);

// Keep your existing PUT and DELETE routes here.

module.exports = router;
```

If your POST route already exists, simply add:

```js
router.get("/", getAllItems);
```

Your main Express app should already have:

```js
app.use(express.json());
app.use("/items", itemRoutes);
```

JSON middleware must run before the routes. Do not duplicate existing middleware or router mounts.

## 4. Test with Postman

Start your server:

```bash
npm run dev
```

**First page:**

```http
GET http://localhost:3000/items?page=1&limit=5
```

**Second page:**

```http
GET http://localhost:3000/items?page=2&limit=5
```

**Third page:**

```http
GET http://localhost:3000/items?page=3&limit=5
```

**Default pagination:**

```http
GET http://localhost:3000/items
```

Defaults to page 1 and limit 10.

Example response shape:

```json
{
  "success": true,
  "page": 1,
  "limit": 5,
  "data": [
    {
      "_id": "generated-id",
      "name": "Keyboard",
      "price": 40
    }
  ]
}
```

This is illustrative; your actual response depends on the documents in Atlas. If your database has only three documents, page 2 with a limit of five returns an empty array. That is expected.

## 5. Verify with MongoDB Compass

1. Open MongoDB Compass and connect to your Atlas cluster.
2. Select your database.
3. Open the `items` collection.
4. Confirm that the documents returned by your API exist.

Compass lets you inspect the stored data. Your Express endpoint returns the paginated response.

## 6. Common problems

| Problem | Check |
|---|---|
| `Item.find is not a function` | Model import/export |
| Empty `data` array | Whether documents exist and requested page is in range |
| Same items on every page | `skip` calculation |
| GET returns 404 | Router mount path and route registration |
| Database connection error | Day 151 Atlas connection |

## 7. Commit

```bash
git status
git add .
git commit -m "feat: add paginated get all items"
git push
```

## 8. Completion checklist

- [ ] I understand pagination.
- [ ] I understand `limit()` and `skip()`.
- [ ] I understand `skip = (page - 1) * limit`.
- [ ] I added the `getAllItems` controller.
- [ ] I added GET `/items`.
- [ ] I tested page 1 and page 2 in Postman.
- [ ] I checked documents in MongoDB Compass.
- [ ] I committed and pushed my changes.

**Today's scope:** retrieve all items with basic pagination. Do not add filtering or extra query features yet.

Next: retrieve one item by MongoDB ID using Mongoose `findById()`.

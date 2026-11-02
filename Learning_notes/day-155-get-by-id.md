# Day 155 — Get Item by ID

**Date:** Monday, 2 November 2026  
**Journey:** Commit 155 of 365 · Month 6: MongoDB & Mongoose

**Goal:** Create a GET endpoint that retrieves one item from MongoDB using its `_id`.

> Builds on Day 151 Atlas connection, Day 152 `Item` model, Day 153 create route and Day 154 paginated GET route. Adapt paths to your project and keep existing code.

## 1. Connecting with Mongoose

Your Express application connects to MongoDB through Mongoose. Your Day 151 startup code should already connect before the server accepts requests:

```js
await mongoose.connect(process.env.MONGODB_URI);
```

The request flow is:

```text
Postman → Express route → Controller → Mongoose model → MongoDB Atlas
```

You do not need to open a new database connection inside every controller.

## 2. Understand MongoDB `_id`

Each MongoDB document has a unique `_id`, usually generated automatically.

```json
{
  "_id": "672a1f2b8c4d9e001234abcd",
  "name": "Keyboard",
  "price": 40
}
```

You can use this ID in a URL to retrieve one specific item:

```http
GET /items/672a1f2b8c4d9e001234abcd
```

The ID above is illustrative. Use an actual `_id` from your collection.

## 3. Add the controller

Open your existing `controllers/itemController.js`. Add this function without deleting `createItem` or `getAllItems`:

```js
const mongoose = require("mongoose");
const Item = require("../models/Item");

async function getItemById(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid item ID",
      });
    }

    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
}
```

If `mongoose` or `Item` is already imported in this file, reuse the existing import instead of adding a duplicate.

### What the code does

| Code | Purpose |
|---|---|
| `req.params.id` | Reads the ID from the URL |
| `mongoose.isValidObjectId(id)` | Checks whether the ID has valid ObjectId syntax |
| `Item.findById(id)` | Searches MongoDB for the document |
| `if (!item)` | Checks whether no matching document exists |
| `200` | Item found |
| `400` | Invalid ID format |
| `404` | Valid ID format, but no matching item |
| `next(error)` | Sends unexpected errors to existing error middleware |

## 4. Export the controller

Add `getItemById` to your existing exports:

```js
module.exports = {
  createItem,
  getAllItems,
  getItemById,
};
```

Keep all existing exports. If your project uses ES modules, use matching `import` and `export` syntax.

## 5. Add the route

Open your existing `routes/itemRoutes.js`. Add the controller to the imports and register the route:

```js
const express = require("express");

const {
  createItem,
  getAllItems,
  getItemById,
} = require("../controllers/itemController");

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", createItem);

// Keep your existing PUT and DELETE routes.

module.exports = router;
```

If your other routes are already registered, you only need:

```js
router.get("/:id", getItemById);
```

If the router is mounted at `/items`, the full endpoint is:

```text
GET http://localhost:3000/items/YOUR_REAL_ITEM_ID
```

Register more-specific routes (for example `/search`) before `/:id` if you add them later.

## 6. Test with Postman

Start your server:

```bash
npm run dev
```

### A. Existing item — expected `200 OK`

1. Open Atlas or MongoDB Compass.
2. Open your `items` collection.
3. Copy a real document `_id`.
4. Send:

```http
GET http://localhost:3000/items/YOUR_REAL_ITEM_ID
```

Example response shape:

```json
{
  "success": true,
  "data": {
    "_id": "your-real-item-id",
    "name": "Keyboard",
    "price": 40
  }
}
```

The actual fields depend on your schema and document.

### B. Invalid ID — expected `400 Bad Request`

```http
GET http://localhost:3000/items/not-a-valid-id
```

### C. Valid but nonexistent ID — expected `404 Not Found`

```http
GET http://localhost:3000/items/507f1f77bcf86cd799439011
```

This is a syntactically valid example ObjectId; it may not exist in your database.

## 7. Common problems

| Problem | Check |
|---|---|
| `CastError` | Validate the ID before querying |
| Always returns 404 | Confirm the ID exists in `items` |
| `Item.findById is not a function` | Check model import/export |
| Route returns 404 unexpectedly | Check router mount path and `/:id` |
| `req.params.id` is undefined | Confirm the route uses `/:id` |
| Database connection error | Check the Day 151 Atlas connection |

## 8. Commit

```bash
git status
git add .
git commit -m "feat: get item by id from MongoDB"
git push
```

Make sure `.env` and credentials are not staged.

## 9. Completion checklist

- [ ] I understand how Express, Mongoose and Atlas connect.
- [ ] I understand MongoDB `_id`.
- [ ] I added the `getItemById` controller.
- [ ] I used `Item.findById()`.
- [ ] Invalid IDs return `400`.
- [ ] Missing documents return `404`.
- [ ] I added `GET /items/:id`.
- [ ] I tested a real ID in Postman.
- [ ] I committed and pushed safely.

**Today's scope:** retrieve one item by its MongoDB ID. Do not add update or delete logic today.

Next: update an existing document using Mongoose.

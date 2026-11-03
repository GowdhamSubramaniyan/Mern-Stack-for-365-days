# Day 156 — Update an Item

**Date:** Tuesday, 3 November 2026  
**Journey:** Commit 156 of 365 · Month 6: MongoDB & Mongoose

**Goal:** Update an existing MongoDB item using its ID and your Mongoose `Item` model.

> Reuse your Day 151 Atlas connection and Day 152 `Item` model. Keep your existing create, read and other routes.

## 1. Learn: Schemas and models

A **schema** defines document fields, data types and validation rules. A **model** is created from a schema and provides methods for working with a MongoDB collection.

```js
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
```

You already created this model on Day 152. Reuse it; do not create a second `Item` model.

## 2. Understand today's update operation

The client sends an item ID in the URL and the new values in the request body.

```text
PUT /items/:id
      ↓
Read ID and request body
      ↓
Validate ID
      ↓
Update document in MongoDB
      ↓
Return updated document
```

The Mongoose method for today is:

```js
Item.findByIdAndUpdate(id, updateData, options);
```

- `new: true` returns the updated document.
- `runValidators: true` runs schema validation on the update.

## 3. Add the update controller

Open your existing `controllers/itemController.js`. Add this function without deleting your other controllers:

```js
const mongoose = require("mongoose");
const Item = require("../models/Item");

async function updateItem(req, res, next) {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid item ID",
      });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: updatedItem,
    });
  } catch (error) {
    next(error);
  }
}
```

If `mongoose` or `Item` is already imported, reuse the existing import rather than duplicating it.

### Understand the code

| Code | Purpose |
|---|---|
| `req.params.id` | Reads the item ID from the URL |
| `req.body` | Reads the new values from the request |
| `isValidObjectId()` | Checks the ID format |
| `findByIdAndUpdate()` | Finds and updates the document |
| `new: true` | Returns the updated version |
| `runValidators: true` | Applies schema validation |
| `if (!updatedItem)` | Handles an ID with no matching document |

Status codes:
- `200 OK` — item updated.
- `400 Bad Request` — invalid ID or validation failure.
- `404 Not Found` — valid ID but no matching document.

## 4. Export the controller

Add `updateItem` to your existing exports. Keep all previous exports:

```js
module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
};
```

Use your project's existing ES module syntax instead if it uses `import` and `export`.

## 5. Add the PUT route

In your existing `routes/itemRoutes.js`, import `updateItem` and add:

```js
router.put("/:id", updateItem);
```

For example:

```js
router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);

// Keep your existing DELETE route.
```

Do not remove existing routes. If your router is mounted at `/items`, the endpoint is:

```text
PUT http://localhost:3000/items/YOUR_ITEM_ID
```

## 6. Test with Postman

Start the server:

```bash
npm run dev
```

### A. Update an existing item

1. Open Atlas or MongoDB Compass.
2. Open the `items` collection and copy a real document `_id`.
3. In Postman, select **PUT**.
4. Use this URL:

```http
http://localhost:3000/items/YOUR_REAL_ITEM_ID
```

5. Select **Body → raw → JSON** and send:

```json
{
  "name": "Updated Mechanical Keyboard",
  "description": "Updated description",
  "price": 75,
  "inStock": true
}
```

Expected status: `200 OK`.

Example response shape:

```json
{
  "success": true,
  "data": {
    "_id": "your-real-item-id",
    "name": "Updated Mechanical Keyboard",
    "description": "Updated description",
    "price": 75,
    "inStock": true
  }
}
```

The actual response contains your document's real ID and schema fields.

### B. Invalid ID

```http
PUT http://localhost:3000/items/not-an-id
```

Expected: `400 Bad Request`.

### C. Valid but nonexistent ID

```http
PUT http://localhost:3000/items/507f1f77bcf86cd799439011
```

Expected: `404 Not Found` if no document has that ID.

### D. Test schema validation

Send a negative price:

```json
{
  "price": -10
}
```

With `runValidators: true`, the schema's minimum price rule should reject it. Your error middleware should return a suitable 4xx response.

**Note:** `findByIdAndUpdate()` updates the supplied fields; it does not perform a strict full-document replacement. This is sufficient for today's beginner task, but a production PUT contract may require all fields to be supplied and validated.

## 7. Verify in MongoDB Compass

1. Open the `items` collection.
2. Find the document you updated.
3. Confirm its values changed.
4. Check that `updatedAt` reflects the update.

## 8. Common problems

| Problem | Check |
|---|---|
| `updateItem is not defined` | Controller import/export |
| Always returns 404 | Confirm the item ID exists |
| Invalid ID causes CastError | Validate ID before querying |
| Invalid price is accepted | Set `runValidators: true` |
| Old values are returned | Set `new: true` |
| `req.body` is undefined | `express.json()` must run before routes |
| Database connection error | Check Day 151 Atlas connection |

## 9. Commit your work

```bash
git status
git add .
git commit -m "feat: update items in MongoDB"
git push
```

Ensure `.env` and database credentials are not staged.

## 10. Day 156 completion checklist

- [ ] I understand schema vs model.
- [ ] I reused my existing `Item` model.
- [ ] I created the `updateItem` controller.
- [ ] I used `findByIdAndUpdate()`.
- [ ] I used `new: true` and `runValidators: true`.
- [ ] I added PUT `/items/:id`.
- [ ] I tested a successful update in Postman.
- [ ] I tested invalid and nonexistent IDs.
- [ ] I verified the updated document in Compass or Atlas.
- [ ] I committed and pushed safely.

**Today's scope:** update an existing MongoDB document by ID. Do not implement delete functionality today.

Next: delete an item from MongoDB using its ID.

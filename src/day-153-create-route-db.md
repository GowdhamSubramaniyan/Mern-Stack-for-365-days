# Day 153 — Create a Database-backed POST Route

**Date:** Saturday, 31 October 2026  
**Journey:** Commit 153 of 365 · Month 6: MongoDB & Mongoose

**Goal:** Add a POST `/items` route that saves an item to MongoDB using your existing Mongoose `Item` model.

> Reuse your Day 151 Atlas connection and Day 152 model. Adapt filenames to your repository and preserve existing routes and middleware.

## 1. Documents and collections

MongoDB organises data like this:

```text
Database
└── items (collection)
    ├── document 1
    ├── document 2
    └── document 3
```

- **Database:** contains collections.
- **Collection:** groups related documents, broadly similar to a SQL table.
- **Document:** one record, broadly similar to a SQL row.
- **Field:** a named value in a document.
- **Schema:** defines document structure and validation rules.
- **Model:** Mongoose interface used to create, read, update and delete documents.

Example document:

```json
{
  "_id": "generated-id",
  "name": "Keyboard",
  "description": "Mechanical keyboard",
  "price": 40,
  "inStock": true
}
```

MongoDB generates `_id`. Your Day 152 schema enables timestamps, so Mongoose also adds `createdAt` and `updatedAt`.

## 2. Confirm your Day 152 model

You should already have `models/Item.js`. Do not create a duplicate model. A CommonJS example:

```js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Item name is required"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "Item price is required"],
      min: [0, "Price cannot be negative"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
```

Keep your own schema if its fields differ. Match your POST body to it.

## 3. Create the controller

Create or update `controllers/itemController.js`:

```js
const Item = require("../models/Item");

async function createItem(req, res, next) {
  try {
    const { name, description, price, inStock } = req.body;

    const item = await Item.create({
      name,
      description,
      price,
      inStock,
    });

    return res.status(201).json({
      success: true,
      data: item,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { createItem };
```

`Item.create()` validates the data against the schema and saves a document to MongoDB. `await` waits for the database operation. `next(error)` forwards failures to your existing Express error middleware.

If your project uses ES modules, convert `require`/`module.exports` to `import`/`export`.

## 4. Add the route

In your existing `routes/itemRoutes.js` (or equivalent):

```js
const express = require("express");
const { createItem } = require("../controllers/itemController");

const router = express.Router();

router.post("/", createItem);

module.exports = router;
```

Keep existing GET, PUT and DELETE routes. Add this POST route rather than replacing the router.

Ensure your main Express app has JSON parsing and mounts the router:

```js
app.use(express.json());
app.use("/items", itemRoutes);
```

`express.json()` must run before the routes so `req.body` is available. If these lines already exist, do not duplicate them.

## 5. Test with Postman

Request:

```http
POST http://localhost:3000/items
Content-Type: application/json
```

Choose **Body → raw → JSON**:

```json
{
  "name": "Mechanical Keyboard",
  "description": "RGB mechanical keyboard",
  "price": 65,
  "inStock": true
}
```

Expected status:

```text
201 Created
```

Example response shape:

```json
{
  "success": true,
  "data": {
    "_id": "generated-id",
    "name": "Mechanical Keyboard",
    "description": "RGB mechanical keyboard",
    "price": 65,
    "inStock": true,
    "createdAt": "generated-date",
    "updatedAt": "generated-date"
  }
}
```

The actual ID and timestamps are generated automatically.

## 6. Test validation

| Test | Input | Expected result |
|---|---|---|
| Valid item | All required fields valid | `201 Created` |
| Missing name | Omit `name` | Validation error |
| Negative price | `price: -5` | Validation error |
| Wrong price type | `price: "expensive"` | Cast/validation error |
| Malformed JSON | Invalid JSON body | `400 Bad Request` |

Your existing error middleware may format responses differently. Ensure validation and cast errors return a suitable 4xx response, not a generic success or unhandled crash.

If your current error handler sends every error as `500`, handle Mongoose errors before its generic response:

```js
if (err.name === "ValidationError" || err.name === "CastError") {
  return res.status(400).json({
    success: false,
    message: err.message,
  });
}
```

Integrate this into your existing error handler; do not create a duplicate global handler.

## 7. Verify the document in Atlas

1. Sign in to [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Open your cluster and choose **Browse Collections**.
3. Select your database.
4. Open the `items` collection.
5. Confirm the new document appears.

Mongoose normally creates the collection when the first document is saved.

## 8. Integration checks

- Day 151 database connection succeeds before the server accepts requests.
- `express.json()` runs before the router.
- Router is mounted at `/items`.
- Controller imports the correct `Item` model path.
- This POST route writes to MongoDB, not the old JSON file.
- Do not save the same item to both JSON and MongoDB.
- Keep other CRUD routes unchanged for now unless specifically migrating them.
- `.env` and credentials are not committed.

## 9. Commit

```bash
git status
git add .
git commit -m "feat: create items in MongoDB"
git push
```

Check that `.env` is ignored and no secrets are staged before committing.

## 10. Completion checklist

- [ ] I understand databases, collections, documents and fields.
- [ ] My Atlas connection from Day 151 works.
- [ ] I reused the Day 152 `Item` model.
- [ ] I created a database-backed POST controller.
- [ ] I added the POST route to my existing router.
- [ ] JSON parsing runs before the route.
- [ ] Postman returns `201 Created` for valid data.
- [ ] Invalid data is handled correctly.
- [ ] I can see the saved document in Atlas.
- [ ] I committed and pushed safely.

**Today's scope:** implement only `POST /items` using MongoDB. The next step is reading documents with a GET route.

Reference: [Mongoose Model API](https://mongoosejs.com/docs/models.html).

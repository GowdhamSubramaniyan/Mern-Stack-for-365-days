# Day 152 — Define Your First Mongoose Model

**Date:** Friday, 30 October 2026  
**Journey:** Commit 152 of 365  
**Month 6:** MongoDB & Mongoose

**Goal:** Define and test a Mongoose `Item` model for your existing Express REST API.

> Adapt filenames and fields to your repository. Reuse your Day 151 Atlas cluster and connection string. Do not replace working routes unnecessarily.

## 1. MongoDB Atlas recap

MongoDB Atlas is MongoDB's managed cloud database service. A MongoDB database contains collections; collections contain documents; documents contain fields.

```text
Database
└── items (collection)
    ├── document 1
    ├── document 2
    └── document 3
```

If you still need an Atlas cluster, visit [MongoDB Atlas](https://www.mongodb.com/atlas), create a project and an available free-tier cluster, create a database user, allow your development IP under Network Access, then choose **Connect → Drivers → Node.js** to obtain the URI. Keep the URI in `.env`, not in source code.

## 2. Schema vs model

- **Schema:** describes document fields, types, defaults and validation rules.
- **Model:** a constructor/API created from a schema; use it to create, query, update and delete documents.
- **Document:** one individual record in a collection.

Example document:

```json
{
  "name": "Keyboard",
  "description": "Mechanical keyboard",
  "price": 40,
  "inStock": true
}
```

## 3. Suggested project structure

Adapt this to your existing structure; do not duplicate folders you already have.

```text
your-project/
├── models/
│   └── Item.js
├── routes/
├── controllers/
├── app.js
├── index.js
├── .env
└── package.json
```

Create a `models` folder if needed.

## 4. Create `models/Item.js`

Use this CommonJS version if your project uses `require()` and `module.exports`:

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
  {
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
```

If your project uses ES modules, use `import mongoose from "mongoose"` and `export default Item` instead. Do not mix the two module systems.

### Understand the schema

- `type` defines the field's data type.
- `required` prevents a missing value.
- `trim` removes whitespace around strings.
- `default` supplies a value when one is not provided.
- `min` prevents negative prices.
- `timestamps: true` automatically adds `createdAt` and `updatedAt`.

`mongoose.model("Item", itemSchema)` creates the model. Mongoose normally maps `Item` to the MongoDB collection `items`.

## 5. Test the model

Create a temporary `test-model.js` in the project root. This example assumes CommonJS and that Day 151 configured `MONGODB_URI` in `.env`.

```js
require("dotenv").config();

const mongoose = require("mongoose");
const Item = require("./models/Item");

async function testModel() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    const testItem = await Item.create({
      name: "Test Keyboard",
      description: "First Mongoose model test",
      price: 40,
      inStock: true,
    });

    console.log("Item created:", testItem);

    await Item.deleteOne({ _id: testItem._id });
    console.log("Test item deleted");
  } catch (error) {
    console.error("Model test failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
}

testModel();
```

Run:

```bash
node test-model.js
```

Expected sequence:
1. MongoDB connects.
2. A test item is created and printed.
3. The test item is deleted.
4. Mongoose disconnects.

This script is for local verification, not a public API route. Remove it after testing or keep it as an intentional development test.

## 6. Example stored document

A created document will contain fields similar to:

```json
{
  "_id": "generated-mongodb-object-id",
  "name": "Test Keyboard",
  "description": "First Mongoose model test",
  "price": 40,
  "inStock": true,
  "createdAt": "generated-date",
  "updatedAt": "generated-date"
}
```

MongoDB generates `_id`; Mongoose adds the timestamp fields because `timestamps` is enabled. These example values are illustrative.

## 7. Common errors

| Error | What to check |
|---|---|
| Cannot find module | Model file name and relative import path |
| Model is undefined | Export/import syntax |
| ValidationError | Required fields and data types |
| CastError | Value does not match the schema type |
| Connection timeout | Atlas URI and Network Access |
| Duplicate model compilation | Avoid registering the same model repeatedly |

## 8. Commit

Check your changes:

```bash
git status
```

Make sure `.env` is ignored and credentials are not staged. Then:

```bash
git add .
git commit -m "feat: define first Mongoose Item model"
git push
```

## 9. Completion checklist

- [ ] I understand schema vs model vs document.
- [ ] I reused my Atlas connection from Day 151.
- [ ] I created `models/Item.js`.
- [ ] I defined `name`, `description`, `price` and `inStock`.
- [ ] I added validation and timestamps.
- [ ] I tested creating and deleting a document.
- [ ] I kept credentials out of Git.
- [ ] I committed and pushed my changes.

**Today's scope:** define and test the model. Do not migrate every CRUD route today. Next, use the `Item` model in Express controllers so the API reads and writes MongoDB documents instead of the JSON file.

Reference: [Mongoose documentation](https://mongoosejs.com/docs/).

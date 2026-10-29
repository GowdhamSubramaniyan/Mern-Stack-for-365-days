# Day 151 — Add Mongoose and Connect to MongoDB Atlas

**Date:** Thursday, 29 October 2026  
**Journey:** Commit 151 of 365  
**Month 6:** MongoDB & Mongoose

Goal: connect your existing Express REST API to MongoDB Atlas. This is a practical code reference, not just learning notes. Adapt filenames to your project and preserve your existing routes and middleware.

## 1. SQL vs NoSQL quick reference

| SQL | MongoDB (NoSQL) |
|---|---|
| Tables | Collections |
| Rows | Documents |
| Columns | Fields |
| Often queried with SQL | Uses MongoDB's query API |

MongoDB stores JSON-like documents as BSON. A collection groups documents, and each document represents a record.

Example document:

```json
{
  "name": "Keyboard",
  "price": 40,
  "inStock": true
}
```

**Mongoose** is a Node.js library that provides schemas, models, validation, and convenient database operations.

## 2. Set up MongoDB Atlas

1. Sign in at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a project and cluster (use an available free option if offered).
3. Create a **database user** with a strong password. This is separate from your Atlas website login.
4. In Network Access, allow your current development IP address.
5. Choose **Connect → Drivers → Node.js** and copy the connection string.

It will resemble:

```text
mongodb+srv://<username>:<password>@<your-real-cluster-host>/<database-name>
```

Use the exact URI Atlas gives you. Replace placeholders and URL-encode special characters in the password when required.

**Never commit your real connection string or password to GitHub.**

## 3. Install dependencies

Run in the root of your existing API project:

```bash
npm install mongoose
```

If `dotenv` is not already installed:

```bash
npm install dotenv
```

## 4. Configure `.env`

Create or update `.env` in the project root:

```env
PORT=3000
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_REAL_CLUSTER_HOST/YOUR_DATABASE_NAME
```

Replace the example URI with the real Atlas URI.

Make sure `.gitignore` contains:

```gitignore
node_modules/
.env
```

If these files already exist, update them rather than creating duplicates.

## 5. Connect your Express app

### If your Express app is exported from `app.js`

In your server entry file (`index.js` or `server.js`), use this pattern and adjust the import path:

```js
require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app"); // Adjust to your project structure

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start application:", error.message);
    process.exit(1);
  }
}

startServer();
```

### If your Express app is defined in the same file

Keep your existing `express()` setup, middleware, and route registrations. Import Mongoose and dotenv near the top, then put the connection inside your existing server startup flow:

```js
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT || 3000, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.error("Failed to start application:", error.message);
    process.exit(1);
  }
}

startServer();
```

This second example assumes `app` and `mongoose` are already defined.

**Integration notes**
- Keep existing Helmet, Morgan, rate limiting, routers, error handlers, and `/health` route.
- There must be only one `app.listen()` call.
- Await `mongoose.connect()` before starting the server.
- Match the project's CommonJS or ES module syntax.
- If CRUD routes still read/write a JSON file, leave them alone for today's task. Migrate them to Mongoose in a later task.

## 6. Run and test

Use your existing development script, for example:

```bash
npm run dev
```

Expected terminal messages:

```text
MongoDB connected successfully
Server running on port 3000
```

Test your existing health endpoint in Postman or a browser:

```http
GET http://localhost:3000/health
```

Expected status: `200 OK`, assuming your route is configured to return it. A successful health response alone does not prove database connectivity; confirm the terminal connection message too.

## 7. Common errors

| Error | Check |
|---|---|
| `MONGODB_URI is missing` | `.env` location, spelling, and dotenv setup |
| Authentication failed | Atlas database username/password |
| Server selection timeout | Atlas Network Access, cluster status, URI and internet connection |
| `ENOTFOUND` | Cluster hostname in the URI |
| `mongoose.connect is not a function` | Mongoose import |
| Server starts before connection | Await connection before `app.listen()` |

Reference: [Mongoose documentation](https://mongoosejs.com/docs/).

## 8. Commit

Review your files:

```bash
git status
```

Ensure `.env` is ignored and no credentials are staged. Then:

```bash
git add .
git commit -m "feat: connect Express API to MongoDB Atlas"
git push
```

If credentials were exposed, rotate the password in Atlas. Removing a secret from the latest commit alone may not remove it from Git history.

## 9. Completion checklist

- [ ] I understand SQL tables vs MongoDB collections/documents.
- [ ] I created an Atlas cluster and database user.
- [ ] I installed Mongoose.
- [ ] I added `MONGODB_URI` to `.env`.
- [ ] `.env` is listed in `.gitignore`.
- [ ] Express connects to Atlas before accepting requests.
- [ ] The existing `/health` route still works.
- [ ] No secrets are staged or committed.
- [ ] I committed and pushed my changes.

**Today's scope:** establish the connection only. Next, define a Mongoose schema and model for the existing `Item` resource, then migrate CRUD operations away from JSON-file persistence.

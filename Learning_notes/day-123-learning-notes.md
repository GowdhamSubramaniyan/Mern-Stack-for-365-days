# Day 123 — npm Scripts, Nodemon & GET All Items

**Month 5: Node.js & Express — The Backend**  
**Commit 123 of 365**  
**Progress: 33.70%**

## Today's Task

### Learn — 30 min
- npm scripts
- nodemon
- Development workflow

### Build & Commit — ~30 min
- Create a `GET /items` endpoint
- Return all items as JSON
- Run the server with nodemon
- Commit and push to GitHub

## 1. npm Scripts

npm scripts are shortcuts for commands we run often.

Instead of typing:

```bash
node index.js
```

we can add a script to `package.json`:

```json
"scripts": {
  "start": "node index.js"
}
```

Then run:

```bash
npm start
```

npm reads the `scripts` section and runs the assigned command.

## 2. Nodemon

Normally, after changing backend code, we have to stop and restart the server. Nodemon automatically restarts the Node.js server when it detects a file change.

Install it with:

```bash
npm install --save-dev nodemon
```

Then add:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

Run development mode with:

```bash
npm run dev
```

`start` runs the normal Node server. `dev` runs it through Nodemon.

## 3. GET Requests

A GET request is used when the client wants to retrieve data.

```text
Browser / Client
      ↓
GET /items
      ↓
Express Server
      ↓
Items data
      ↓
JSON response
```

In Express:

```js
app.get("/items", (req, res) => {
    res.json(items);
});
```

This means: when someone sends a GET request to `/items`, return the items as JSON.

## 4. Today's Project

```text
day-123-api/
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## 5. Complete `index.js`

```js
const express = require("express");

const app = express();

const PORT = 3000;

const items = [
    {
        id: 1,
        name: "Laptop"
    },
    {
        id: 2,
        name: "Keyboard"
    },
    {
        id: 3,
        name: "Mouse"
    }
];

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.get("/items", (req, res) => {
    res.json(items);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## 6. `package.json`

```json
{
  "name": "day-123-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

After installing Express and Nodemon, npm will also include their dependency information.

## 7. Understanding the Code

### Import Express

```js
const express = require("express");
```

Loads Express into the Node.js application.

### Create the Express app

```js
const app = express();
```

Creates the Express application/server.

### Choose a port

```js
const PORT = 3000;
```

The server runs at:

```text
http://localhost:3000
```

### Temporary data

```js
const items = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Mouse" }
];
```

For now the data is stored inside JavaScript. Later this will be replaced with MongoDB.

## 8. Health Endpoint

```js
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
```

Visit:

```text
http://localhost:3000/health
```

Response:

```json
{
  "status": "ok"
}
```

## 9. GET All Items

The main task is:

```js
app.get("/items", (req, res) => {
    res.json(items);
});
```

When the client requests:

```text
GET /items
```

Express sends the complete `items` array as JSON.

Expected response:

```json
[
  {
    "id": 1,
    "name": "Laptop"
  },
  {
    "id": 2,
    "name": "Keyboard"
  },
  {
    "id": 3,
    "name": "Mouse"
  }
]
```

## 10. Start the Server

Install Express if needed:

```bash
npm install express
```

Install Nodemon:

```bash
npm install --save-dev nodemon
```

Start development mode:

```bash
npm run dev
```

You should see something similar to:

```text
Server running on port 3000
```

## 11. Test the API

Open:

```text
http://localhost:3000/health
```

Then:

```text
http://localhost:3000/items
```

You should see the three items as JSON.

You can also use:

```bash
curl http://localhost:3000/items
```

## 12. Bigger Picture

Today's backend:

```text
Client
  ↓
GET /items
  ↓
Express
  ↓
items array
  ↓
JSON response
```

Later with MongoDB:

```text
Client
  ↓
GET /items
  ↓
Express
  ↓
MongoDB
  ↓
Items collection
  ↓
JSON response
  ↓
Client
```

This is one of the basic patterns behind a MERN application.

## 13. Important Concepts

**npm scripts:** shortcuts for common commands.

**Nodemon:** automatically restarts the development server after file changes.

**GET:** HTTP method used to retrieve data.

**Endpoint:** a backend URL that provides a specific operation.

**`res.json()`:** sends data back to the client as JSON.

**In-memory data:** temporary data stored in the running JavaScript process. It disappears when the server stops.

## 14. Git Commit

```bash
git add .
git commit -m "feat: add get all items endpoint"
git push
```

## 15. Checklist

- [ ] Understand npm scripts
- [ ] Install Nodemon
- [ ] Understand development dependencies
- [ ] Add `start` script
- [ ] Add `dev` script
- [ ] Understand GET requests
- [ ] Create `/items` endpoint
- [ ] Return items using `res.json()`
- [ ] Run server using `npm run dev`
- [ ] Test `/health`
- [ ] Test `/items`
- [ ] Commit changes
- [ ] Push to GitHub

## Day 123 Summary

Today I learned how npm scripts make common commands easier to run and how Nodemon automatically restarts my Node.js server when I change my code.

I also built my first collection-style API endpoint:

```text
GET /items
```

The endpoint returns all items as JSON. This is an important step toward building a real backend because the temporary array will later be replaced with data stored in MongoDB.

**Commit 123 of 365 — 33.70% complete.**

```text
Node.js
   ↓
Express
   ↓
Routes
   ↓
GET /items
   ↓
JSON response
   ↓
Client
```

# Day 140 — CORS Setup & Controllers

**Sunday, October 18**  
**Month 5: Node.js & Express — The Backend**  
**Commit 140 of 365**  
**Progress: 38.36%**

## 1. What Is a Controller?

A controller contains the logic for handling a request.

- **Route:** decides which function should run.
- **Controller:** does the actual work.

Example structure:

```text
controllers/
└── itemController.js
routes/
└── itemRoutes.js
```

### `controllers/itemController.js`

```js
const getItems = (req, res) => {
    res.json({ message: "Here are the items" });
};

module.exports = { getItems };
```

### `routes/itemRoutes.js`

```js
const express = require("express");
const router = express.Router();

const { getItems } = require("../controllers/itemController");

router.get("/", getItems);

module.exports = router;
```

The route calls `getItems`; the controller sends the response.

## 2. What Is CORS?

**CORS** means Cross-Origin Resource Sharing.

Your frontend might run at `http://localhost:5173` while your backend runs at `http://localhost:3000`. Different ports mean different origins.

A browser may block the frontend from reading the backend's response unless the backend allows that origin through CORS.

## 3. Set Up CORS in Express

Install the package:

```bash
npm install cors
```

In `index.js`, add:

```js
const cors = require("cors");
```

Before your routes, configure CORS:

```js
app.use(cors({
    origin: "http://localhost:5173"
}));
```

Replace the origin with your actual frontend URL if it differs. For production, allow only frontend origins you trust. CORS is a browser access policy, not authentication.

## 4. Remember

| Concept | Meaning |
|---|---|
| Controller | Contains request-handling logic |
| Router | Organises related routes |
| CORS | Controls which browser origins can read API responses |
| `app.use(cors(...))` | Enables CORS for the configured origin |

## Git Commit

```bash
git add .
git commit -m "feat: configure CORS"
git push
```

**Commit 140 / 365 — 38.36% complete.**

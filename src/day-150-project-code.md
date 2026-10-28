# Day 150 — Project 5: REST API v1.0 (Code Materials)

Use these code/config examples to polish and release your existing Express API. Adapt filenames and route prefixes to your project; do not replace working routes or add a second `app.listen()`.

## 1. Suggested project structure

```text
rest-api/
├── controllers/
├── routes/
├── services/
├── middleware/
├── data/
├── API.md
├── README.md
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## 2. `package.json` scripts

Merge into your existing scripts and change the entry filename if needed:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

## 3. Express deployment setup

Merge this with your existing main file. Keep one instance of each middleware and preserve your existing routes and error handlers.

```js
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// Change /api to match your actual route prefix.
app.use("/api", apiLimiter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Preserve your existing routes here.
// Example: app.use("/api/items", itemsRouter);

// Keep 404 and error handlers after routes.

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API listening on port ${PORT}`);
});
```

If your project already configures Helmet, Morgan, rate limiting, or `/health`, keep your working implementation instead of duplicating it.

## 4. `.gitignore`

```gitignore
node_modules/
.env
.DS_Store
npm-debug.log*
```

Never commit real secrets. Configure required environment variables in Render's Environment settings. An optional committed `.env.example` should contain placeholders only.

## 5. `API.md` template

Replace example routes and responses with your actual implementation.

```md
# REST API

Base URL: `https://YOUR-SERVICE.onrender.com`

## Health check
`GET /health`

Success (`200 OK`):
```json
{ "status": "ok" }
```

## Get all items
`GET /api/items`

## Get one item
`GET /api/items/:id`

## Create an item
`POST /api/items`
Content-Type: `application/json`

Example body:
```json
{
  "name": "Notebook",
  "price": 5
}
```

## Update an item
`PUT /api/items/:id`
Content-Type: `application/json`

Example body:
```json
{
  "name": "Updated Notebook",
  "price": 7
}
```

## Delete an item
`DELETE /api/items/:id`

## Common status codes
- `200` — Request succeeded.
- `201` — Resource created.
- `400` — Invalid request.
- `404` — Resource not found.
- `429` — Rate limit exceeded.
- `500` — Unexpected server error.
```

## 6. `README.md` release section

Update the URL and links to match your project:

```md
## REST API v1.0

**Live API:** https://YOUR-SERVICE.onrender.com

### Run locally

```bash
npm install
npm run dev
```

### Documentation
- [API documentation](API.md)
- [Postman collection](./postman/collection.json)
```

Only link the Postman collection if you've saved it at that path, and only list features that are implemented.

## 7. Render settings

In your Render Web Service, verify:

- Runtime: Node
- Build command: `npm install` (or `npm ci` if `package-lock.json` is committed)
- Start command: `npm start`
- Root directory: set to the backend folder if this is a monorepo
- Environment variables: add all required values

Use commands that match your package manager. Review Render logs after deployment.

## 8. Test the deployed API

Replace the host and paths with your real values:

```http
GET https://YOUR-SERVICE.onrender.com/health
GET https://YOUR-SERVICE.onrender.com/api/items
GET https://YOUR-SERVICE.onrender.com/api/items/1
```

Also test POST, PUT, DELETE, invalid IDs, invalid request bodies, filtering/pagination if implemented, and rate limiting. Use a disposable test item for DELETE.

## 9. Git release commands

```bash
git status
git diff
git add .
git commit -m "release: REST API v1.0"
git push
git tag -a v1.0 -m "REST API v1.0"
git push origin v1.0
```

If your changes are already committed, don't create an empty commit. Tag the correct release commit.

## 10. Release checklist

- [ ] `npm start` works locally.
- [ ] Server uses `process.env.PORT`.
- [ ] CRUD endpoints and error cases tested.
- [ ] Middleware configured once and in the correct order.
- [ ] Render deployment and live health check work.
- [ ] `API.md` and `README.md` show the actual URL and routes.
- [ ] Secrets are not committed.
- [ ] Release commit and `v1.0` tag are pushed.

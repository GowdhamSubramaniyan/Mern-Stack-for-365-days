# Day 137 — Pagination & Environment Variables

**Thursday, October 15**  
**Month 5: Node.js & Express — The Backend**  
**Commit 137 of 365**  
**Progress: 37.53%**

## 1. What Is Pagination?

Imagine your API has 100 products. Pagination splits them into smaller pages instead of returning all 100 at once.

- Page 1 → items 1–10
- Page 2 → items 11–20
- Page 3 → items 21–30

Example URL:

```text
/items?page=2&limit=10
```

- `page=2` means show the second page.
- `limit=10` means show 10 items per page.

### Example Code

```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;

const start = (page - 1) * limit;
const results = items.slice(start, start + limit);

res.json(results);
```

`req.query` reads values from the URL. `slice()` selects part of an array without changing the original array.

## 2. What Are Environment Variables?

Environment variables store configuration values outside your code, such as the server port.

Create a `.env` file:

```text
PORT=3000
```

Install dotenv:

```bash
npm install dotenv
```

At the top of `index.js`:

```js
require("dotenv").config();

const PORT = process.env.PORT || 3000;
```

Now your server reads the port from the environment. `|| 3000` provides a default if `PORT` isn't set.

**Important:** Add `.env` to `.gitignore` so you don't accidentally upload secrets to GitHub.

## Remember

| Concept | Meaning |
|---|---|
| Pagination | Show results page by page |
| `page` | Which page to show |
| `limit` | Number of items per page |
| `slice()` | Select part of an array |
| `.env` | Stores configuration settings |
| `dotenv` | Loads `.env` values into your app |
| `process.env.PORT` | Reads the configured port |

## Git Commit

```bash
git add .
git commit -m "feat: add pagination"
git push
```

**Commit 137 / 365 — 37.53% complete.**

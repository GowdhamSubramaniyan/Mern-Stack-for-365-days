# Day 139 — dotenv Config & Modular Routers

**Saturday, October 17**  
**Month 5: Node.js & Express — The Backend**  
**Commit 139 of 365**  
**Progress: 38.08%**

## 1. What Are Modular Routers?

Keep related routes in separate files as your backend grows.

```text
routes/
├── itemRoutes.js
└── userRoutes.js
```

In `index.js`, connect the item router:

```js
const itemRoutes = require("./routes/itemRoutes");

app.use("/items", itemRoutes);
```

Inside `itemRoutes.js`, this route:

```js
router.get("/", getItems);
```

becomes `GET /items`.

**Modular routers** keep `index.js` clean and group related routes together.

## 2. What Is dotenv?

Environment variables store configuration outside your JavaScript code. For example, store the server port in a `.env` file.

Install dotenv:

```bash
npm install dotenv
```

Create `.env` in your project root:

```text
PORT=3000
```

At the top of `index.js`, before reading environment variables, add:

```js
require("dotenv").config();
```

Read the port:

```js
const PORT = process.env.PORT || 3000;
```

Use it to start the server:

```js
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

`process.env.PORT` reads the configured port. `|| 3000` provides a fallback if no port is set.

## 3. Keep `.env` Private

Add these lines to `.gitignore`:

```text
.env
node_modules/
```

Do not commit secrets or passwords to GitHub. You can provide a safe `.env.example` file with placeholder values if other developers need to know which variables to set.

## 4. Quick Checklist

- [ ] Install `dotenv`.
- [ ] Create `.env` with `PORT=3000`.
- [ ] Call `require("dotenv").config()` before reading environment variables.
- [ ] Use `process.env.PORT || 3000`.
- [ ] Add `.env` to `.gitignore`.
- [ ] Keep related endpoints in modular router files.

## Git Commit

```bash
git add .
git commit -m "chore: configure dotenv"
git push
```

## Key Takeaway

- **Modular routers** organize related routes into separate files.
- **dotenv** loads settings from `.env` into `process.env`.
- **`.gitignore`** prevents local configuration and secrets from being committed.

**Commit 139 / 365 — 38.08% complete.**

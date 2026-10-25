# Day 147 — Code: Deploy Express API to Render

Use this as a deployment checklist for your existing backend. Keep your existing routes, controllers, middleware, and error handlers. Adapt filenames and scripts to your project.

## 1. Check `package.json`

Make sure there is a production start script. If your entry file is `index.js`, the relevant section can look like this:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

Merge these scripts into your existing `package.json`; do not overwrite your dependencies or other scripts. If your entry file is `server.js`, use `node server.js` instead.

Ensure packages imported by the app are in `dependencies`, not only `devDependencies`.

## 2. Check the server listens on Render's port

In your main Express entry file, use `process.env.PORT` and keep your existing app setup and routes:

```js
const express = require("express");
const app = express();

app.use(express.json());

// Keep your existing middleware and routes here.

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
```

If your application already defines `app`, routes, or a listener, modify that code rather than adding a second `app.listen()` or duplicate health route. If your routes have a prefix, preserve it.

## 3. Add or update `.gitignore`

Ensure `.env` and local dependencies are not committed. Add these entries if missing:

```gitignore
node_modules/
.env
.DS_Store
npm-debug.log*
```

Do not ignore files that your application needs to run, such as your source code or `package-lock.json`.

## 4. Environment variables

Keep secrets and environment-specific settings in environment variables.

Example local `.env` file (do not commit it):

```env
PORT=3000
```

If your app uses database URLs, API keys, or other secrets, add those to `.env` locally and configure the same variable names in Render's Environment settings. Never put secrets in source code or this Markdown file.

## 5. Push the project to GitHub

Run these from the backend repository:

```bash
git status
git add .
git commit -m "chore: prepare Express API for Render deployment"
git push
```

If your changes are already committed, you do not need to create an empty commit.

## 6. Create the Render Web Service

In Render:

1. Choose **New +** → **Web Service**.
2. Connect the GitHub repository containing your backend.
3. Choose the correct branch.
4. Set **Root Directory** to the backend folder if the backend is inside a monorepo. Leave it blank if the repository root is the backend.
5. Set **Environment** to `Node`.
6. Set **Build Command** to `npm install` (or `npm ci` if your repository has a committed, valid `package-lock.json`).
7. Set **Start Command** to `npm start`.
8. Add required environment variables under the service's **Environment** settings.
9. Create the service and wait for the build and deploy to finish.

Use the actual package manager and lockfile your project uses. For example, if the project uses pnpm, configure the appropriate pnpm install/build command rather than `npm install`.

## 7. Verify the deployment

After Render reports the service is live, copy the public service URL and test:

```http
GET https://YOUR-SERVICE.onrender.com/health
```

Expected response:

```json
{
  "status": "ok"
}
```

Then test your real endpoints using Postman, for example:

```http
GET https://YOUR-SERVICE.onrender.com/items
```

Replace `/items` with the route your API actually implements.

If deployment fails, inspect Render's **Logs** and check:
- The start command matches your entry file.
- Dependencies are listed in `package.json`.
- Required environment variables are configured.
- The server listens on `process.env.PORT`.
- The configured root directory is correct.
- The code does not depend on local files that are absent from the repository.

## 8. Day 147 completion checklist

- [ ] Confirm production start script.
- [ ] Confirm server uses `process.env.PORT`.
- [ ] Add or test a health endpoint.
- [ ] Confirm `.env` is ignored and secrets are not committed.
- [ ] Push code to GitHub.
- [ ] Create the Render Web Service with the correct settings.
- [ ] Configure environment variables.
- [ ] Verify the live health endpoint.
- [ ] Test at least one real API endpoint.

**Commit 147 / 365 — 40.27% complete.**

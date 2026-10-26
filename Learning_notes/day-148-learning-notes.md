# Day 148 — Learning Notes

**Monday, October 26**  
**Month 5: Node.js & Express — The Backend**  
**Commit 148 of 365**  
**Progress: 40.55%**

## Today's Focus

Learn the basics of deploying an API to Render and publish the Medium article **“Fetch, Promises and async/await: A Beginner's Guide to Async JavaScript.”** Save a Markdown copy in the repository's `writing` folder and link it from `README.md`.

## 1. What Is API Deployment?

Deployment means making your application available on a server so other people can access it over the internet. During local development, your API might run at `http://localhost:3000`. After deployment, a hosting service such as Render provides a public URL.

## 2. Prepare an Express API for Render

Your server should listen on the port provided by the hosting platform:

```js
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
```

Use the existing `app` and server setup in your project. Do not add a second `app.listen()` if one already exists.

Make sure `package.json` has a production start script. For an `index.js` entry file, merge this into your existing scripts:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

Change `index.js` if your entry file has another name. Ensure runtime packages are installed as dependencies.

## 3. Environment Variables and Secrets

Configure required environment variables in Render's Environment settings. Do not commit your local `.env` file or hard-code secrets.

```gitignore
node_modules/
.env
```

## 4. Deploy to Render

1. Push your backend project to GitHub.
2. In Render, create a **Web Service** and connect the repository.
3. Choose the correct branch and set the Root Directory if your backend is inside a monorepo.
4. Select the Node environment.
5. Set the build command to `npm install` (or `npm ci` if you have a committed `package-lock.json`).
6. Set the start command to `npm start`.
7. Add the environment variables your API requires.
8. Deploy and inspect logs if the build or startup fails.
9. Test the public URL using Postman.

Use the install command that matches your project's package manager.

## 5. Promises and Fetch

A **Promise** represents the eventual result of an asynchronous operation. It can be pending, fulfilled, or rejected. `.then()` handles a fulfilled Promise, and `.catch()` handles a rejected Promise.

`fetch()` makes HTTP requests and returns a Promise:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
```

Important: `fetch()` does not automatically reject on HTTP statuses such as 404 or 500. Check `response.ok`.

## 6. async/await

`async/await` is a readable way to work with Promises. An `async` function returns a Promise. `await` waits for a Promise to settle inside the async function without blocking the entire JavaScript application.

```js
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

getPost();
```

Use `try...catch` to handle errors from the request or JSON parsing.

## 7. Today's Publishing Task

Publish **“Fetch, Promises and async/await: A Beginner's Guide to Async JavaScript”** on Medium.

Save a Markdown copy in your repository, for example `writing/fetch-promises-async-await.md`, and add this link to `README.md`:

```md
### Writing

- [Fetch, Promises and async/await: A Beginner's Guide to Async JavaScript](writing/fetch-promises-async-await.md)
```

Update the path if your filename differs. Verify the link works and the file contains the final article.

## 8. Git Commands

```bash
git add writing README.md
git commit -m "docs: publish async JavaScript article"
git push
```

## Day 148 Checklist

- [ ] Check the production `start` script.
- [ ] Confirm the server uses `process.env.PORT`.
- [ ] Deploy the API to Render and inspect logs.
- [ ] Test the live API URL.
- [ ] Publish the article on Medium.
- [ ] Save the article in the `writing` folder.
- [ ] Link the article in `README.md`.
- [ ] Commit and push the changes.

**Commit 148 / 365 — 40.55% complete.**

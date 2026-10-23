# Day 145 — Learning Notes

**Friday, October 23**  
**Month 5: Node.js & Express — The Backend**  
**Commit 145 of 365**  
**Progress: 39.73%**

## Today's Focus

- Learn the basics of security headers with Helmet.
- Publish *The Beginner's Notebook #3: My First App That Remembers Things* on Substack.
- Save a copy of the article in the repository's `/writing` folder.
- Link the article from the project `README.md`.

## 1. What Is Persistence?

**Persistence** means keeping data available after a page refresh or application restart.

For example, a notes app should still show saved notes after the user closes and reopens it. Without persistence, data may exist only temporarily in memory and disappear when the application stops.

## 2. Saving Data in a JSON File

For a beginner project, Node.js can read and write a JSON file using the built-in `fs` module.

```js
const fs = require("fs");

const rawData = fs.readFileSync("./items.json", "utf8");
const items = JSON.parse(rawData);

// After changing items:
fs.writeFileSync("./items.json", JSON.stringify(items, null, 2));
```

- `readFileSync()` reads the file.
- `JSON.parse()` converts JSON text into JavaScript data.
- `JSON.stringify()` converts JavaScript data into JSON text.
- `writeFileSync()` writes the updated text back to the file.

This is useful for learning and small demos. For larger or concurrent applications, use a database and appropriate error handling instead.

## 3. How an Express API Saves Data

A typical request flow looks like this:

```text
Frontend → HTTP request → Express route/controller → Service/storage
Frontend ← HTTP response ← Express route/controller ← Saved data
```

For example, a frontend sends a `POST` request to create a note. The backend validates the request body, saves the note, and responds with the result. Later, a `GET` request retrieves the saved notes.

## 4. What Is Helmet?

Helmet is Express middleware that sets security-related HTTP response headers. These headers help browsers apply protections, but Helmet alone does not make an application completely secure.

Install it:

```bash
npm install helmet
```

Add it near the top of your Express setup, before your routes:

```js
const helmet = require("helmet");

app.use(helmet());
```

Keep your existing routes and error handlers. Make sure middleware is placed in the correct order.

## 5. Important Lessons

- The frontend handles user interaction; the backend processes requests and data.
- Persistence allows data to remain available between requests or restarts.
- JSON files are useful for practice, but they have limitations for concurrent writes and larger systems.
- Validate incoming data and handle file/database errors.
- Security should be considered alongside functionality; Helmet is one useful layer, not a complete security strategy.

## 6. Today's Writing Task

Article: **The Beginner's Notebook #3: My First App That Remembers Things**

1. Publish the article on Substack.
2. Save a Markdown copy in the repository's `writing` folder, for example `writing/beginners-notebook-3.md`.
3. Add a link to it in `README.md`.
4. Check the link and ensure the article file is included in Git.

Example README entry:

```md
### The Beginner's Notebook

- [#3: My First App That Remembers Things](writing/beginners-notebook-3.md)
```

Update the path if you choose a different filename.

## 7. Git Commands

```bash
git add writing README.md
git commit -m "docs: publish beginner notebook article 3"
git push
```

## Day 145 Checklist

- [ ] Understand what data persistence means.
- [ ] Understand how Node.js can read and write JSON files.
- [ ] Understand the basic request flow through an Express backend.
- [ ] Install and configure Helmet.
- [ ] Publish the article on Substack.
- [ ] Save the article in the `/writing` folder.
- [ ] Link it from `README.md`.
- [ ] Commit and push the changes.

**Commit 145 / 365 — 39.73% complete.**

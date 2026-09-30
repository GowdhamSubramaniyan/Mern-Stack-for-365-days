# Day 122 — Basic Server + Health Route

**Date:** Wednesday, September 30, 2026  
**Commit:** 122 of 365  
**Progress:** 33.42%  
**Month 5:** Node.js & Express — The Backend

## 📚 Today's Learning

Today I learned more about the Node.js runtime and modules.

### Main topics

- Node.js runtime
- Browser JavaScript vs Node.js
- Modules
- `require()`
- Built-in Node.js modules
- Express server
- Routes
- Health-check endpoints
- Request and response
- JSON responses

---

## 1. What Is the Node.js Runtime?

Node.js allows JavaScript to run outside the browser.

Before Month 5:

```text
JavaScript
    ↓
Browser
    ↓
Frontend
```

Now:

```text
JavaScript
    ↓
Node.js
    ↓
Backend
```

The browser provides things like:

```text
document
window
DOM
HTML
CSS
```

Node.js does not provide the browser DOM.

Instead, Node.js provides features useful for server-side applications:

```text
Files
Networking
HTTP
Processes
Environment variables
Modules
Operating-system access
```

Simple difference:

```text
Browser
→ JavaScript + Web APIs

Node.js
→ JavaScript + Server APIs
```

---

## 2. What Is a Module?

A module is a separate piece of code that can be used by another piece of code.

Instead of putting everything into one huge JavaScript file, an application can be divided into smaller modules.

For example:

```text
📦 Server module
📦 Database module
📦 Authentication module
📦 Storage module
```

Modules help keep applications organized and reusable.

---

## 3. What Does require() Do?

Yesterday I used:

```js
const express = require("express");
```

`require()` loads a module.

A simple way to understand it:

```text
require("express")
       ↓
Find Express
       ↓
Load Express
       ↓
Give it to my code
```

The result is stored in:

```js
const express = require("express");
```

This uses the CommonJS module system.

---

## 4. Built-in Node.js Modules

Node.js also provides built-in modules.

Example:

```js
const fs = require("fs");
```

`fs` means File System and can be used to work with files.

Another example:

```js
const path = require("path");
```

`path` helps work with file and directory paths.

These modules do not need to be installed with npm because they are included with Node.js.

---

## 5. Create the Project

Project structure:

```text
day-122-server/
│
├── node_modules/
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

For a new project:

```bash
mkdir day-122-server
cd day-122-server
npm init -y
npm install express
```

If continuing from Day 121, Express is already installed.

---

## 6. Create the Express Server

Create:

```text
index.js
```

Add:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

Run:

```bash
node index.js
```

Expected output:

```text
Server running on port 3000
```

---

## 7. What Is a Health Route?

A health route is a simple endpoint used to check whether a backend server is running and responding.

Think of it like asking:

> "Are you alive?"

The server can answer:

```json
{
    "status": "ok"
}
```

A common health endpoint is:

```text
GET /health
```

---

## 8. Create the Health Route

Add this to `index.js`:

```js
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
```

Complete code:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

---

## 9. Test the Health Route

Start the server:

```bash
node index.js
```

Open:

```text
http://localhost:3000/health
```

Expected response:

```json
{
    "status": "ok"
}
```

This means the Express server is alive and responding to requests.

---

## 10. Understand app.get()

This:

```js
app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});
```

means:

> When someone sends a GET request to `/health`, run this function.

The pieces are:

```text
app.get()
   ↓
HTTP GET method

"/health"
   ↓
URL route

(req, res)
   ↓
Request + Response
```

---

## 11. Request and Response

The request-response cycle is one of the most important backend concepts.

When I visit:

```text
http://localhost:3000/health
```

the browser sends a request:

```text
Browser
   |
   | GET /health
   ↓
Express Server
   |
   | Process request
   ↓
Response
   |
   ↓
Browser
```

In:

```js
(req, res)
```

`req` means request.

`res` means response.

Then:

```js
res.json({
    status: "ok"
});
```

sends JSON back to the client.

---

## 12. res.send() vs res.json()

Yesterday I used:

```js
res.send("Hello from my backend!");
```

Today I use:

```js
res.json({
    status: "ok"
});
```

### res.send()

Useful for sending text:

```js
res.send("Hello!");
```

### res.json()

Useful for sending JSON data:

```js
res.json({
    status: "ok"
});
```

APIs commonly use JSON responses.

---

## 13. Why Do We Need /health?

Imagine the backend is deployed online:

```text
Application
     ↓
Backend
     ↓
Database
```

A monitoring system can periodically request:

```text
GET /health
```

If it receives:

```json
{
    "status": "ok"
}
```

the server is responding.

If it does not respond, there may be a problem.

Health endpoints are therefore useful for monitoring and service checks.

---

## 14. Testing With curl

The health route can also be tested from the terminal:

```bash
curl http://localhost:3000/health
```

Expected:

```json
{"status":"ok"}
```

---

## 15. Final Project Structure

```text
day-122-server/
│
├── node_modules/
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

`.gitignore`:

```text
node_modules/
```

---

## 16. Git Commit

After testing:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: add server health route"
```

Push:

```bash
git push
```

---

# 🧠 Key Concepts

### Node.js

```text
Runs JavaScript outside the browser.
```

### Module

```text
A reusable piece of code.
```

### require()

```text
Loads a module using CommonJS.
```

Example:

```js
const express = require("express");
```

### Route

```text
An HTTP method + URL handled by the server.
```

Example:

```js
app.get("/health", ...)
```

### Health endpoint

```text
A simple endpoint used to check whether the server is alive.
```

---

# 🔄 Backend Flow

Today's server works like this:

```text
              YOUR COMPUTER
                    │
                    ↓
                 Node.js
                    │
                    ↓
                 Express
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       GET /              GET /health
          ↓                   ↓
   Hello Backend       { status: "ok" }
```

Later, the architecture will grow into:

```text
React Frontend
       ↕
HTTP / API
       ↕
Express
       ↕
Node.js
       ↕
MongoDB
```

That is the foundation of the MERN stack.

---

# 🎯 Day 122 Checklist

```text
[ ] Understand Node.js runtime
[ ] Understand browser vs Node.js
[ ] Understand modules
[ ] Understand require()
[ ] Understand built-in Node modules
[ ] Create Express server
[ ] Create GET /health
[ ] Return JSON response
[ ] Test /health in browser
[ ] Test /health with curl
[ ] Create .gitignore
[ ] Commit changes
[ ] Push to GitHub
```

---

# 📈 Progress

**Day 122 / 365**

**33.42% complete**

**Month 5 — Node.js & Express is underway. 🚀**

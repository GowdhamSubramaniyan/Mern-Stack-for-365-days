# Day 121 — New Repo, npm init, Install Express

**Date:** Tuesday, September 29, 2026  
**Commit:** 121 of 365  
**Progress:** 33.15%  
**Month 5:** Node.js & Express — The Backend

## 📚 Today's Learning

Today begins backend development.

Until now, most of my JavaScript has been running inside the browser. From Day 121, I am learning how JavaScript can also run on a server using Node.js.

### Main concepts

- What a backend is
- Client vs server
- Node.js
- Express
- npm
- `package.json`
- Installing packages
- Express servers
- HTTP request and response
- Routes
- Running a backend locally

---

# 1. What Is a Backend?

A backend is the part of an application that runs on a server.

It can handle:

- Receiving requests
- Processing data
- Business logic
- Database communication
- Authentication
- APIs
- Sending responses

Basic flow:

```text
Frontend
   ↓
Request
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
Response
   ↓
Frontend
```

The frontend is what the user interacts with.

The backend works behind the scenes.

---

# 2. Client vs Server

## Client

The client is usually the user's browser.

Examples:

```text
Chrome
Edge
Firefox
Safari
```

The client handles:

```text
HTML
CSS
JavaScript
Buttons
Forms
UI
Animations
```

## Server

The server runs the backend application.

It handles:

```text
Requests
Business logic
Authentication
APIs
Database operations
Responses
```

The basic communication is:

```text
Browser
   ↓
REQUEST
   ↓
Server
   ↓
Process request
   ↓
RESPONSE
   ↓
Browser
```

---

# 3. What Is Node.js?

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

This means JavaScript can be used to build server-side applications.

---

# 4. What Is Express?

Express is a web framework for Node.js.

Node.js provides the environment for running JavaScript on the server.

Express provides tools that make it easier to build:

- Web servers
- APIs
- Routes
- Request handling
- Responses
- Middleware

Simple way to remember:

```text
Node.js
   ↓
Runs JavaScript on the server

Express
   ↓
Makes server development easier
```

---

# 5. What Is npm?

npm stands for Node Package Manager.

It is used to:

- Install packages
- Manage dependencies
- Run project scripts
- Manage Node.js projects

Example:

```bash
npm install express
```

---

# 6. Create the Project

Create a folder:

```bash
mkdir day-121-backend
cd day-121-backend
```

Initialize npm:

```bash
npm init -y
```

This creates:

```text
package.json
```

---

# 7. What Is package.json?

`package.json` is the main configuration file for a Node.js project.

It contains project information, dependencies and scripts.

Example:

```json
{
    "name": "day-121-backend",
    "version": "1.0.0",
    "main": "index.js"
}
```

After installing Express, dependencies will be added:

```json
"dependencies": {
    "express": "..."
}
```

Think of it as:

```text
package.json
     ↓
Project information
     +
Dependencies
     +
Scripts
```

---

# 8. Install Express

Run:

```bash
npm install express
```

The project will contain approximately:

```text
day-121-backend/
│
├── node_modules/
├── package-lock.json
├── package.json
└── index.js
```

---

# 9. What Is node_modules?

`node_modules` contains the packages installed by npm.

After:

```bash
npm install express
```

Express and its dependencies are stored there.

I normally do not edit this folder manually.

I also should not commit it to GitHub.

Create `.gitignore`:

```text
node_modules/
```

Another developer can recreate the dependencies using:

```bash
npm install
```

---

# 10. Create the First Node.js File

Create:

```text
index.js
```

Add:

```js
console.log("Backend is starting...");
```

Run:

```bash
node index.js
```

Expected output:

```text
Backend is starting...
```

This proves JavaScript is running through Node.js rather than inside the browser.

---

# 11. Create the First Express Server

Replace the code in `index.js` with:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Run:

```bash
node index.js
```

Expected output:

```text
Server running on http://localhost:3000
```

---

# 12. Create the First Route

Add:

```js
app.get("/", (req, res) => {
    res.send("Hello from my backend!");
});
```

Complete code:

```js
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from my backend!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

Start the server:

```bash
node index.js
```

Open:

```text
http://localhost:3000
```

The browser should display:

```text
Hello from my backend!
```

---

# 13. Understanding the Express Code

## Import Express

```js
const express = require("express");
```

Loads Express into the project.

## Create the application

```js
const app = express();
```

Creates the Express application.

## Create a port

```js
const PORT = 3000;
```

The server will listen on port `3000`.

## Create a route

```js
app.get("/", (req, res) => {
    res.send("Hello from my backend!");
});
```

This means:

```text
GET /
```

When a client sends a GET request to `/`, Express sends back the message.

## Start the server

```js
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

This starts the server and listens for incoming requests.

---

# 14. Request and Response

This is one of the most important backend concepts.

When I open:

```text
http://localhost:3000
```

the browser sends a request.

```text
Browser
   |
   | GET /
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

In Express:

```js
app.get("/", (req, res) => {
```

`req` represents the request.

`res` represents the response.

Then:

```js
res.send("Hello from my backend!");
```

sends the response to the client.

---

# 15. Why "Cannot GET /" Appears

If the server is running but there is no:

```js
app.get("/", ...)
```

route, visiting:

```text
http://localhost:3000
```

may show:

```text
Cannot GET /
```

This does not mean Express is broken.

It means:

> The server is running, but no route has been created for `/`.

---

# 16. Final Project Structure

```text
day-121-backend/
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

# 17. Git Commit

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Commit:

```bash
git commit -m "feat: initialize Node.js backend with Express"
```

Then push the project to GitHub.

---

# 🧠 Main Concept to Remember

The most important idea from Day 121:

```text
CLIENT
Browser
   ↓
HTTP Request
   ↓
SERVER
Node.js + Express
   ↓
Process request
   ↓
HTTP Response
   ↓
CLIENT
Browser
```

Month 4 was mainly about JavaScript in the browser.

Month 5 begins the backend:

```text
Frontend
    ↓
HTTP Request
    ↓
Node.js + Express
    ↓
Backend
```

Later this becomes:

```text
React
   ↕
Express
   ↕
MongoDB
```

This is the foundation of the MERN stack.

---

# 🎯 Day 121 Checklist

```text
[ ] Understand what a backend is
[ ] Understand client vs server
[ ] Understand Node.js
[ ] Understand Express
[ ] Understand npm
[ ] Run npm init -y
[ ] Understand package.json
[ ] Install Express
[ ] Understand node_modules
[ ] Create index.js
[ ] Start an Express server
[ ] Create GET /
[ ] Understand request and response
[ ] Create .gitignore
[ ] Commit the project
[ ] Push to GitHub
```

---

# 📈 Progress

**Day 121 / 365**

**33.15% complete**

**Month 5 — Node.js & Express has started. 🚀**

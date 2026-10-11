# Day 133 — 404 Handler

**Sunday, October 11**  
**Month 5: Node.js & Express — The Backend**  
**Commit 133 of 365**  
**Progress: 36.44%**

## 1. What Is CRUD?

CRUD means the four basic operations of an API.

| Operation | Method | Example |
|---|---|---|
| Create | `POST` | `/items` |
| Read | `GET` | `/items` |
| Update | `PUT` | `/items/1` |
| Delete | `DELETE` | `/items/1` |

## 2. What Is a 404 Handler?

If someone visits a URL that your API does not recognize, such as:

```text
http://localhost:3000/unknown
```

the server should return a `404 Not Found` response.

Example response:

```json
{
  "message": "Route not found"
}
```

## 3. Add the 404 Handler

In `index.js`, add this **after all your routes** and before your error-handling middleware:

```js
app.use((req, res, next) => {
    res.status(404).json({
        message: "Route not found"
    });
});
```

## 4. How It Works

```text
Request
   ↓
Does a matching route exist?
   ├── Yes → Handle the request
   └── No  → 404 handler
```

**Important:** Put the 404 handler before the error-handling middleware.

## 5. Test It

Start the server and visit:

```text
http://localhost:3000/unknown
```

Expected response:

```json
{
  "message": "Route not found"
}
```

HTTP status: `404 Not Found`

## 6. Git Commit

```bash
git add .
git commit -m "feat: add 404 handler"
git push
```

## Key Takeaway

A **404 handler** catches requests for routes your API does not recognize.

**Commit 133 / 365 — 36.44% complete.**

# Day 143 — Pagination, Filtering & Postman Collection

**Wednesday, October 21**  
**Month 5: Node.js & Express — The Backend**  
**Commit 143 of 365**  
**Progress: 39.18%**

## Today's Goal

Learn how pagination and filtering work, then create a Postman collection to test your Express API endpoints.

## 1. Pagination

Pagination splits a large list into smaller pages instead of returning every item at once.

Example request:

```http
GET {{baseUrl}}/api/items?page=2&limit=5
```

- `page=2`: request the second page.
- `limit=5`: return up to five items per page.

```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;

const startIndex = (page - 1) * limit;
const results = items.slice(startIndex, startIndex + limit);
```

For page 2 with a limit of 5, `startIndex` is `(2 - 1) * 5 = 5`, so `slice(5, 10)` returns the next five items. In a real API, validate that `page` and `limit` are positive integers and consider setting a maximum limit.

## 2. Filtering

Filtering returns only items that match a condition.

Example request:

```http
GET {{baseUrl}}/api/items?category=electronics
```

```js
const { category } = req.query;
let results = items;

if (category) {
  results = results.filter(item => item.category === category);
}
```

Apply filtering **before** pagination so the page is based on the filtered results.

Example combined request:

```http
GET {{baseUrl}}/api/items?category=electronics&page=2&limit=5
```

Your exact query parameters depend on the fields and routes in your existing project.

## 3. What Is a Postman Collection?

A Postman collection is a saved group of HTTP requests. It lets you test your API repeatedly without rebuilding each request.

Create a collection named **Items API — Day 143**. Add a collection variable:

- `baseUrl` = `http://localhost:3000`

Change the port if your server uses a different one. Use your actual route paths if they differ from these examples.

## 4. Requests to Add

### Request 1 — Get all items

- Method: `GET`
- URL: `{{baseUrl}}/api/items`

### Request 2 — Get an item by ID

- Method: `GET`
- URL: `{{baseUrl}}/api/items/1`

Replace `1` with an ID that exists in your data.

### Request 3 — Create an item

- Method: `POST`
- URL: `{{baseUrl}}/api/items`
- Body → raw → JSON:

```json
{
  "name": "Notebook",
  "price": 5
}
```

Use the fields required by your own API. If your app expects other fields, update the example body.

### Request 4 — Update an item

- Method: `PUT`
- URL: `{{baseUrl}}/api/items/1`
- Body → raw → JSON:

```json
{
  "name": "Updated Notebook",
  "price": 7
}
```

### Request 5 — Delete an item

- Method: `DELETE`
- URL: `{{baseUrl}}/api/items/1`

Use an existing ID and remember that this request deletes data.

### Request 6 — Filter items

- Method: `GET`
- URL: `{{baseUrl}}/api/items?category=electronics`

Use this only if your items have a `category` field and your API implements that filter. Otherwise, adapt it to an existing filter or implement filtering first.

### Request 7 — Paginate items

- Method: `GET`
- URL: `{{baseUrl}}/api/items?page=2&limit=5`

This works only if pagination has been implemented in your route/controller/service.

## 5. Test the Collection

1. Start your server, for example with `npm run dev`.
2. In Postman, create the collection and set the `baseUrl` variable.
3. Add the requests that match your existing API routes.
4. Send each request and inspect the status code and response body.
5. Test valid and invalid IDs, create/update payloads, filtering, and pagination.
6. Save the collection. To submit or back it up, use Postman's **Export** option to save a collection JSON file.

## 6. Common Status Codes

| Status | Meaning |
|---|---|
| `200 OK` | Request succeeded |
| `201 Created` | Resource was created |
| `400 Bad Request` | Invalid input or query parameters |
| `404 Not Found` | Requested resource does not exist |
| `429 Too Many Requests` | Rate limit exceeded |
| `500 Internal Server Error` | Unexpected server-side error |

Actual status codes depend on how your API is implemented.

## 7. Day 143 Checklist

- [ ] Understand pagination (`page`, `limit`, `slice()`).
- [ ] Understand filtering with `req.query` and `.filter()`.
- [ ] Create a Postman collection named `Items API — Day 143`.
- [ ] Set the `baseUrl` collection variable.
- [ ] Add and run requests for the routes that exist in my project.
- [ ] Test filtering and pagination if implemented.
- [ ] Save or export the collection.
- [ ] Commit and push my work.

## Git Commit

```bash
git add .
git commit -m "test: add Postman API collection"
git push
```

**Commit 143 / 365 — 39.18% complete.**

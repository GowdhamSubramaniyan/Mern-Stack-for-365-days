# Day 146 — Test Every Endpoint

**Saturday, October 24**  
**Month 5: Node.js & Express — The Backend**  
**Commit 146 of 365**  
**Progress: 40.00%**

## Goal

Test every implemented API endpoint using Postman or Thunder Client. Check response status codes, response bodies, validation, and error handling.

> The URLs and payloads below are examples. Adjust them to match your actual route paths, fields, and validation rules.

## 1. Start the Server

```bash
npm run dev
```

Example base URL: `http://localhost:3000`

## 2. Test the CRUD Endpoints

### GET — Get all items

```http
GET http://localhost:3000/items
```

Expected: `200 OK` and an array/list of items.

### GET — Get one item by ID

```http
GET http://localhost:3000/items/1
```

Expected: `200 OK` if the item exists; `404 Not Found` if it does not.

### POST — Create an item

```http
POST http://localhost:3000/items
Content-Type: application/json
```

Body → raw → JSON:

```json
{
  "name": "Notebook",
  "price": 5
}
```

Expected: typically `201 Created` when the item is successfully created. Use fields required by your own API.

### PUT — Update an item

```http
PUT http://localhost:3000/items/1
Content-Type: application/json
```

Body → raw → JSON:

```json
{
  "name": "Updated Notebook",
  "price": 7
}
```

Expected: a success response if the item exists and the request is valid; otherwise a relevant error such as `400` or `404`.

### DELETE — Delete an item

```http
DELETE http://localhost:3000/items/1
```

Expected: a success response if the item exists. This may remove the item from your test data, so use a disposable test item.

## 3. Test Error Cases

- **Unknown ID:** request an ID that does not exist; expect `404 Not Found`.
- **Invalid POST body:** send missing or invalid fields; expect `400 Bad Request` if validation is implemented.
- **Malformed JSON:** send invalid JSON; expect a client error, typically `400`.
- **Pagination:** if implemented, test `?page=1&limit=5`, invalid page values, and limits.
- **Filtering:** if implemented, test a filter that matches results and one that matches none.
- **Rate limiting:** if enabled, exceed the configured request limit and verify `429 Too Many Requests`.

## 4. Test Checklist

- [ ] GET all items
- [ ] GET item by ID
- [ ] POST create item
- [ ] PUT update item
- [ ] DELETE item
- [ ] Test unknown IDs and invalid request bodies
- [ ] Test pagination and filtering, if implemented
- [ ] Check Morgan request logs
- [ ] Check rate-limiting behaviour, if enabled
- [ ] Save or update the Postman collection

## 5. Commit Test Artifacts

If you updated your Postman collection, documentation, or other project files:

```bash
git add .
git commit -m "test: verify all API endpoints"
git push
```

Avoid making an unnecessary code change solely to create a commit. If the testing work is manual, save the collection or test results in your repository when useful.

**Commit 146 / 365 — 40.00% complete.**

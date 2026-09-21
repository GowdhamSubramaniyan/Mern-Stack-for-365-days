# Day 113 — Confirm Delete Modal

**Commit 113 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** Event delegation  
**Build & Commit (~30 min):** Confirm-delete modal

## What I Learned

Event delegation means putting one event listener on a parent element instead of adding separate listeners to every child element.

### Key concepts

- `event.target` tells me what was clicked.
- `closest()` finds the nearest matching parent element.
- `data-id` stores an item's ID on an HTML element.
- A modal asks the user to confirm before deleting.
- After deletion, the UI is rendered again and the updated data is saved.

## Flow

```text
Click Delete
    ↓
Event delegation detects the click
    ↓
Store selected user's ID
    ↓
Open confirmation modal
    ↓
Cancel → close modal
    ↓
Confirm → delete user
    ↓
Render users again
    ↓
Save updated data
```

## Project Structure

```text
day-113-confirm-delete-modal/
├── index.html
├── style.css
├── README.md
└── js/
    ├── main.js
    ├── render.js
    └── storage.js
```

## Git Commit

```bash
git add .
git commit -m "feat: add confirm delete modal with event delegation"
git push
```

**Progress: 113 / 365 = 30.96%**

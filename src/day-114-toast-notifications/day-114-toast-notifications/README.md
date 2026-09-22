# Day 114 — Toast Notifications

**Commit 114 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** Debounce (gentle)  
**Build & Commit (~30 min):** Toast notifications

## What I Learned

### Debounce

Debounce means waiting for a short period before running a function. If the user keeps doing something, the timer is reset.

```js
let timer;

input.addEventListener("input", () => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    console.log("User stopped typing");
  }, 300);
});
```

This is useful for search boxes because we don't need to run the search after every keystroke.

### Toast Notifications

A toast is a small temporary message that gives the user feedback.

Examples:

- Data saved successfully!
- User deleted!
- Something went wrong.

The toast appears and automatically disappears after 3 seconds.

### Reusable Function

Instead of repeating the toast code, I created:

```js
showToast("Data saved successfully!");
```

The function creates the toast, displays it, and removes it after 3 seconds.

## Project Structure

```text
day-114-toast-notifications/
├── index.html
├── style.css
├── README.md
└── js/
    ├── main.js
    └── toast.js
```

## Key Lesson

**Debounce** → controls when a function runs.

**Toast notifications** → give users temporary feedback after an action.

I also practiced creating reusable JavaScript modules.

## Git Commit

```bash
git add .
git commit -m "feat: add toast notifications"
git push
```

**Progress: 114 / 365 = 31.23%**

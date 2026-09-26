# Day 118 — Learning Notes

**Commit 118 of 365**  
**Month 4: JavaScript Deeper: Async, Fetch & Storage**

## Today's Task

**Learn (30 min):** Using Vite (a dev server)  
**Build & Commit (~30 min):** Publish on Medium: "JavaScript for Beginners: Variables, Functions and the DOM"

## What I Learned

### What is Vite?

Vite is a modern development tool that provides a fast local development server for frontend projects.

Instead of opening an HTML file directly:

```text
HTML file
   ↓
Browser
```

I can run my project through Vite:

```text
Project
   ↓
Vite
   ↓
Development server
   ↓
Browser
```

A Vite development server commonly gives a local address such as:

```text
http://localhost:5173
```

`localhost` means my own computer.

## Why Use Vite?

Vite provides:

- A local development server
- Fast updates while coding
- ES module support
- A production build process
- A modern frontend development workflow

## Creating a Vite Project

```bash
npm create vite@latest
```

Then:

```bash
cd my-project
npm install
npm run dev
```

Vite then provides a local URL to open in the browser.

## package.json

A Vite project contains a `package.json` file.

Example:

```json
{
    "scripts": {
        "dev": "vite",
        "build": "vite",
        "preview": "vite"
    }
}
```

### `npm run dev`

Starts the development server.

```bash
npm run dev
```

### `npm run build`

Creates a production build.

```bash
npm run build
```

### `npm run preview`

Previews the production build locally.

```bash
npm run preview
```

## Development vs Production

During development:

```text
Write code
   ↓
npm run dev
   ↓
Vite development server
   ↓
Browser
```

When the application is ready:

```text
Source code
   ↓
npm run build
   ↓
Production files
   ↓
Deploy
```

## Today's Writing Task

Today's build task was to publish:

**JavaScript for Beginners: Variables, Functions and the DOM**

The article explains JavaScript fundamentals from my coding journey, especially variables, functions, the DOM, events, and connecting JavaScript with HTML.

The article draft can be stored in:

```text
writing/
└── javascript-for-beginners-variables-functions-dom.md
```

Then it can be linked from the main `README.md`.

## Key Terms

**Vite** → A modern frontend development tool.

**Development server** → Runs my project locally while I develop it.

**localhost** → My own computer.

**npm** → A tool for managing JavaScript packages and project commands.

**package.json** → A file containing project information, scripts, and dependencies.

**`npm run dev`** → Starts the development server.

**`npm run build`** → Creates the production build.

**Production** → The version of the application prepared for deployment.

## Today's Big Lesson

Modern JavaScript projects commonly use development tools such as Vite:

```text
JavaScript files
      ↓
npm
      ↓
Vite
      ↓
Development server
      ↓
Browser
```

Vite is not the JavaScript language itself. It is a development tool that helps me build and run modern frontend applications.

This is an important step toward larger JavaScript projects and eventually frameworks such as React.

## Git Commit

```bash
git add .
git commit -m "docs: publish JavaScript beginner article"
git push
```

**Progress: 118 / 365 = 32.33%**

# How to Set Up a Coding Environment From Scratch: VS Code, Node, Git & GitHub

> **Everything a beginner needs to go from a blank laptop to writing and sharing real code — in one afternoon.**

---

## Introduction

There's a moment every new developer dreads: you've decided to learn to code, you've opened your laptop, and you have absolutely no idea where to start. Not with a tutorial. Not with a language. Just… with the computer itself.

Before you write a single line of code, you need a place to write it, a way to run it, and a system to save and share it.

By the end of this guide, you'll have four essential tools installed and working together:

* 💻 VS Code (Code Editor)
* 🟢 Node.js (JavaScript Runtime)
* 🌿 Git (Version Control)
* 🐙 GitHub (Cloud Repository)

---

# Step 1: Install VS Code (Your Code Editor)

Visual Studio Code (VS Code) is one of the most popular code editors in the world. It's free, lightweight, and supports thousands of extensions.

### Install

1. Visit **https://code.visualstudio.com**
2. Download the version for your operating system.
3. Install it.
4. Launch VS Code.

### Recommended Settings

* Open the Command Palette (`Ctrl + Shift + P`)
* Choose a color theme
* Enable **Auto Save**
* Install a programming font like:

  * Fira Code
  * JetBrains Mono

---

# Step 2: Install Node.js

Node.js allows JavaScript to run outside the browser.

Download the **LTS (Long Term Support)** version from:

https://nodejs.org

After installation, verify it:

```bash
node --version

npm --version
```

If both commands display version numbers, your installation is successful.

### Test Node.js

```bash
node
```

Then type:

```javascript
console.log("Hello, World!");
```

Exit with:

```bash
.exit
```

---

# Step 3: Install Git

Git is a version control system.

It records every change you make to your project.

Download Git:

https://git-scm.com

After installation, configure your identity:

```bash
git config --global user.name "Your Name"

git config --global user.email "you@example.com"
```

Verify:

```bash
git config --list
```

---

# Step 4: Create a GitHub Account

GitHub stores your projects online.

Benefits:

* Backup
* Portfolio
* Collaboration
* Open Source

Create a free account at:

https://github.com

---

## Connect Git to GitHub

Generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Display your public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

Copy it.

On GitHub:

**Settings → SSH and GPG Keys → New SSH Key**

Paste your key and save.

Test the connection:

```bash
ssh -T git@github.com
```

---

# Step 5: Create Your First Repository

Create a repository named:

```
my-first-project
```

Clone it:

```bash
git clone <repository-url>
```

Open it:

```bash
cd my-first-project

code .
```

Create:

```
index.js
```

Example:

```javascript
function greet(name) {
    return `Hello, ${name}! Welcome to my first project.`;
}

console.log(greet("World"));
```

Run:

```bash
node index.js
```

---

## Save Your Work

Stage your files:

```bash
git add .
```

Commit:

```bash
git commit -m "Add greeting function"
```

Push:

```bash
git push
```

Congratulations! 🎉

Your code is now stored on GitHub.

---

# Step 6: Recommended VS Code Extensions

Install these extensions:

* ✅ Prettier
* ✅ ESLint
* ✅ GitLens
* ✅ Path Intellisense
* ✅ Live Server

These tools improve productivity and help you write cleaner code.

---

# What You've Built

You now have a complete beginner development environment.

```
Laptop
│
├── VS Code
├── Node.js
├── Git
└── GitHub
```

This is the same foundation used by professional software developers.

---

# Next Steps

Now that your environment is ready:

* Practice Git every day.
* Build small projects.
* Learn HTML, CSS, and JavaScript.
* Commit your work regularly.
* Share your progress online.

---

# Conclusion

Setting up your development environment is the first major milestone in becoming a developer.

With VS Code, Node.js, Git, and GitHub installed, you now have everything you need to start building real-world projects.

The tools are ready.

Now it's your turn to build something amazing.

Happy Coding! 🚀

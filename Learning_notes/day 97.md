# Day 97 — Spread & Rest

**Date:** Saturday, September 5
**Month:** 4 — JavaScript Deeper: Async, Fetch & Storage
**Topic:** Spread & Rest
**Build:** Delete an Item
**Commit:** 97 of 365

---

## 1. What are Spread and Rest?

JavaScript uses the same `...` syntax for two different purposes:

* **Spread operator** → expands/unpacks values.
* **Rest operator** → collects multiple values into one variable.

### Easy way to remember

```text
Spread → unpack
Rest   → collect
```

---

# 2. Spread Operator

The spread operator uses `...` to expand the elements of an array or the properties of an object.

## Spread with Arrays

```js
const fruits = ["apple", "banana"];

const newFruits = [...fruits, "orange"];

console.log(newFruits);
```

Output:

```text
["apple", "banana", "orange"]
```

Here:

```js
...fruits
```

takes the values from `fruits` and places them into the new array.

---

## 3. Copying an Array

Spread can create a shallow copy of an array.

```js
const numbers = [1, 2, 3];

const copy = [...numbers];

console.log(copy);
```

The original array is not changed.

```text
numbers → [1, 2, 3]
copy    → [1, 2, 3]
```

This is useful when working with state and avoiding unnecessary mutation.

---

# 4. Combining Arrays

Spread makes it easy to combine arrays.

```js
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "MongoDB"];

const skills = [...frontend, ...backend];

console.log(skills);
```

Output:

```text
["HTML", "CSS", "Node.js", "MongoDB"]
```

---

# 5. Spread with Objects

Spread can also copy object properties.

```js
const user = {
    name: "Gowdham",
    age: 20
};

const copy = {
    ...user
};

console.log(copy);
```

Output:

```text
{
    name: "Gowdham",
    age: 20
}
```

---

# 6. Updating an Object with Spread

Spread is particularly useful when updating an object.

```js
const user = {
    name: "Gowdham",
    age: 20
};

const updatedUser = {
    ...user,
    age: 21
};
```

The original object stays unchanged.

```js
console.log(user.age);
// 20

console.log(updatedUser.age);
// 21
```

If the same property appears again, the later value replaces the earlier value.

```js
const updatedUser = {
    ...user,
    age: 21
};
```

Here, `age: 21` overrides the old `age`.

---

# 7. Rest Operator

The rest operator also uses `...`, but instead of expanding values, it collects them.

```js
function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30);
```

Output:

```text
[10, 20, 30]
```

The rest parameter:

```js
...numbers
```

collects all arguments into an array.

---

# 8. Rest Parameters

Rest parameters allow a function to accept any number of arguments.

```js
function addNumbers(...numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    }, 0);
}

console.log(addNumbers(10, 20, 30));
```

Output:

```text
60
```

The function receives:

```js
10, 20, 30
```

and rest converts them into:

```js
[10, 20, 30]
```

---

# 9. Spread vs Rest

| Spread                   | Rest                                 |
| ------------------------ | ------------------------------------ |
| Expands values           | Collects values                      |
| Unpacks                  | Packs                                |
| Used with arrays/objects | Commonly used in function parameters |
| Creates/combines values  | Handles multiple arguments           |

### Example

```js
// Spread
const numbers = [1, 2, 3];
const copy = [...numbers];
```

```js
// Rest
function showNumbers(...numbers) {
    console.log(numbers);
}
```

---

# 10. Deleting an Item with filter()

Today we also use `filter()` to delete an item from an array.

Consider:

```js
const tasks = [
    { id: 1, text: "Learn JavaScript" },
    { id: 2, text: "Build a project" },
    { id: 3, text: "Push to GitHub" }
];
```

To remove task `2`:

```js
const updatedTasks = tasks.filter(task => task.id !== 2);
```

The result is:

```js
[
    { id: 1, text: "Learn JavaScript" },
    { id: 3, text: "Push to GitHub" }
]
```

---

# 11. How filter() Deletes an Item

The important part is:

```js
task.id !== 2
```

For each task, JavaScript checks the condition.

```text
Task 1 → 1 !== 2 → true  → keep
Task 2 → 2 !== 2 → false → remove
Task 3 → 3 !== 2 → true  → keep
```

`filter()` keeps elements where the condition is `true`.

---

# 12. Creating a Delete Function

We can put the logic inside a function:

```js
let tasks = [
    { id: 1, text: "Learn JavaScript" },
    { id: 2, text: "Practice arrays" },
    { id: 3, text: "Build a project" }
];

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

deleteTask(2);

console.log(tasks);
```

After calling:

```js
deleteTask(2);
```

task `2` is removed.

---

# 13. Spread + filter()

Spread and `filter()` can work together when updating application state.

```js
const state = {
    tasks: [
        { id: 1, text: "Learn JavaScript" },
        { id: 2, text: "Build a project" },
        { id: 3, text: "Push to GitHub" }
    ]
};

const newState = {
    ...state,
    tasks: state.tasks.filter(task => task.id !== 2)
};
```

Here:

```js
...state
```

copies the existing state.

And:

```js
state.tasks.filter(task => task.id !== 2)
```

creates a new tasks array without task `2`.

---

# 14. Why Avoid Direct Mutation?

Instead of modifying an array directly:

```js
tasks.splice(index, 1);
```

we can create a new array:

```js
tasks = tasks.filter(task => task.id !== id);
```

This approach is easier to reason about and is commonly used in modern JavaScript applications and frameworks.

---

# 15. Shallow Copy

Spread creates a **shallow copy**, not a deep copy.

For example:

```js
const user = {
    name: "Gowdham",
    address: {
        city: "Nottingham"
    }
};

const copy = {
    ...user
};
```

The top-level object is copied, but nested objects are still referenced.

So spread should not automatically be considered a complete deep-cloning solution.

---

# 16. Important Syntax

### Array spread

```js
const copy = [...array];
```

### Combine arrays

```js
const combined = [...array1, ...array2];
```

### Object spread

```js
const copy = { ...object };
```

### Update object

```js
const updated = {
    ...object,
    property: newValue
};
```

### Rest parameters

```js
function example(...args) {
    console.log(args);
}
```

### Delete from array

```js
const updated = array.filter(item => item.id !== id);
```

---

# 17. Key Takeaways

1. `...` can mean **spread** or **rest** depending on where it is used.
2. Spread **expands/unpacks** arrays and objects.
3. Rest **collects** multiple function arguments into an array.
4. Spread is useful for creating updated copies of objects and arrays.
5. `filter()` can be used to remove an item without directly mutating the array.
6. `filter()` keeps elements for which its condition returns `true`.
7. Spread creates a **shallow copy**.
8. These patterns are important for working with application state.

---



> **Spread opens the box; Rest puts things into a box.**

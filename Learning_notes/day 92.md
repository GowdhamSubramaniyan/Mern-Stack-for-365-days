# Day 92 — JavaScript `map()`

## 📚 What is `map()`?

`map()` is a JavaScript array method used to **transform every element in an array and create a new array**.

It does not modify the original array.

### Basic syntax

```javascript
const newArray = array.map((item) => {
  return transformedItem;
});
```

The most important idea is:

> `map()` takes an array → transforms each element → returns a new array.

---

## 1. Basic Example

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6, 8]
```

Each number was transformed:

```text
1 → 2
2 → 4
3 → 6
4 → 8
```

---

## 2. `map()` Creates a New Array

The original array remains unchanged.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(numbers);
console.log(doubled);
```

Output:

```text
[1, 2, 3]
[2, 4, 6]
```

So:

```text
numbers  → original array
doubled  → new array
```

---

## 3. Using Arrow Functions

Because `map()` commonly uses arrow functions, it can be written more concisely.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

The following two versions are equivalent:

```javascript
numbers.map((number) => {
  return number * 2;
});
```

```javascript
numbers.map(number => number * 2);
```

---

## 4. Working With Strings

`map()` isn't only for numbers.

```javascript
const names = ["Gowdham", "Alex", "Sam"];

const greetings = names.map((name) => {
  return `Hello ${name}`;
});

console.log(greetings);
```

Output:

```text
[
  "Hello Gowdham",
  "Hello Alex",
  "Hello Sam"
]
```

Each name was transformed into a new string.

---

## 5. Using the Index

Like `forEach()`, `map()` can provide the current index.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const result = fruits.map((fruit, index) => {
  return `${index}: ${fruit}`;
});

console.log(result);
```

Output:

```text
[
  "0: Apple",
  "1: Banana",
  "2: Orange"
]
```

The callback can receive:

```javascript
(element, index, array)
```

Usually, the first parameter is the one you need.

---

## 6. `map()` With Objects

This is particularly important for building applications.

```javascript
const users = [
  { name: "Alex", age: 20 },
  { name: "Sam", age: 22 },
  { name: "John", age: 19 }
];

const names = users.map((user) => {
  return user.name;
});

console.log(names);
```

Output:

```text
["Alex", "Sam", "John"]
```

You can use `map()` to extract specific information from objects.

---

## 7. `map()` vs `forEach()`

This distinction is important.

### `forEach()`

Use `forEach()` when you want to **perform an action** for every element.

```javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});
```

It does not create a useful new array.

### `map()`

Use `map()` when you want to **transform the elements and create a new array**.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});
```

### Simple rule

```text
forEach() → perform an action
map()     → transform data
```

---

## 8. `map()` Must Return a Value

The callback should return the value that will go into the new array.

Correct:

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});
```

If you forget `return` when using a block body:

```javascript
const doubled = numbers.map((number) => {
  number * 2;
});
```

you will get:

```text
[undefined, undefined, undefined]
```

With a concise arrow function, the return is implicit:

```javascript
const doubled = numbers.map(number => number * 2);
```

---

## 9. `map()` Keeps the Same Number of Elements

If the original array has 4 elements:

```javascript
const numbers = [1, 2, 3, 4];
```

the resulting array from `map()` also has 4 elements:

```text
[...4 elements...]
```

`map()` transforms each element rather than filtering elements out.

If you want to remove elements based on a condition, `filter()` is more appropriate.

---

# 🧠 Key Takeaways

1. `map()` is an array method.
2. It runs a callback for every element.
3. It creates and returns a **new array**.
4. The original array is not changed.
5. The callback's returned value becomes an element in the new array.
6. `map()` is commonly used to transform data.
7. It can be used with numbers, strings, and objects.
8. `map()` normally returns the same number of elements as the original array.
9. `forEach()` is mainly for actions.
10. `map()` is mainly for transformations.

## 💡 Simple Mental Model

Think of:

```javascript
const doubled = numbers.map(number => number * 2);
```

as:

> **"Take every item, transform it, and give me a new array containing the results."**

### Quick comparison

```text
forEach()
Array → perform action → no new transformed array

map()
Array → transform each item → NEW array
```

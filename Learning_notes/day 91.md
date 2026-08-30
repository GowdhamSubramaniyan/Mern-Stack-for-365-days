

## 📚 What is `forEach()`?

`forEach()` is an array method in JavaScript that runs a function **once for every element in an array**.

It is useful when you want to perform an action on every item in an array.

### Basic syntax

```javascript
array.forEach((item) => {
  // code to run for each item
});
```

---

## 1. Basic Example

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```

Output:

```text
Apple
Banana
Orange
```

The function runs three times because the array contains three elements.

---

## 2. The Callback Function

The function passed into `forEach()` is called a **callback function**.

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

Here:

* `forEach()` → array method
* `fruit` → current element
* `console.log()` → action performed for each element

---

## 3. Using the Index

`forEach()` can also give us the index of the current element.

```javascript
const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Orange
```

The callback can receive:

```javascript
(element, index, array)
```

For example:

```javascript
fruits.forEach((fruit, index, array) => {
  console.log(fruit);
});
```

Usually, you only need the first one or two parameters.

---

## 4. Working With Numbers

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
```

Output:

```text
2
4
6
8
10
```

---

## 5. Changing Values

You can use `forEach()` to perform an action on each item.

```javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(`Number: ${number}`);
});
```

However, `forEach()` itself does **not create a new array**.

If you want to create a new transformed array, `map()` is usually the better method.

---

## 6. `forEach()` vs `for` Loop

Traditional `for` loop:

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Using `forEach()`:

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

`forEach()` is often cleaner when you simply want to perform an action for every element.

---

## 7. `forEach()` vs `map()`

This is important.

### `forEach()`

Used when you want to **perform an action**.

```javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  console.log(number);
});
```

### `map()`

Used when you want to **create a new array**.

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

### Remember:

> `forEach()` → do something for every item
> `map()` → transform every item into a new array

---

## 8. Important Limitation

`forEach()` does not work well when you need to stop the loop early.

You cannot normally use `break` inside a `forEach()` callback.

If you need to stop iteration based on a condition, a regular `for...of` loop may be more appropriate.

Example:

```javascript
for (const fruit of fruits) {
  if (fruit === "Banana") {
    break;
  }

  console.log(fruit);
}
```

---

# 🧠 Key Takeaways

1. `forEach()` is an array method.
2. It runs a callback function once for every element.
3. The first callback parameter is the current element.
4. The second parameter is the index.
5. `forEach()` is useful for performing actions on array elements.
6. `forEach()` does not return a new transformed array.
7. Use `map()` when you need a new array.
8. Use `for...of` when you need more control, such as `break` or `continue`.

## 💡 Simple Mental Model

Think of:

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

as:

> **"Take every fruit in this array and do this action with it."**

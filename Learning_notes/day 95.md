# Day 95 — JavaScript `reduce()`

**Date:** Thursday, September 3
**Month 4:** JavaScript Deeper — Async, Fetch & Storage
**Topic:** `reduce()` — Gentle Introduction

---

## 1. What is `reduce()`?

`reduce()` is an array method used when we want to **combine all the values in an array into one final value**.

For example, we can use it to:

* Add numbers together
* Calculate a total
* Count things# Day 95 – reduce()

**Thursday, September 3**

### What is reduce()?

`reduce()` is an array method.

It is mainly used when I want to take all the values in an array and get **one final result**.

For example, adding numbers together.

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(total);
```

Output:

```text
10
```

### How it works

The important parts are:

* `accumulator` = keeps the result so far
* `currentValue` = the current item in the array
* `0` = starting value

So it goes something like:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

So the final answer is `10`.

### Another example

```js
const prices = [10, 20, 5];

const total = prices.reduce(function(total, price) {
  return total + price;
}, 0);

console.log(total);
```

Result:

```text
35
```

### reduce() vs forEach()

I think of it like:

`forEach()` → do something with each item

`reduce()` → combine the items and get one result

Example:

```js
const numbers = [1, 2, 3];

numbers.forEach(function(number) {
  console.log(number);
});
```

This just goes through each number.

With `reduce()`:

```js
const total = numbers.reduce(function(total, number) {
  return total + number;
}, 0);
```

This gives me one result: `6`.

### Main thing to remember

```text
accumulator = result so far
currentValue = current item
initial value = starting point
```

I don't need to know everything about `reduce()` yet.

For today, I just need to understand how it can turn an array into one final value.

### Practice

```js
const numbers = [5, 10, 15];

const total = numbers.reduce(function(total, number) {
  return total + number;
}, 0);

console.log(total);
```

Answer: `30`

**Today's takeaway:**
`reduce()` is useful when I need to process an array and end up with one value.

* Build an object
* Combine data

The important idea is:

> **Many array values → one final result**

---

## 2. Simple Example

```js
const numbers = [1, 2, 3, 4];

const total = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);

console.log(total);
```

Output:

```text
10
```

JavaScript is basically doing:

```text
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
```

---

## 3. The Two Important Values

Inside `reduce()`, we usually work with:

### `accumulator`

The value that is being built up as the array is processed.

Think:

> "What have I got so far?"

### `currentValue`

The current item from the array.

Think:

> "What item am I looking at right now?"

Example:

```js
numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0);
```

Here:

```text
accumulator    → running total
currentNumber  → current number
```

---

## 4. The Initial Value

The `0` at the end is the starting value:

```js
}, 0);
```

So we start with:

```text
accumulator = 0
```

Then the array values are processed one by one.

A good habit is to **provide an initial value**, especially when learning `reduce()`.

---

## 5. `reduce()` vs `forEach()`

A `forEach()` loop is often used when we want to **do something for every item**.

```js
numbers.forEach(function (number) {
  console.log(number);
});
```

`reduce()` is useful when we want to **produce one final result**.

```js
const total = numbers.reduce(function (total, number) {
  return total + number;
}, 0);
```

### Think of it like this:

```text
forEach()
→ do something with each item

reduce()
→ combine items into one result
```

---

## 6. Another Example — Shopping Total

Imagine we have prices:

```js
const prices = [10, 20, 5];

const total = prices.reduce(function (total, price) {
  return total + price;
}, 0);

console.log(total);
```

Output:

```text
35
```

The accumulator changes like this:

```text
0 + 10 = 10
10 + 20 = 30
30 + 5 = 35
```

---

## 7. Arrow Function Version

The same code can be written more shortly:

```js
const prices = [10, 20, 5];

const total = prices.reduce((total, price) => {
  return total + price;
}, 0);
```

Or even:

```js
const total = prices.reduce((total, price) => total + price, 0);
```

For now, focus on understanding the longer version first.

---

## 8. A Useful Mental Model

When you see:

```js
array.reduce((accumulator, currentValue) => {
  return something;
}, initialValue);
```

ask yourself:

1. **What am I starting with?**
2. **What is the current item?**
3. **What do I want to carry forward?**
4. **What should the final result be?**

---

## 9. Important: Don't Overuse `reduce()`

Not everything needs `reduce()`.

If you're simply looping through items and displaying them, `forEach()` is often clearer:

```js
items.forEach(function (item) {
  console.log(item.name);
});
```

Use `reduce()` when you're actually **reducing/combing multiple values into a result**.

---

# 🧠 Today's Key Takeaway

> **`reduce()` processes an array and builds one final result.**

Remember these three things:

```text
accumulator = result so far
currentValue = item currently being processed
initialValue = where the accumulator starts
```

Example:

```js
const numbers = [1, 2, 3];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

Result:

```text
6
```

---


If you can explain what `accumulator`, `currentValue`, and `0` mean, you've achieved today's learning goal.

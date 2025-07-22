# 📘 `Set` in JavaScript

A `Set` is a built-in JavaScript object that stores **unique values** of any type, whether primitive or object references.

---

## 🧠 Why Use `Set`?

- Automatically removes duplicates.
- Has efficient lookup (`O(1)`).
- Useful in problems involving **uniqueness**, **presence checks**, **frequency filtering**, etc.
- Provides easy set operations (like union, intersection using spread and filter).

---

## 🧩 Key Properties & Methods

| Method/Property     | Description                         | Example                                     |
|---------------------|-------------------------------------------------------|---------------------------------------------|
| `new Set()`         | Creates a new `Set`.                                  | `const set = new Set();`                    |
| `add(value)`        | Adds a new value to the set.                          | `set.add(10);`                              |
| `has(value)`        | Checks if a value exists in the set.                  | `set.has(10); // true/false`                |
| `delete(value)`     | Deletes a value if it exists.                         | `set.delete(10);`                           |
| `clear()`           | Removes all elements.                                 | `set.clear();`                              |
| `size`              | Returns the number of values in the set.              | `set.size;`                                 |
| `forEach(callback)` | Executes callback for each value in insertion order.  | `set.forEach(val => console.log(val));`     |
| `values()`          | Returns an iterator of the values (same as `keys()`). | `for (let v of set.values()) { ... }`       |
| `keys()`            | Same as `values()`; for compatibility.                | `set.keys()`                                |
| `entries()`         | Returns `[value, value]` pairs for each entry.        | `for (let [v1, v2] of set.entries()) {}`    |

---

## 🧪 Common Use Cases in DSA

### ✅ Removing Duplicates

```js
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)]; // [1, 2, 3]
```

---

### ✅ Checking Uniqueness

```js
const isUnique = (str) => new Set(str).size === str.length;
```

---

### ✅ Counting Distinct Elements

```js
const nums = [1, 2, 3, 2, 1];
const distinctCount = new Set(nums).size; // 3
```

---

### ✅ Sliding Window for Unique Chunks

```js
function countGoodSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const chunk = s.slice(i, i + 3);
    if (new Set(chunk).size === 3) count++;
  }
  return count;
}
```

---

## 🔄 Iteration Example

```js
const set = new Set(['a', 'b', 'c']);
for (let val of set) {
  console.log(val); // a, b, c
}
```

---

## 📍 Tips for Interviews

- Use `Set.size` to compare length of original and deduplicated data.
- Use `Set.has()` for fast presence checking (`O(1)`).
- You can convert a `Set` to an array using `[...set]`.
- Use `set.delete(value)` inside loops to simulate shrinking windows.

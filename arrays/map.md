# 📘 `Map` in JavaScript

A `Map` is a built-in JavaScript object that holds key-value pairs, where keys can be of any type (not just strings like in regular objects).

---

## 🧠 Why Use `Map`?

- Maintains insertion order.
- Keys can be any type (`object`, `function`, etc.).
- Offers better performance for frequent additions/removals.

---

## 🧩 Key Properties & Methods

| Method/Property     | Description                                           | Example                                     |
|---------------------|-------------------------------------------------------|---------------------------------------------|
| `new Map()`         | Creates a new `Map`.                                  | `const map = new Map();`                    |
| `set(key, value)`   | Adds or updates an element.                           | `map.set('a', 1);`                          |
| `get(key)`          | Retrieves the value for the given key.                | `map.get('a'); // 1`                        |
| `has(key)`          | Checks if the key exists.                             | `map.has('a'); // true`                     |
| `delete(key)`       | Deletes the entry by key.                             | `map.delete('a');`                          |
| `clear()`           | Removes all entries.                                  | `map.clear();`                              |
| `size`              | Returns the number of entries.                        | `map.size;`                                 |
| `keys()`            | Returns an iterator of keys.                          | `for (let k of map.keys()) { ... }`         |
| `values()`          | Returns an iterator of values.                        | `for (let v of map.values()) { ... }`       |
| `entries()`         | Returns an iterator of `[key, value]` pairs.          | `for (let [k,v] of map.entries()) { ... }`  |
| `forEach(callback)` | Executes callback for each element in insertion order.| `map.forEach((v, k) => ... );`              |

---

## 🔄 Iteration Example

```js
const map = new Map([
  ['name', 'Alice'],
  ['age', 30],
  ['isStudent', false]
]);

for (let [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```


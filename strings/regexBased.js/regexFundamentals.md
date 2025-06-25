# 🧪 Regex Basics with Examples

A quick guide to regular expressions for beginners, with practical examples.

---

## 1. 🔤 Character Matching

| Pattern     | Meaning                         | Example Match                 |
|-------------|----------------------------------|-------------------------------|
| `.`         | Any character except newline     | `c.t` matches `cat`, `cut`    |
| `[abc]`     | a, b, or c                       | `gr[ae]y` matches `gray`, `grey` |
| `[^abc]`    | Not a, b, or c                   | `[^aeiou]` matches consonants |
| `[a-z]`     | Lowercase a to z                 | `s[a-z]t` matches `sat`, `set`|
| `[A-Z]`     | Uppercase A to Z                 | `[A-Z]+` matches `USA`, `NASA`|
| `[0-9]`     | Digit from 0 to 9                | `ID[0-9]` matches `ID1`, `ID9`|
| `\d`        | Digit                            | `\d\d` matches `42` in `abc42`|
| `\D`        | Non-digit                        | `\D` matches `a` in `a123`    |
| `\w`        | Word char (a-z, A-Z, 0-9, _)     | `\w+` matches `hello_123`     |
| `\W`        | Non-word char                    | `\W` matches `@` in `hi@me`   |
| `\s`        | Whitespace                       | `a\sb` matches `a b`          |
| `\S`        | Non-whitespace                   | `a\Sb` matches `a-b`, `a1b`   |

---

## 2. 🔢 Quantifiers

| Pattern      | Meaning                            | Example Match                       |
|--------------|-------------------------------------|-------------------------------------|
| `a*`         | 0 or more `a`                      | `ba*` matches `b`, `baaa`           |
| `a+`         | 1 or more `a`                      | `ba+` matches `ba`, `baaaa`         |
| `a?`         | 0 or 1 `a`                         | `ba?` matches `b`, `ba`             |
| `a{3}`       | Exactly 3 `a`s                     | `a{3}` matches `aaa`                |
| `a{2,5}`     | Between 2 and 5 `a`s               | `a{2,5}` matches `aa`, `aaa`, `aaaa`|
| `a{2,}`      | 2 or more `a`s                     | `a{2,}` matches `aa`, `aaaaaaa`     |

---

## 3. 🔁 Anchors (Position)

| Pattern  | Meaning               | Example Match                      |
|----------|------------------------|------------------------------------|
| `^`      | Start of string        | `^Hi` matches `Hi there`           |
| `$`      | End of string          | `end$` matches `The end`           |
| `\b`     | Word boundary          | `\bcat\b` matches `a cat.` but not `scatter` |
| `\B`     | Not word boundary      | `\Bend` matches `bend`, not `end`  |

```js
let RegEx = /^[12346][0-9]{5}$/;
//or
let RegEx = /^[12346]\d{5}$/;
// ^ makes sure start of number must have either of these digits - [12346]
// [0-9] makes sure that after 1st digit, rest 5 digits `{5}` can be of any number between 0-9
// $ ensures after 5 digits, number must reach end. No more digits are allowed.
```

---

## 4. 📦 Groups and Alternation

| Pattern       | Meaning                     | Example Match                         |
|---------------|------------------------------|----------------------------------------|
| `(abc)`       | Capturing group              | `(cat|dog)` matches `cat` or `dog`     |
| `a|b`         | a or b                       | `a|b` matches `a` or `b`               |
| `(?:abc)`     | Non-capturing group          | `(?:foo|bar)` matches `foo`, `bar`     |

---

## 5. 🔄 Escaping Special Characters

| Pattern    | Meaning                          | Example Match                      |
|------------|-----------------------------------|------------------------------------|
| `\.`       | Matches a literal period `.`     | `a\.b` matches `a.b`               |
| `\\`       | Matches a backslash              | `\\` matches `\`                   |
| `\*`       | Matches a literal asterisk       | `3\*4` matches `3*4`               |

---

## ✅ 6. Useful Regex Examples

```js
/\d+/           // Matches one or more digits, e.g., "123" in "abc123"
/^[A-Z]/        // Starts with a capital letter, e.g., "Hello"
/\bword\b/      // Matches the word "word" exactly
/^[a-z]{5}$/    // Exactly 5 lowercase letters, e.g., "apple"

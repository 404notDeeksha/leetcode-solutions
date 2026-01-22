---

### Patterns of Strings:

1️⃣ Traversal
2️⃣ Transformation/ Manipulation
3️⃣ Frequency 🔥
4️⃣ Two Pointers
5️⃣ Sliding Window
6️⃣ Validation
7️⃣ Sorting
8️⃣ Prefix/Suffix
9️⃣ Parsing
🔟 Hybrid

### String Basics

---

- str.length : gives length like an array of string.

- str.trim(): removes all whitespaces from string. Can also check if string is empty or not. `emptyStr.trim() === ''`

- ASCII CODE : 
    -   0 to 9 : 48 to 57
    -   a to z : 97 to 122
    -   A to Z : 65 to 90   

- Whitespaces : \n → newline; \t → tab; \r → carriage return; Unicode spaces (non-breaking space, etc.)

- s.trim() can remove starting & trailing whitespaces only.
```js
eg:
"  Hello   World  ".trim()
// "Hello   World"     
```
---

### String Functions:
---

1. "str.charCodeAt( index )" method in JavaScript returns the UTF-16 code unit (an integer between 0 and 65535) of the character at a specified index in a string. 

2. "String.fromCharCode( code )" takes one or more Unicode values (numbers) and returns the corresponding character or sequence of characters as a string.  String is keyword here.

---

### Track spaces in Strings:

1. s.indexOf(" ") - returns index of 1st occurence of space in sentence.
2. str.lastIndexOf(' ') - returns index of last occurence of space in sentence.
3. if (str[i] === ' '){}



---


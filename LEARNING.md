
### Learnings from my Practice & Interviews 

- Read Question wrong. (assumed that question asked subarray in arrays-3sum problem) 😱.
- Loop syntax : for(let i=0; i<nums.length; i++>) gives i as Number
              : for(let i in nums) gives i as String 

**CASES TO CHECKOUT ALPHANUMERIC CHARACTERS**

-use regex to check individual character.
-or replace non-alphanumeric char with blank char.
- or to SKIP REGEX, use ASCII codes.

```js
//Example:
const isAlphaNum = (char) => {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||   // 0–9
    (code >= 97 && code <= 122)     // a–z (assuming input is already lowercased)
  );
};
// A-Z: [65 to 90]
// char.charCodeAt(0) gives code value of char
```

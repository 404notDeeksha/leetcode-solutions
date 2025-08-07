
### Learnings from my Practice & Interviews 

- Read Question wrong. (assumed that question asked subarray in arrays-3sum problem) 😱.
- Loop syntax : for(let i=0; i<nums.length; i++>) gives i as Number
              : for(let i in nums) gives i as String 

**CASES TO CHECKOUT ALPHANUMERIC CHARACTERS**

<!-- Q.  -->
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

**CASES TO CHECKOUT SORTING**

<!-- Q.977 -->
-Best sorting algo can be under O(nlogn) complexity only.
- To achieve lower than this, increase Space Complexity.

**CASES TO REMOVE DUPLICATES**:
- Take one pointer where unique element will be place
- Take another pointer to iterate through array.
- append position of 1st pointer before putting in new element

- IF elements are within array index,
- Use Negation marking at index position to track duplicates.
- Element -> Mark Index -> (-)Element -> If Element<0 -> Index === Duplicate Element


### Learnings from my Practice & Interviews 

- Read Question wrong. (assumed that question asked subarray in arrays-3sum problem) 😱.
- Loop syntax : for(let i=0; i<nums.length; i++>) gives i as Number
              : for(let i in nums) gives i as String 
- In case of questions where return value must be boolean, check what gives quickest exit, checking for truths or falses. put that consition forward.

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

### Check Duplicates:
- Floyd' Detection Cycle : Time O(n), Space O(1)
- Negation Marking : Array Modify
- Using Sets : Space O(n)
- Sorting : Time O(nlogn)

**CASES TO REMOVE DUPLICATES**:
- Take one pointer where unique element will be place
- Take another pointer to iterate through array.
- append position of 1st pointer before putting in new element

- IF elements are within array index,
- Use Negation marking at index position to track duplicates.
- Element -> Mark Index -> (-)Element -> If Element<0 -> Index === Duplicate Element

## Continue & Break:
1. Continue - 
- Purpose:
- It completely stops the current loop (whether for, while, or do-while) and jumps out of it.
- When to use:
- When you’ve found what you’re looking for or don’t need to continue looping

2. Break -
- Purpose:
- It skips the rest of the current loop iteration and moves to the next iteration.
- When to use:
- When you want to ignore certain cases but still keep the loop running.

**REDUCE FUNCTION**:
```js
const nums = [3, 10, 6, 20, 4];

const max = nums.reduce((acc, cur) => {
  return cur > acc ? cur : acc;
}, nums[0]);

console.log(max); // 20
```

- In reduce, the accumulator is not a fixed variable — it is reassigned on every iteration to whatever you return.



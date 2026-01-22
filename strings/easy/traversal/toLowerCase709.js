// Leetcode Problem 709: To LowerCase
// Implementation - Traversal + string manipulation
// Strings are immutable

// Approach:
// 1. Iterate through the string.
        // - initialise every string char to a variable 'char'.
// 2. Check if any string char is in UpperCase using ASCII codes.
        // - If present , assign char to lowercase of string char.
// 3. Push all char to a new Array.
// 4. Return array after joining it.

// Complexity:
// Time : O(n)
// Space: O(n)

var toLowerCase = function (s) {
  let i = 0;
  let newStr = [];
  while (i < s.length) {
    let char = s[i];
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      char = String.fromCharCode(code + 32);
    }
    newStr.push(char);
    i++;
  }
  return newStr.join("");
};

console.log("Empty String:", toLowerCase(""));
console.log("Already Lowercase:", toLowerCase("leetcode"));
console.log("All Uppercase:", toLowerCase("HELLO"));
console.log("Mixed Case:", toLowerCase("HeLLo"));
console.log("With Special Characters:", toLowerCase("Hello@123!"));
console.log("Single Uppercase Character:", toLowerCase("A"));
console.log("Single Lowercase Character:", toLowerCase("z"));
console.log("Unicode Characters (ASCII limitation):", toLowerCase("ÄÖÜ"));

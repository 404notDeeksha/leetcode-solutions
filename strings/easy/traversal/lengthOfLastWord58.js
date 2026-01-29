// Leetcode Problem 58: Length of Last Word
// Implementation - backward tracking

// Approach:
// 1. We will Iterate through the string starting from end.
// 2. Count the no. of characters until we hit space.
// 3. If we encounter space before count increments, we will skip this case.
// 4. Return count;

// Complexity:
// Time : O(n)
// Space: O(1)

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let count = 0;
  for (let i = n; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else if (count > 0) {
      break;
    }
  }
  return count;
};

console.log("Single word:", lengthOfLastWord("Hello")); 
// Expected: 5

console.log("Trailing spaces:", lengthOfLastWord("Hello World   ")); 
// Expected: 5

console.log("Multiple spaces between words:", lengthOfLastWord("fly   me   to   the moon")); 
// Expected: 4

console.log("Only spaces:", lengthOfLastWord("     ")); 
// Expected: 0

console.log("Empty string:", lengthOfLastWord("")); 
// Expected: 0

console.log("Single character word:", lengthOfLastWord("a")); 
// Expected: 1

console.log("Word followed by newline:", lengthOfLastWord("Hello World\n")); 
// Expected: 5

console.log("Tabs and spaces mixed:", lengthOfLastWord("Hello\tWorld   ")); 
// Expected: 5 (if only space ' ' is considered a separator)

console.log("Special characters:", lengthOfLastWord("Hello @World!")); 
// Expected: 7

console.log("Unicode characters:", lengthOfLastWord("नमस्ते दुनिया")); 
// Expected: 6

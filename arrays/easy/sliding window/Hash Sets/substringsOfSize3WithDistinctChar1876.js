// LeetCode #1876. Substrings of Size Three with Distinct Characters
// Difficulty: Easy
// Category: Arrays
    
// 1st approach : Two pointers

// Problem:
// We have a string s in which we have to find number of substrings of length = 3 such that no char in substring gets repeated. same substring repeatation must be counted too.

// Intuition: 
// We will take 3 variables to store 3 consecutive characters of string s. We will compare them & append count if all three are unique. 

// Approach:
// We will iterate through array.
// We will assign 3 variables to 3 consecutive values.
// We will check if they are unique.
// If they are, count shall be appended.
// count shall be returned.

// More Optimum & easier Approach
// Time Complexity: O(n) & Space: O(1)

// Code
var countGoodSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i <= s.length - 3; i++) {
    let a = s[i],
      b = s[i + 1],
      c = s[i + 2];
    if (a !== b && b !== c && a !== c) {
      count++;
    }
  }
  return count;
};

console.log(countGoodSubstrings("xyzzaz")); //1
console.log("Empty string →", countGoodSubstrings("")); //0
console.log("String with less than 3 characters →", countGoodSubstrings("ab")); //0
console.log(
  "String with exactly 3 characters - all distinct →",
  countGoodSubstrings("abc")
); //1
console.log(
  "String with exactly 3 characters - all same →",
  countGoodSubstrings("aaa")
); //0
console.log(
  "String with more than 3 characters - no distinct triplets →",
  countGoodSubstrings("aabbaabb")
); //0
console.log("All triplets are distinct →", countGoodSubstrings("abcdef")); //4
console.log(
  "Overlapping substrings, some valid, some not →",
  countGoodSubstrings("aababcabcd")
); //5
console.log("String with repeated pattern →", countGoodSubstrings("abcabcabc"));      //7
console.log(
  "String with all identical characters →",
  countGoodSubstrings("aaaaaaa")
);  //0
console.log(
  "String with special characters and mixed case →",
  countGoodSubstrings("a!B@")
);  //2

// -----------------------------------------

// 2nd Approach : Sliding Window + Sets
// More scalable. Can work for substring of size k


// Intuition:
// We will use set to store good substring char.
// If char gets repeated, set will be modified from left until set has good substring again.

// Approach:
// Initialise two variables, count=0 & left=0.
// Iterate through the string.
//    - Check set if it already has the char.
//    - If yes, use left pointer to delete all char in set from left to right until the char gets deleted.
//    - If no, add char to set.
// Append count if size of set is === 3 at every iteration.
//    - when set size is 3, delete string char from left. append left.  
// Return count. 

// Time Complexity: O(n) & Space: O(k) //k - size of substring

var countGoodSubstrings1 = function (s) {
  let set = new Set();
  let count = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    if (set.size === 3) {
      count++;
      set.delete(s[left]);
      left++;
    }
  }
  return count;
};


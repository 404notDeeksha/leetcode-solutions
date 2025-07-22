// LeetCode #1876. Substrings of Size Three with Distinct Characters
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// More Optimum & easier Approach
//  Complexity: O(n) & Space: O(1)

// # Code
// javascript []
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

console.log(countGoodSubstrings("xyzzaz"));
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
); //2

// 2nd Appraoch :

// we will iterate over the String & will add every new element of string to a set.
// We will check if set already doesnt have same element present, if yes, we will delete all elements in set from left, till element duplication is eliminated.
// We will do this by comparing char of string from left, by tracking string from left.
// when set size will be greater than 3, count will increment.
// return count.

//Complexity: O(n) & Space: O(n)

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
    if (set.size >= 3) {
      count++;
    }
  }
  return count;
};

// console.log("",countGoodSubstrings("xyzzaz"));
// console.log("",countGoodSubstrings("aababcabc"));

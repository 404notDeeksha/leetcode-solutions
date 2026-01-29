//Leetcode #392. Is Subsequence
// Implementation: Two pointers

// Approach -
// 1. Two pointers shall move in s & t strings.
// 2. Iterate both. 
//    - We shall compare if char in t is also present in s.
// 3. At end of loop, if pointer in s reaches s.length, it is true. 

// Complexity:
// Time: O(n)
// Space: O(1)

var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }
  return i === s.length;
};

console.log("Empty String", isSubsequence("", "ahbgdc"));
console.log("Valid Sub-String", isSubsequence("abc", "ahbgdc"));
console.log("Invalid Sub-String", isSubsequence("axc", "ahbgdc"));

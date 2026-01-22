//Leetcode #392. Is Subsequence
// Implementation: Two pointerEvents:

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

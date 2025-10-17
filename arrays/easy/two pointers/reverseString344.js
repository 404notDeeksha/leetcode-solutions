// Leetcode 344. Reverse String
// Difficulty : Easy
//Approach : Two Pointers

// Problem :
// Given - input string as an array of characters.
// What to do - reverse the string.
// return - reversed string as array using in-place replacement approach & without using extra array.

// Intuition:
// Since reversal requires swapping elements from both ends, the two-pointer pattern is the most efficient way to do it — one pointer moves from the left, the other from the right, and we swap until they meet. (added why)

// Approach:
// Since we only need to reverse the array in-place,
// the most efficient way is to use two pointers — one from each end —
// and keep swapping until they meet in the center.
// This avoids using extra space and covers the array in one pass.

// Complexity:
// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(1), since we are not using any extra space.

var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
  return s;
};

console.log("Basic case", reverseString(["h", "e", "l", "l", "o"]));
// Output: ["o","l","l","e","h"]

console.log(
  "Even-length string",
  reverseString(["H", "a", "n", "n", "a", "h"])
);
// Output: ["h","a","n","n","a","H"]

console.log("Single character", reverseString(["a"]));
// Output: ["a"]

console.log("Two characters", reverseString(["A", "B"]));
// Output: ["B","A"]

console.log("Empty array", reverseString([]));
// Output: []

console.log("String with special characters", reverseString(["@", "!", "#"]));
// Output: ["#","!","@"]

console.log("String with spaces", reverseString([" ", "a", " ", "b", " "]));
// Output: [" ","b"," ","a"," "]

console.log("String with numbers", reverseString(["1", "2", "3", "4"]));
// Output: ["4","3","2","1"]

console.log(
  "String with duplicate letters",
  reverseString(["a", "a", "b", "b"])
);
// Output: ["b","b","a","a"]

// LeetCode #3: Longest Substring Without Repeating Characters
// Difficulty: Medium
// Category: Arrays
// Approach: Sliding Window & Sets

// Intuition:
// we will iterate through string.
// one pointer left shall keep track of start of set.
// we will capture all unique characters of string .
// if any char repeates itself, all elements from left of map shall be deleted until given char gets deleted. this will result in unique substring in set.
// max size of substring in the set at a given time will be captured.
// max size of set is returned.

// # Time Complexity
// O(n) for the two pointers

// # Space Complexity
// O(n) for the set

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    max = Math.max(max, set.size);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

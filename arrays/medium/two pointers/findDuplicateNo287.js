// Leetcode 287. Find the Duplicate Number
// Difficulty: Medium
// Category: Arrays

// Method: Floyd's Cycle Detection

// Problem:
// Given an array of n+1 length, with elements between [1,n] only.
// Return which is repeated number.
// Use only constant space & dont modify array.

// # Intuition
// Find duplicate number in an array of n integers where each integer is between 1 and n (inclusive).

// Code -
var findDuplicateOpt = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];

    // phase 1: meet in the cycle
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }

    // phase 2: find the entry of the cycle (duplicate)
    slow = 0;
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};


// ----------------------------------------------------------------------------------

// --- Modifies the array

// # Approach
// - Use the fact that the numbers are in the range [1, n]
// - Use the index of the array to mark the presence of a number
// - If a number is already marked (negative), it means it is a duplicate
// - Return the duplicate number
// - This approach modifies the input array, so it is not suitable for all cases
// - Tip: Remember to mark index from elements

// Complexity
// - Time complexity: O(n)
// - Space complexity: O(1)

var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]);
    if (nums[index] < 0) return index;
    nums[index] = -nums[index];
  }
  return -1;
};

// --- Takes more than extra constant space. O(n)

// Complexity
// - Time complexity: O(n)
// - Space complexity: O(n)

var findDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return nums[i];
    set.add(nums[i]);
  }
  return -1;
};

// Edge Cases -


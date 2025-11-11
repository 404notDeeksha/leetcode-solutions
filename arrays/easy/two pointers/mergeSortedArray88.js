// LeetCode #88: Merge
// Difficulty: Easy
// Category: Arrays
// Approach: Two Pointers

// Problem:
// Given two arrays sorted in increasing order, we shall return one single array sorted in increasing order, by merging elements in-place.

//Intuition:
// We can use two pointers to track elements in two arrays.
// We will use k pointer to keep track of position where larger element will be placed
// We start merging from the end to avoid overwriting elements in nums1 that are yet to be compared.

// Approach:
// We will initialise all three pointers based on m & n values.
// We will iterate through both arrays until j>=0 (nums2 gets consumed).
//    - Compare nums1[i] & nums2[j]. Greater of these will be copied to kth position of nums1.
//    - decrement `k` & the pointer with greater element.
// If nums1 gets exhausted before nums2, focus on copying nums2 elements with (i<0)
// Return nums1

// Time Complexity: O(m+n)
// Space Complexity: O(1)

// Code
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let k = m + n - 1;
  let j = n - 1;
  let i = m - 1;

  while (j >= 0) {
    if (i < 0 || nums2[j] >= nums1[i]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
  return nums1;
};

// Edge Cases

console.log(
  "Both arrays non-empty:",
  merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
); // [1,2,2,3,5,6]
console.log("nums2 empty:", merge([1, 2, 3], 3, [], 0)); // [1,2,3]
console.log("nums1 empty (except zeros):", merge([0, 0, 0], 0, [2, 5, 6], 3)); // [2,5,6]
console.log(
  "nums2 smaller elements:",
  merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3)
); // [1,2,3,4,5,6]
console.log("Interleaved merge:", merge([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3)); // [1,2,3,4,5,6]
console.log("Duplicate elements:", merge([1, 2, 3, 0, 0, 0], 3, [1, 2, 3], 3)); // [1,1,2,2,3,3]
console.log(
  "Negative numbers:",
  merge([-3, -2, -1, 0, 0, 0], 3, [-5, -4, -2], 3)
); // [-5,-4,-3,-2,-2,-1]
console.log("Single element merge:", merge([1, 0], 1, [2], 1)); // [1,2]
console.log("All same elements:", merge([2, 2, 2, 0, 0, 0], 3, [2, 2, 2], 3)); // [2,2,2,2,2,2]
console.log(
  "nums1 smaller but not empty:",
  merge([1, 0, 0, 0], 1, [2, 3, 4], 3)
); // [1,2,3,4]

//  Tricky - j is conditional body & merging must continue even if i pointer < 0.
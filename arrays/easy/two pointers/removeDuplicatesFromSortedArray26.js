// Leetcode 26. Remove Duplicates from Sorted Array
// Difficulty: Easy
// Approach: Two Pointers

// Problem
// integer array nums is sorted in ascending order.
// duplicates present in array shall be removed in-place.
// return length of unique elements.
// elements order must be maintained.

// Intuition:
// Since the array is sorted, we can use two pointers to keep track of unique elements.
// The first pointer(i) will keep track of position to compare jth element & incremented to insert unique element. the second pointer(j) will trace array.
// elements will be swapped when they dont match.

//Complexity:
// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1), since we are modifying the array in place and not using any extra space.

// Code
var removeDuplicates = function (nums) {
  let i = -1;
  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      nums[++i] = nums[j];
    }
    j++;
  }
  return i + 1;
};

// // 🧪 Edge Case Tests

console.log("Typical case:", (() => {
    let arr = [1, 1, 2];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [2, [1, 2]]
  
  console.log("All unique:", (() => {
    let arr = [1, 2, 3, 4];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [4, [1,2,3,4]]
  
  console.log("All duplicates:", (() => {
    let arr = [2, 2, 2, 2];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [1, [2]]
  
  console.log("Single element:", (() => {
    let arr = [5];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [1, [5]]
  
  console.log("Empty array:", (() => {
    let arr = [];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [0, []]
  
  console.log("Negative numbers:", (() => {
    let arr = [-3, -3, -2, -1, -1, 0];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [4, [-3,-2,-1,0]]
  
  console.log("Large range sorted:", (() => {
    let arr = [0, 0, 1, 1, 1, 2, 3, 3, 4];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [5, [0,1,2,3,4]]
  
  console.log("Two alternating values:", (() => {
    let arr = [1, 1, 2, 2, 2, 3, 3];
    let k = removeDuplicates(arr);
    return [k, arr.slice(0, k)];
  })());
  // [3, [1,2,3]]
  

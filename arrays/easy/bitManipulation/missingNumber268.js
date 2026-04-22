// Leetcode: 268
// Approach: Bit Manipulation (XOR Cancellation Technique)
//
// Problem Statement:
// Given an array nums containing n distinct numbers taken from the range [0, n],
// return the only number that is missing from the array.
//
// Intuition:
// We use the XOR operation to cancel out matching numbers from two sets:
// 1. All numbers from 0 → n
// 2. All elements present in the array
//
// Since a ^ a = 0 and a ^ 0 = a, all numbers that appear in both sets will cancel out. The only number that does not have a pair (i.e., the missing one)will remain at the end.
//
// XOR works here because:
// - Every number appears exactly once in the full range [0, n]
// - Every number except one appears in the array
// - So all common elements cancel, leaving the missing number
//
// Approach (Step-by-step):
// 1. Initialize a variable 'xor' with value = n (nums.length).
// 2. Traverse the array using index i from 0 → n-1:
//    a. XOR both index and value → xor ^= i ^ nums[i]
// 3. After traversal, 'xor' will contain the missing number.
// 4. ^= must be without space.
//
// Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)

// code:
var missingNumber = function (nums) {
  let xor = nums.length;
  for (let i = 0; i < nums.length; i++) {
    xor ^= i ^ nums[i];
  }
  return xor;
};

console.log("Smallest case:", missingNumber([0])); // 1

console.log("Missing 0:", missingNumber([1, 2, 3])); // 0

console.log("Missing n:", missingNumber([0, 1, 2])); // 3

console.log("Single element:", missingNumber([1])); // 0

console.log("Random order:", missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8

// Another approach -
// var missingNumber = function(nums) {
//     let n = nums.length;
//     let expected = (n * (n + 1)) / 2;
//     let actual = nums.reduce((sum, num) => sum + num, 0);
//     return expected - actual;
// };

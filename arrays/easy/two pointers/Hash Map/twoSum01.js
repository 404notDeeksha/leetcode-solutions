// Leetcode 1. Two Sum
// Difficulty: Easy
// Implementation: HashMap + Two pointer

// -----------------------------
// Problem
// - We have an integers array & a target integer.
// - We shall return index of two array elements who add up to be equal to target.
// - Return value must be enclosed in an array [].

// Intuition
// We need to capture two indices whose elements will add upto target.
// We can use Hashmap which will store target - element against indice.

// -----------------------------
// Approach:
// Given an array of integers, we need to find two numbers such that they add up to a specific target.
// We can use a hashmap to solve this problem.
// We will iterate through the array and for each element, we will check if (target - element) exists in the hashmap.
// If it exists, we have found the two numbers and we can return their indices.
// If it does not exist, we will add the element to the hashmap along with its index.
// If no favorable indices are found, we shall return an empty array.

// -----------------------------
// Complexity:
// Time complexity: O(n)
// Space complexity: O(n)

// -----------------------------
// Code:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    if (map.has(key)) {
      return [map.get(key), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

// -----------------------------
// Edge Cases:
console.log("Empty Array", twoSum([], 5)); // []
console.log("Duplicates", twoSum([3, 3, 4, 5], 6)); // [1,2]
console.log("Negative Numbers", twoSum([-3, 4, 3, 90], 0)); // [0,2]
console.log("Large Numbers", twoSum([1000000, 2000000, 3000000], 5000000)); // [1,2]
console.log("No Solution", twoSum([1, 2, 3], 7)); // []
console.log("Zeroes", twoSum([0, 4, 3, 0], 0)); // [0,3]
console.log("Single Element", twoSum([1], 1)); // []
console.log("Floating Point Numbers", twoSum([1.5, 2.5, 3.5], 4)); // [0,1]

// -----------------------------
// Test Cases:
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum("Unsorted Number", [3, 2, 4], 6)); // [1,2]

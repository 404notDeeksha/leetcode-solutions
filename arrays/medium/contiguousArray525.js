//Leetcode 525. Contiguous Array
// Difficulty: Medium
// Implementation: Prefix sum & HashMap

// Approach:
// Given an array of 0s and 1s, we need to find the longest contiguous subarray with equal number of 0s and 1s.
// We can replace 0 with -1, so the problem becomes finding the longest contiguous subarray with sum 0.
// now, Problem becomes easy when all 0 are replaced with -1
// so its now, find longest subarray with sum 0
// We can use prefix sum and hashmap to solve this problem.
// We will keep track of the prefix sum and its index in a hashmap.
// Instead of actually updating 0 elements to -1, we will use -1 in place of 0 while calculating sum.
// If we find the same prefix sum again, it means the subarray between the two indices has sum 0.
// We can calculate the length of this subarray and update the maximum length if it is greater than the previous maximum length.

//Complexity:
// Time: O(n), where n is the length of the input array.
// Space: O(n), for the hashmap to store prefix sums and their indices.
/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxLength = function (nums) {
  let map = new Map();
  map.set(0, -1);
  let sum = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] === 0 ? sum - 1 : sum + 1;
    if (map.has(sum)) {
      maxLen = Math.max(maxLen, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
};
// len = 6
// {0: 5, -1: 4, -2: 3,   }
// sum = -1+1-1-1+1+1
// [0 1 0 0 1 1 0 1 0 1]
// Edge cases:

console.log("Balance in the Middle",findMaxLength([0, 1, 0, 0, 1, 1, 0, 1, 0, 1]));     //10
console.log("Multiple Equal-Length Balanced Subarrays",findMaxLength([0, 1, 0, 1, 0, 1]));     //6
console.log("Early Balance, Then Imbalance", findMaxLength([0, 1, 0]));    //2
console.log("Empty array", findMaxLength([]));    //0
console.log("All Zeroes", findMaxLength([0,0,0,0,0,0]));    //0
console.log("All Ones", findMaxLength([1,1,1,1,1]));    //0
console.log("Balanced Only at the End", findMaxLength([1,1,1,0,0,0]));    //6



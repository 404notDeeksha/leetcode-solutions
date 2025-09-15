// LeetCode #643: Maximum Avg SubArray of Size K
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// max sum of size k has to be tracked

// # Approach
// - Evaluate sum of first k elements of array.
// - Assign sum to max value.
// - Iterate through rest of array & evaluate subsequent sum of k elements gradually by adding a new element & removing starting element of array.
// - get max value out of all sum values.

// # Complexity
// - Time complexity:
// - O(k) for the sum of the first k elements
// - O(n-k) for the rest of the elements
// - O(n) in total for the two pointers

// - Space complexity:
// - O(1) for the variables

// # Code
// javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum = sum + nums[j];
  }
  let maxSum = sum;
  for (let j = k; j < nums.length; j++) {
    sum = sum - nums[j - k] + nums[j];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};

// Another Approach -
var findMaxAverageOther = function (nums, k) {
  let maxSum = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i >= k) {
      sum = sum - nums[i - k];
    }
    sum = sum + nums[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum / k;
};

// EDGE CASES
// 1. Single element array (k = 1)
console.log("Case 1", findMaxAverage([5], 1)); // 5

// 2. All elements are the same
console.log("Case 2", findMaxAverage([3, 3, 3, 3], 2)); // 3

// 3. Array with negatives only
console.log("Case 3", findMaxAverage([-5, -2, -7, -3], 2)); // -3.5

// 4. Mixed positive & negative
console.log("Case 4", findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75

// 5. k equals full array length
console.log("Case 5", findMaxAverage([4, 2, 1, 3], 4)); // 2.5

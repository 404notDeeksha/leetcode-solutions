// Leetcode 726/ 724. Pivot Index
// Difficulty: Easy
// Approach: Two Pointers

// Problem:
// - We need to find the pivot index of an array.
// - The pivot index is the index where the sum of the elements to the left is equal to the sum of the elements to the right. The left most index is needed.
// return -1 if none exists.

// Intuition:
// - We can use two pointers to find the pivot index.
// - We can use a variable to keep track of the total sum of the array.
// - We can use a variable to keep track of the left sum.
// - We can iterate through the array and check if the left sum is equal to the right sum, by subtracting the current element and the left sum from the total sum.
// - If they are equal, we return the current index.
// - If we reach the end of the array and do not find a pivot index, we return -1.

// Complexity:
// - Time Complexity: O(n), where n is the number of elements in the array.
// - Space Complexity: O(1), as we are not using any extra space for the array.
// - We are only using a few variables to keep track of the total sum and the left sum.
// - The space complexity is constant, as we are not using any extra space for the array.

// Code
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// 🧪 Edge Case Tests

console.log("Typical case:", pivotIndex([1, 7, 3, 6, 5, 6]));
// 3 → left=11, right=11

console.log("Pivot at index 0:", pivotIndex([2, 1, -1]));
// 0 → left=0, right=0

console.log("Pivot at last index:", pivotIndex([-1, -1, 0, 1, 1, 0]));
// 5 → left sum = right sum = 0

console.log("No pivot exists:", pivotIndex([1, 2, 3]));
// -1

console.log("All zeros:", pivotIndex([0, 0, 0, 0, 0]));
// 0 → first index works, left=0, right=0

console.log("Single element:", pivotIndex([5]));
// 0 → left=0, right=0

console.log("Negative numbers:", pivotIndex([-1, -1, -1, 0, 1, 1]));
// 0 → left=0, right=0

console.log("Two elements no pivot:", pivotIndex([1, -1]));
// -1

console.log("Large numbers:", pivotIndex([1000000, -999999, -1, 0]));
// 3 → left=0, right=0

console.log("All equal elements:", pivotIndex([2, 2, 2, 2, 2, 2]));
// -1 → no position balances left/right

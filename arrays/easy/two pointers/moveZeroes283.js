// Leetcode 283. Move Zeroes
// Difficulty: Easy
// Approach: Two Pointers

// Intuition:
// We can use the two pointers approach to solve this problem.
// we will iterate through the array and keep track of the first zero element.
// When we encounter a non-zero element, we will swap it with the first zero element.
// This way, we will move all the zero elements to the end of the array while maintaining the order of the non-zero elements.

// Another way of doing this is to place all non-0s elements into 0's positions in array, & filling rest of array with 0s (more faster)

// Complexity:
// Time Complexity: O(n), where n is the length of the input array.
// Space Complexity: O(1), since we are not using any extra space.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let pos = 0;
  let i = 0;
  while (i < nums.length) {
    if (nums[i] !== 0) {
      [nums[pos], nums[i]] = [nums[i], nums[pos]];
      pos++;
    }
    i++;
  }
  return nums;
};

// 🧪 Edge Case Tests

console.log("Mixed zeros and numbers:", moveZeroes([0, 1, 0, 3, 12]));
// [1,3,12,0,0]

console.log("All zeros:", moveZeroes([0, 0, 0, 0]));
// [0,0,0,0]

console.log("No zeros:", moveZeroes([1, 2, 3, 4]));
// [1,2,3,4]

console.log("Zeros at end already:", moveZeroes([1, 2, 3, 0, 0]));
// [1,2,3,0,0]

console.log("Zeros at start:", moveZeroes([0, 0, 1, 2, 3]));
// [1,2,3,0,0]

console.log("Single element zero:", moveZeroes([0]));
// [0]

console.log("Single element non-zero:", moveZeroes([5]));
// [5]

console.log("Alternating zeros:", moveZeroes([0, 5, 0, 4, 0, 3, 0, 2]));
// [5,4,3,2,0,0,0,0]

console.log("Negative numbers and zeros:", moveZeroes([0, -1, 0, -2, 3]));
// [-1,-2,3,0,0]

console.log("Zeros scattered:", moveZeroes([4, 0, 5, 0, 0, 3, 0, 2, 0]));
// [4,5,3,2,0,0,0,0,0]

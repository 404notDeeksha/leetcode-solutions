// Leetcode: 977. Squares of a Sorted Array
// Difficulty: Easy
// Approach: Two pointer

//Optimised Solution:

// Problem - given a sorted array, return it in form of squares of array elements sorted.

// Intuition:
// In order to have only O(n) time complexity, we will have to do squaring & sorting in single iteration.
// We can have two pointers, left & right, pointing to start & end of the array.
// We will create a new array to sequentially & store the values in it in sorted order, and a pointer index which will point to the last index of the new array.
// We will iterate through the array & compare squares of left & right pointer elements.
// The Larger square will be stored in new array at index pointer, and pointer shall be decremented.
// Whichever pointer gave the larger square will either be incremented (if left pointer) or decremented (if right pointer).
// Code will run until left & right pointers meet.
// Finally, we will return the new array which will be sorted in ascending order as required.

// Time Complexity: O(n)
// Space Complexity: O(n)

//Tried whole myself
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let arr = new Array(nums.length - 1).fill(0);
  let k = right;
  while (left <= right) {
    let leftSq = Math.pow(nums[left], 2);
    let rightSq = Math.pow(nums[right], 2);
    if (leftSq <= rightSq) {
      arr[k] = rightSq;
      right--;
    } else {
      arr[k] = leftSq;
      left++;
    }
    k--;
  }
  return arr;
};

//Tried-failed-updated
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let result = new Array(nums.length);
  let index = nums.length - 1;

  while (left <= right) {
    let leftSq = nums[left] * nums[left];
    let rightSq = nums[right] * nums[right];

    if (leftSq > rightSq) {
      result[index] = leftSq;
      left++;
    } else {
      result[index] = rightSq;
      right--;
    }
    index--;
  }
  return result;
};

// Tricky part - last element must also be placed

// -------------------

// Not Optimised
//Time Complexity: O(nlogn)
// Space Complexity: O(n)

var sortedSquaresSortFn = function (nums) {
  nums = nums.map((ele) => ele * ele);
  nums.sort((a, b) => a - b);
  return nums;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]

// Edge cases -

// 🧪 Edge Case Tests
console.log(
  "Mixed negatives and positives:",
  sortedSquares([-4, -1, 0, 3, 10])
);
// [0,1,9,16,100]

console.log("All negatives:", sortedSquares([-7, -3, -1]));
// [1,9,49]

console.log("All positives:", sortedSquares([1, 2, 3, 4]));
// [1,4,9,16]

console.log("Including zero only:", sortedSquares([0]));
// [0]

console.log("Zeros and positives:", sortedSquares([0, 2, 3]));
// [0,4,9]

console.log("Zeros and negatives:", sortedSquares([-3, -2, 0]));
// [0,4,9]

console.log("Duplicate absolute values:", sortedSquares([-2, -2, 2, 2]));
// [4,4,4,4]

console.log("Single element positive:", sortedSquares([5]));
// [25]

console.log("Single element negative:", sortedSquares([-5]));
// [25]

console.log("Already all zeros:", sortedSquares([0, 0, 0]));
// [0,0,0]

console.log("Large range:", sortedSquares([-10000, -1, 0, 1, 10000]));
// [0,1,1,100000000,100000000]

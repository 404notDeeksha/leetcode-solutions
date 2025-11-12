// LeetCode #448: Find all Numbers Disappeared in an Array
// Difficulty: Easy
// Category: Arrays
// Approach: Array manipulation/ In-place marking

// 1st solution - Optimum approach

// Problem:
// Given an array of integers has all elements in range [1,n]. We have to return elements which are absent in array.

// Intuition
// - Mark all the nos which are present wrto indexes in array as -ve form of that number.
// - result will have indexes whose elements are positive.

// Approach:
// 1. Iterate through the array.
//      - as per array elements, deduce relevant index.
//      - index is calculated with +ve form of element.
// 2. Iterate again to deduce numbers which are positive.
//      - store indexes + 1 of positive numbers in array.
// 3. Return the array.

// Complexity
// - Time complexity:
// - O(n) for the two pointers
// - O(n) for the result array

// - Space complexity:
// - O(n) for the result array

// # Code
// javascript []
var findDisappearedNumbersO = function (nums) {
  let n = nums.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};

// 1. No missing numbers
console.log("No missing numbers", findDisappearedNumbersO([1,2,3,4,5]));
// Expected: []

// 2. All numbers same
console.log("All numbers same", findDisappearedNumbersO([1,1,1,1,1]));
// Expected: [2,3,4,5]

// 3. Random missing numbers
console.log("Random missing numbers", findDisappearedNumbersO([4,3,2,7,8,2,3,1]));
// Expected: [5,6]

// 4. Single element present (n=1)
console.log("Single element - present", findDisappearedNumbersO([1]));
// Expected: []

console.log("Single element - missing", findDisappearedNumbersO([2]));
// Expected: [1]

// 5. Empty array
console.log("Empty array", findDisappearedNumbersO([]));
// Expected: []

// 6. Duplicates at start or end
console.log("Duplicates at start/end", findDisappearedNumbersO([2,2,3,3,4,4]));
// Expected: [1,5,6]

// --------------------------------

// 2nd approach:

// Intuition:
// - track the numbers that are present in the array

// # Approach
// - Sort the array
// - Use two pointers to track the numbers.
// - The first pointer will track the current number
// - The second pointer will track the consecutive range of numbers from 1 to n
// - If the first pointer is equal to the second pointer, move both pointers forward
// - If the first pointer is greater than the second pointer, means array has missing elements .add the second pointer to the result array and move the second pointer forward.
// - If the first pointer is less than the second pointer, move the first pointer forward.
// - After the first pointer reaches the end of the array, add the remaining numbers from the second pointer to the result array
// - Return the result array

// # Complexity
// - Time complexity:
// - O(nlogn) for sorting the array
// - O(n) for the two pointers
// - O(n) for the result array
// - O(n) for the final result array

// - Space complexity:
// - O(n) for the result array

// # Code
// javascript []
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let j = 1;
  let i = 0;
  let arr = [];
  nums.sort((a, b) => a - b);
  while (i < n) {
    if (nums[i] === j) {
      j++;
      i++;
    } else if (nums[i] > j) {
      arr.push(j);
      j++;
    } else {
      i++;
    }
  }
  while (j <= n) {
    arr.push(j);
    j++;
  }
  return arr;
};

console.log(findDisappearedNumbers([1, 1]));

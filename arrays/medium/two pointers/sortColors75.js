// 75. Sort Colors:  Dutch National Flag algorithm
// Two Pointers pattern (extended to three pointers).
// Specifically designed for in-place partitioning problems with three fixed pointers.

// Problem:
// - Given an array where elements represent objects.
// - Contains 3 colors as 0, 1, 2.
// - All colors of similiar type must be sorted from start to end.

//  APPROACH:
// 1. Placement of 0s, 1s & 2s are made to fit blocks in arrays.
// 2. We use 3 pointers:
// low → next place for 0
// mid → current element
// high → next place for 2
// Swap the elements based on 0s, 1s & 2s

// Complexity
// Time: O(n)
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0,
    mid = 0,
    high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      mid++;
      low++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }

  return nums;
};

// Edge cases:

// ✅ Base Example
let arr1 = [2, 0, 2, 1, 1, 0];
sortColors(arr1);
console.log("Base Example", arr1); // [0,0,1,1,2,2]

// ✅ Edge case: Already sorted
let arr2 = [0, 0, 1, 1, 2, 2];
sortColors(arr2);
console.log("Already sorted", arr2); // [0,0,1,1,2,2]

// ✅ Edge case: Reverse sorted
let arr3 = [2, 2, 1, 1, 0, 0];
sortColors(arr3);
console.log("Reverse sorted", arr3); // [0,0,1,1,2,2]

// ✅ Edge case: Single element (0)
let arr4 = [0];
sortColors(arr4);
console.log("Single element 0", arr4); // [0]

// ✅ Edge case: Single element (1)
let arr5 = [1];
sortColors(arr5);
console.log("Single element 1", arr5); // [1]

// ✅ Edge case: Single element (2)
let arr6 = [2];
sortColors(arr6);
console.log("Single element 2", arr6); // [2]

// ✅ Edge case: Only zeros
let arr7 = [0, 0, 0];
sortColors(arr7);
console.log("Only zeros", arr7); // [0,0,0]

// ✅ Edge case: Only ones
let arr8 = [1, 1, 1];
sortColors(arr8);
console.log("Only ones", arr8); // [1,1,1]

// ✅ Edge case: Only twos
let arr9 = [2, 2, 2];
sortColors(arr9);
console.log("Only twos", arr9); // [2,2,2]

// ✅ Edge case: Empty array
let arr10 = [];
sortColors(arr10);
console.log("Empty array", arr10); // []

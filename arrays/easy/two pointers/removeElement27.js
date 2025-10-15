// Leetcode 27. Remove Element
// Difficulty: Easy
// Approach: Two Pointers

// --------------------------------
// Problem:
// Given: is integer array `nums` & an integer `val`.
// What to do: Modify integer array `nums` so that it only has non-val elements present.
// Return: the number of elements in nums which are not equal to val.

// --------------------------------
// Intuition:
// What you care about: val elements compacted at start of `nums`.
// What you don't care about: order of elements after overlapping.
//          - Since val elements are not to be tracked, they can be overlapped with non-val elements, by using two pointers.

// --------------------------------
// Approach:
// What method will i use?
// Why only using this method?
// 1. We will iterate over all elements of an array using j- pointer.
// 2. An index (initially = 0) pointing to location of element eligible to be overlapped can be tracked using a pointer (i).
// 3. While iterating, if we get a non-val element, we will put it in i-th place. i shall be incremented in this case.
// 4. Thus all non-val elements will get shifted to the start of the array.
// 5. Location of i will be returned as length of non-val elements.

// --------------------------------
// Complexity:
// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1), since we are modifying the array in place and not using any extra space.

var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// --------------------------------
// Test Cases:
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Output: 5

// --------------------------------
// Edge Cases:
console.log(removeElement([], 1)); // Output: 0 (empty array)
console.log(removeElement([3, 3, 3], 3)); // Output: 0 (all elements are val)
console.log(removeElement([1, 2, 4], 3)); // Output: 3 (no element equals val)
console.log(removeElement([3], 3)); // Output: 0 (single element equals val)
console.log(removeElement([2], 3)); // Output: 1 (single element not equal to val)

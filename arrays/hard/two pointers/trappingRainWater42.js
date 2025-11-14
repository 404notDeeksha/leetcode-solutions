// Leetcode: 42
// Difficulty: Hard
// Pattern : Two pointers

// Problem
// Given an array of non-negative integer ( 0s & integers) which represent elevation, having width of 1.
// Return the area captured by elevations & widths.

// 1st approach: Brute Force

// Intuition:
// - Smaller Boundary is the limiting factor to hold water.
// - To hold water, an element's left side & right side must be picked & minimum of these must be more than the element.
// - store total water in a variable.

// Approach:
// 1. We will use a pointer to iterate through each element of array, & save any element on its left (if its bigger than it) in leftMax, & any element on its right (if its bigger than it) in rightMax.
// 2. for each element, min of its (leftMax & rightMax) - element itself will contain the water.
// 3. res will be iterated as per water contained.

// Complexity
// Time: O(n^2)
// Space: O(1)

var trapBF = function (height) {
  let res = 0;

  for (let i = 0; i < height.length; i++) {
    let leftMax = 0,
      rightMax = 0;
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, height[j]);
    }
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j]);
    }
    res = res + Math.min(leftMax, rightMax) - height[i];
  }
  return res;
};

// ------------------------

// 2nd Approach: Two pointer

// Intuition:
// The amount of water that can be trapped at any point depends on the minimum of the tallest walls on its left and right.
// So if the left wall is shorter, the trapped water on that side is final (it won’t change even if the right side moves inward), because any taller wall on the right will only make the minimum stay the same or increase.
// Hence, move the pointer from the shorter side inward, updating the running max and collecting water as you go.

// Complexity:
// Time: O(n);
// Space: O(1)

//Code:
var trap = function (height) {
  let water = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (leftMax <= height[left]) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (rightMax <= height[right]) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }
  return water;
};

// Edge Cases

// Base Case
console.log("Empty Array", trap([])); // 0

// Single element
console.log("Single Bar", trap([5])); // 0 (no boundaries)

// Two bars
console.log("Two Bars", trap([5, 1])); // 0 (water can't be trapped)

// Flat land
console.log("All Same Height", trap([3, 3, 3, 3])); // 0

// Strictly increasing
console.log("Increasing Heights", trap([1, 2, 3, 4, 5])); // 0

// Strictly decreasing
console.log("Decreasing Heights", trap([5, 4, 3, 2, 1])); // 0

// Classic valley
console.log("Valley Shape", trap([3, 0, 3])); // 3

// Multiple valleys
console.log("Multiple Valleys", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6

// Deep pit in middle
console.log("Deep Pit", trap([5, 0, 0, 0, 5])); // 15

// High wall then flat
console.log("Wall and Flat", trap([4, 0, 0, 0, 0])); // 0 (no right boundary)

// Zig-zag
console.log("ZigZag", trap([0, 2, 0, 2, 0, 2])); // 4

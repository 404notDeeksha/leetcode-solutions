// Leetcode: 42
// Difficulty: Hard
// Pattern : Two pointers

// Problem
// Given an array of non-negative integer ( 0s & integers) which represent elevation, having width of 1.
// Return the area captured by elevations & widths.

// 1st approach: Brute Force

// 1. We will use a pointer to iterate through each element of array, & save any element on its left (if its bigger than it) in leftMax, & any element on its right (if its bigger than it) in rightMax. 
// 2. for each element, min of its(leftMax & rightMax) - element itself will contain the water.
// 3. res will be iterated as per water contained.

var trapBF = function(height) {
    let res = 0;
   
    for(let i = 0 ; i < height.length; i++){
         let leftMax=0, rightMax=0;
        for(let j=0; j<=i; j++){
            leftMax = Math.max(leftMax, height[j]);
        }
        for(let j=i ; j<height.length ; j++){
            rightMax = Math.max(rightMax, height[j])
        }
        res = res + Math.min(leftMax, rightMax) - height[i];
    }
return res;
};

// 2nd Approach: Two pointer



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

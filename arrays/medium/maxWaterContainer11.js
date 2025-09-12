// Leetcode 11. Container With Most Water
// Difficulty: Medium
// Approach: Two pointers

// Inuition:
// Given an array of heights, we need to find the maximum area of water that can be contained between two lines.
// We can use two pointers to solve this problem.
// We will start with two pointers, one at the beginning and one at the end of the array.
// We will calculate the area between the two lines and update the maximum area if it is greater than the previous maximum area.
// We will move the pointer with the smaller height towards the other pointer.
// We will repeat this process until the two pointers meet.
// The area between two lines is given by the formula: area = min(height[left], height[right]) * (right - left)
// The maximum area is the maximum of all the areas calculated.

// Complexity:
// Time complexity: O(n)
// Space complexity: O(1)

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let max=0;
    while(left<right){
        let diff=right-left; let small=0;
        if(height[left]<=height[right]){
            small=height[left];
            left++;
            }else{
            small=height[right];
            right--;
            }
        max=Math.max(max,diff*small);
    }
    return max;
};

// ✅ Base Example
console.log("Base Example", maxArea([1,8,6,2,5,4,8,3,7])); 
// Expected: 49 (between lines at indices 1 and 8)

// ✅ Edge case: Minimum size array
console.log("Two elements only", maxArea([1,1])); 
// Expected: 1

// ✅ Edge case: Increasing heights
console.log("Increasing heights", maxArea([1,2,3,4,5])); 
// Expected: 6 (between 2 and 5)

// ✅ Edge case: Decreasing heights
console.log("Decreasing heights", maxArea([5,4,3,2,1])); 
// Expected: 6 (between 5 and 2)

// ✅ Edge case: All same heights
console.log("All same heights", maxArea([5,5,5,5,5])); 
// Expected: 20 (5 * distance 4)

// ✅ Edge case: Large peak in middle
console.log("Peak in middle", maxArea([1,2,100,2,1])); 
// Expected: 4 (between first and last, height = 1, width = 4)

// ✅ Edge case: Single very tall + small others
console.log("One tall, others small", maxArea([1000,1,1,1,1000])); 
// Expected: 4000 (between first and last)

// ✅ Edge case: Zig-zag heights
console.log("Zig-zag heights", maxArea([1,3,2,5,25,24,5])); 
// Expected: 24 (between 25 and 5 at index 6)

// ✅ Edge case: Empty array
console.log("Empty array", maxArea([])); 
// Expected: 0

// ✅ Edge case: One element only
console.log("Single element", maxArea([5])); 
// Expected: 0

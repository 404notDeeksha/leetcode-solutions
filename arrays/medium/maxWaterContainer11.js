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

console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49
console.log(maxArea([1,1])); //1
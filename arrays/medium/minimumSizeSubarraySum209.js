// LeetCode #209: Minimum Size Subarray Sum
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers & Sliding Window

// # Intuition
// subarray length has to be tracked

// # Approach
// - Use two pointers to find the minimum length of subarray
// - Use a variable to keep track of the sum of the subarray
// - Use a variable to keep track of the minimum length of the subarray
// - Use a variable to keep track of the starting index of the subarray
// - Use a variable to keep track of the ending index of the subarray
// - We will iterate through array, & calculate sum with each new element.
// - If sum becomes greater or equal to target, we will capture subsequent min subarray length.
// - we will iterate until sum again becomes less than target , incrementing starting index of subarray subsequently.
// - return the length of the subarray

// # Complexity
// - Time complexity:
// - O(n) for the two pointers

// - Space complexity:
// - O(1) for the variables

// # Code
// javascript []
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(target, nums) {
    let n=nums.length;    
    let length=Number.MAX_VALUE;
    let j=0;
    let i=0; 
    let sum=0;
    for(let j=0;j<n;j++){
      sum=sum+nums[j];
      
      while(sum>=target){
        length=Math.min(length,j-i+1);
        sum=sum-nums[i];
        i++;
        }      
    }
    return length===Number.MAX_VALUE? 0: length;
};


// Single element smaller than target
console.log("Single element < target", minSubArrayLen(7, [5])); // 0

// Single element equal to target
console.log("Single element == target", minSubArrayLen(5, [5])); // 1

// Target larger than total array sum
console.log("Target > total sum", minSubArrayLen(15, [1, 2, 3, 4])); // 0

// Whole array needed to meet target
console.log("Whole array required", minSubArrayLen(11, [1, 2, 3, 4, 1])); // 5

// Multiple valid subarrays, pick shortest
console.log("Multiple subarrays, shortest chosen", minSubArrayLen(11, [1, 2, 3, 4, 5])); // 3

// Shorter subarray appears later
console.log("Shorter window later in array", minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2


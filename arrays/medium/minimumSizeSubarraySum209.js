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


console.log(minSubArrayLen(11,[1,2,3,4,5]));
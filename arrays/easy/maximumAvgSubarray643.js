// LeetCode #18: Maximum SubArray of Size K
// Difficulty: Medium
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// max sum of size k has to be tracked

// # Approach
// - Use two pointers to find the maximum sum of size k
// - Use a variable to keep track of the starting index of the subarray
// - Use a variable to keep track of the ending index of the subarray
// - Use a variable to keep track of the maximum sum
// - return the maximum sum

// # Complexity
// - Time complexity:
// - O(k) for the sum of the first k elements
// - O(n-k) for the rest of the elements
// - O(n) in total for the two pointers

// - Space complexity:
// - O(1) for the variables

// # Code
// javascript []

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let i=0; let sum=0;
    for(let j=i;j<k;j++){
        sum=sum+nums[j];
     }
     let maxSum=sum;
     for(let j=k; j<nums.length ; j++){ 
        sum=sum-nums[j-k]+nums[j];
        maxSum=Math.max(maxSum,sum);
    }
    return maxSum/k;
};
console.log(findMaxAverage([5],1));
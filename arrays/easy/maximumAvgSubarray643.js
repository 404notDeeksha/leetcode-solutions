// LeetCode #643: Maximum Avg SubArray of Size K
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// max sum of size k has to be tracked

// # Approach
// - Evaluate sum of first k elements of array.
// - Assign sum to max value.
// - Iterate through rest of array & evaluate subsequent sum of k elements gradually by adding a new element & removing starting element of array.
// - get max value out of all sum values.

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
    let sum=0;
    for(let j=0;j<k;j++){
        sum=sum+nums[j];
     }
     let maxSum=sum;
     for(let j=k; j<nums.length ; j++){ 
        sum=sum-nums[j-k]+nums[j];
        maxSum=Math.max(maxSum,sum);
    }
    return maxSum/k;
};
console.log(findMaxAverage([5],1)); //5
console.log(findMaxAverage([1,12,-5,-6,50,3],4)); // 12.75

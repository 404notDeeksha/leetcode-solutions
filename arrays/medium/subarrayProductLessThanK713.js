// LeetCode #713. Subarray Product Less Than K
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers & Sliding Window

//Companies: Google, Meta, Airbnb, salesforce, amazon, squarepoint, agoda, flexport 

// # Intuition
// - The product of the subarray has to be less than k
// - The product of the subarray is the product of all the elements in the subarray

// # Approach
// - Use two pointers to find the product of the subarray
// - Use a variable to keep track of the product of the subarray
// - Use a variable to keep track of the starting index of the subarray
// - Use a variable to keep track of the ending index of the subarray
// - Use a variable to keep track of the number of subarrays

// # Complexity

// - Time complexity:
// - O(n) for the two pointers
// - Space complexity:
// - O(1) for the variables
// # Code
// javascript []

//Revisit: Yes

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;
    let prod = 1, result = 0, left = 0;
    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= k) {
            prod /= nums[left];
            left++;
        }
        result += right - left + 1;
    }
    return result;
    };

console.log(numSubarrayProductLessThanK([10,5,2,6],100));

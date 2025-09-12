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
// - We iterate over entire array using one pointer.
// - We count no. of such subarrays by right-left +1;
// - When product of a subarray elements becomes >= k, we reduce product value by removing start element from subarray. & updating next element as firsty element of subarray.
// - we iterate untill last element of array is reached.
// - We return count;

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


console.log("Base Example", numSubarrayProductLessThanK([10,5,2,6], 100)); // 8

// 🔹 Edge case: k = 0 (no product can be < 0)
console.log("k = 0", numSubarrayProductLessThanK([1,2,3], 0)); // 0

// 🔹 Edge case: k = 1 (all nums >= 1, no valid subarray)
console.log("k = 1", numSubarrayProductLessThanK([1,2,3], 1)); // 0

// 🔹 Edge case: Single element smaller than k
console.log("Single element < k", numSubarrayProductLessThanK([5], 10)); // 1

// 🔹 Edge case: Single element >= k
console.log("Single element >= k", numSubarrayProductLessThanK([10], 10)); // 0

// 🔹 Edge case: All elements < k
console.log("All elements < k", numSubarrayProductLessThanK([1,1,1], 5)); 
// 6 → [1],[1],[1],[1,1],[1,1],[1,1,1]

// 🔹 Edge case: Large element in between
console.log("Large element in middle", numSubarrayProductLessThanK([1,2,50,2,3], 10)); 
// Expected: 6 → [1],[2],[1,2],[2],[3],[2,3]

// 🔹 Edge case: Repeated numbers
console.log("Repeated numbers", numSubarrayProductLessThanK([2,2,2], 10)); 
// 6 → [2],[2],[2],[2,2],[2,2],[2,2,2]

// 🔹 Edge case: Decreasing sequence
console.log("Decreasing sequence", numSubarrayProductLessThanK([10,9,8,7], 100)); 
// Expected: 7 → [10],[9],[8],[7],[10,9],[9,8],[8,7] 

// 🔹 Edge case: Empty array
console.log("Empty array", numSubarrayProductLessThanK([], 100)); // 0


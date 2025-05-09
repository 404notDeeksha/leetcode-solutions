// LeetCode #1343.Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Difficulty: Medium
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// - The average of the subarray has to be greater than or equal to the threshold
// - The average of the subarray is the sum of the elements in the subarray divided by the number of elements in the subarray

// # Approach
// 1. Initialize Counters:
// Start with sum = 0 to store the sum of current subarray/window.
// Initialize count = 0 to count how many subarrays meet the condition.

// 2. Precompute Target:

// Calculate target = threshold * k.
// (This avoids division and makes comparison faster.)

// 3. Iterate Over Array Elements:
// Loop through each index i from 0 to arr.length - 1.

// 4. Add Current Element to Sum:
// Add arr[i] to sum.

// 5. Check If Window Size Reached k:
// When i >= k - 1, we have a full window of size k.

// 6. Compare Sum Against Target:
// If sum >= target, increment count because this window meets the average condition.

// 7. Slide the Window:
// Subtract arr[i - k + 1] from sum to remove the element going out of the window.
// This keeps the window size fixed at k.

// 8. Return the Count:
// After the loop, return count as the final answer.

// # Complexity
// - Time complexity: O(n) because we traverse the array once.
// - Space complexity: O(1) because we use a constant amount of space for variables.
// # Code
// javascript []

//Revisit: Yes

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function(arr, k, threshold) {
    let count=0;let sum=0;
    let target = threshold*k;
    for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
         if(i>=k-1){
            if(sum >= target){count++;}
            sum=sum-arr[i-k+1];
        }
    }
    return count;
};

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4)); 
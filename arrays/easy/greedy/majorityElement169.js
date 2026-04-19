// Leetcode 169: Majority Element
/**
 * Approach: Boyer-Moore Voting Algorithm (Cancellation Technique)
 *
 * Problem Statement:
 * Given an array nums of size n, find the element that appears more than ⌊n/2⌋ times.
 * It is guaranteed that such a majority element always exists.
 *
 * Intuition:
 * We pick one element as a candidate and track its frequency using a count.
 * If the same element appears, we increment the count.
 * If a different element appears, we decrement the count (cancelling effect).
 * Since the majority element appears more than n/2 times, it cannot be fully cancelled out, and will remain as the final candidate.
 *
 * Approach (Step-by-step):
 * 1. Initialize a variable 'candidate' and a variable 'count = 0'.
 * 2. Traverse through the array:
 *    a. If count == 0, assign current element as the new candidate.
 *    b. If current element == candidate, increment count.
 *    c. Else, decrement count.
 * 3. After the loop ends, the candidate will be the majority element.
 *
 * Complexity:
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Code

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

// Edge cases:

console.log("Single element:", majorityElement([5])); // 5

console.log("All same elements:", majorityElement([2, 2, 2, 2])); // 2

console.log("Majority at start:", majorityElement([3, 3, 4, 2, 3])); // 3

console.log("Majority at end:", majorityElement([1, 2, 3, 3, 3])); // 3

console.log("Majority in middle:", majorityElement([1, 2, 2, 2, 3])); // 2

console.log("Negative numbers:", majorityElement([-1, -1, -1, 2, 3])); // -1

console.log("Mixed positive & negative:", majorityElement([-1, 2, -1, -1, 3])); // -1

console.log("Large array with clear majority:", majorityElement([1,1,1,2,3,1,4,1,1])); // 1
// Leetcode 271: Contains Duplicates
/**
 * Approach: HashSet (Presence Check Technique)
 *
 * Problem Statement:
 * Given an integer array nums, return true if any value appears at least twice
 * in the array, and return false if every element is distinct.
 *
 * Intuition:
 * We need to check if an element has already been seen before.
 * A HashSet allows us to store elements and check their presence in O(1) time.
 * As we iterate through the array, if we encounter an element that already exists
 * in the set, it means it's a duplicate.
 *
 * Approach (Step-by-step):
 * 1. Initialize an empty HashSet.
 * 2. Traverse through the array:
 *    a. If the current element exists in the set → return true.
 *    b. Otherwise, add the element to the set.
 * 3. If no duplicates are found after traversal → return false.
 *
 * Complexity:
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// Code:

var containsDuplicate = function(nums) {
    let set = new Set();
    for(let num of nums){
        if(set.has(num)){
            return true;
        }else{
            set.add(num);
        }
    }
    return false;
};

console.log("Empty array:", containsDuplicate([])); // false

console.log("Single element:", containsDuplicate([1])); // false

console.log("All unique elements:", containsDuplicate([1, 2, 3, 4])); // false

console.log("One duplicate:", containsDuplicate([1, 2, 3, 1])); // true

console.log("Multiple duplicates:", containsDuplicate([1, 2, 2, 3, 3])); // true

console.log("Duplicates at start:", containsDuplicate([5, 5, 1, 2, 3])); // true

console.log("Duplicates at end:", containsDuplicate([1, 2, 3, 4, 4])); // true

console.log("Negative numbers:", containsDuplicate([-1, -2, -3, -1])); // true

console.log("Mixed positive & negative:", containsDuplicate([-1, 2, 3, -1, 4])); // true

console.log("Large numbers:", containsDuplicate([100000, 200000, 300000, 100000])); // true

// Another Approach: sorting : O(nlogn)- Time complexity
// var containsDuplicate = function(nums) {
//     nums.sort((a, b) => a - b);

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             return true;
//         }
//     }

//     return false;
// };

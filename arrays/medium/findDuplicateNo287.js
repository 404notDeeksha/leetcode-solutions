// LEETCODE 287. Find the Duplicate Number
// Difficulty: Medium
// Category: Arrays
// Approach: In-Place Cyclic/Negation Marking

// # Intuition
// Find duplicate number in an array of n integers where each integer is between 1 and n (inclusive).
// The array contains n+1 integers, so there is at least one duplicate number.

// # Approach
// - Use the fact that the numbers are in the range [1, n]
// - Use the index of the array to mark the presence of a number
// - If a number is already marked (negative), it means it is a duplicate
// - Return the duplicate number
// - This approach modifies the input array, so it is not suitable for all cases

// Complexity
// - Time complexity: O(n)
// - Space complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function(nums) {
    for(let i=0;i<nums.length;i++){
        let index = Math.abs(nums[i]);
        if(nums[index] < 0) return index;
        nums[index] = -nums[index];
    }
    return -1;
}


// Complexity
// - Time complexity: O(n)
// - Space complexity: O(n)


var findDuplicate = function(nums) {
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])) return nums[i];
        set.add(nums[i]);
    }
    return -1;
};


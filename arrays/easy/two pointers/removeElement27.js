// Leetcode 27. Remove Element
// Difficulty: Easy
// Approach: Two Pointers

// Trick:
// focus on assigning non-val elements rather than val elements

// Intuition:
// We can use two pointers to keep track of element that is not equal to val & track index to put it in.
// The first pointer will iterate through the array, and the second pointer will keep track of the position to insert the element that is not equal to val.
// we return number of elements that are not equal to val.
// This way, we can modify the array in place and return the new length of the array without the elements equal to val.

// Complexity:
// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1), since we are modifying the array in place and not using any extra space.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j] !== val) {
            nums[i]=nums[j];
            i++;
        }      
    }
    return i;
};

console.log(removeElement([3,2,2,3], 3)); // Output: 2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Output: 5
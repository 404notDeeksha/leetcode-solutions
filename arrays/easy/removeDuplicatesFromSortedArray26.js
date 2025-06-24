// Leetcode 26. Remove Duplicates from Sorted Array
// Difficulty: Easy
// Approach: Two Pointers

// Intuition:
// Since the array is sorted, we can use two pointers to keep track of unique elements.
// The first pointer(i) will keep track of position to insert unique element. the second pointer(j) will trace array.

//Complexity:
// Time Complexity: O(n), where n is the length of the array.
// Space Complexity: O(1), since we are modifying the array in place and not using any extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i=-1;
    let j=0;
    while(j<nums.length){
        if(nums[j]!==nums[i]){
            nums[++i]=nums[j];
        } 
        j++;
    }
    return i+1;
};

console.log(removeDuplicates([1,1,2])); // Output: 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Output: 5
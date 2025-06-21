// Leetcode 283. Move Zeroes
// Difficulty: Easy
// Approach: Two Pointers

// Intuition:
// We can use the two pointers approach to solve this problem.
// we will iterate through the array and keep track of the first zero element.
// When we encounter a non-zero element, we will swap it with the first zero element.
// This way, we will move all the zero elements to the end of the array while maintaining the order of the non-zero elements.

// Complexity:
// Time Complexity: O(n), where n is the length of the input array.
// Space Complexity: O(1), since we are not using any extra space.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos=0;
    let i=0;
    while(i<nums.length){
        if(nums[i] !== 0 ){
            [nums[pos],nums[i]]=[nums[i],nums[pos]];
            pos++;
            }
     i++;    
};
return nums;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
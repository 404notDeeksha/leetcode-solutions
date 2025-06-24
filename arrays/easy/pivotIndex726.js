// Leetcode 726. Pivot Index
// Difficulty: Easy
// Approach: Two Pointers

// Intuition:
// - We need to find the pivot index of an array.
// - The pivot index is the index where the sum of the elements to the left is equal to the sum of the elements to the right. left most index is needed.
// - We can use two pointers to find the pivot index.
// - We can use a variable to keep track of the total sum of the array.
// - We can use a variable to keep track of the left sum.
// - We can iterate through the array and check if the left sum is equal to the right sum, by subtracting the current element and the left sum from the total sum.
// - If they are equal, we return the current index.
// - If we reach the end of the array and do not find a pivot index, we return -1.

// Complexity:
// - Time Complexity: O(n), where n is the number of elements in the array.
// - Space Complexity: O(1), as we are not using any extra space for the array.
// - We are only using a few variables to keep track of the total sum and the left sum.
// - The space complexity is constant, as we are not using any extra space for the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((acc,val)=> acc+val, 0);
    let leftSum=0;
 
    for(let i=0;i<nums.length; i++){
         if(leftSum === (total-nums[i])-leftSum ){
             return i;
         }
         leftSum+=nums[i];
    }
     return -1;
 };

 console.log("pivot Index is ",pivotIndex([1,7,3,6,5,6])); //3
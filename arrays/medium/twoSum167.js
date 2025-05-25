// Leetcode 167. Two Sum II - Input array is sorted
// Difficulty: Medium
// Approaches: Two Pointers

// intuition:
// OPTIMISED:

// We can use the two pointers approach to solve this problem.
// We can start with two pointers, one at the beginning and one at the end of the array.
// We can then check if the sum of the two pointers is equal to the target.
// If it is, we can return the indices of the two pointers.
// If the sum is less than the target, we can move the left pointer to the right.
// If the sum is greater than the target, we can move the right pointer to the left.


// Complexity:
// Time Complexity: O(n), where n is the length of the input array.
// Space Complexity: O(1), since we are not using any extra space.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left=0;
    let right=numbers.length-1;

    while(left<right){
        let sum = numbers[left]+numbers[right];
        if(sum === target) return [left+1, right+1];
        else if(sum > target) right--;
        else left++;
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9)); // [1,2]
console.log(twoSum([2,3,4], 6)); // [1,3]
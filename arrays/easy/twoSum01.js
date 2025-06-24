// Leetcode 1. Two Sum
// Difficulty: Easy
// Implementation: HashMap 

// Approach:
// Given an array of integers, we need to find two numbers such that they add up to a specific target.
// We can use a hashmap to solve this problem.
// We will iterate through the array and for each element, we will check if the target - element exists in the hashmap.
// If it exists, we have found the two numbers and we can return their indices.
// If it does not exist, we will add the element to the hashmap along with its index.

// Complexity:
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
   for(let i=0; i<nums.length; i++){
     let key = target-nums[i];
     if(map.has(key)){
        return [map.get(key), i];
    }
     map.set(nums[i],i);
   }
}

console.log(twoSum([2,7,11,15],9)); // [0,1]
console.log(twoSum([3,2,4],6)); // [1,2]
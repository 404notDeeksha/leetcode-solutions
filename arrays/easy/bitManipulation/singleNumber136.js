// Leetcode 136: Single Number
/**
 * Approach: Bit Manipulation (XOR Cancellation Technique)
 *
 * Problem Statement:
 * Given a non-empty array of integers nums, every element appears exactly twice
 * except for one element which appears only once. Find that single element.
 *
 * Intuition:
 * We use the XOR operation to cancel out duplicate numbers.
 * Since a ^ a = 0 and a ^ 0 = a, all pairs of equal numbers will cancel each other.
 * The only number left at the end will be the one that appears once.
 * 
 * XOR only works correctly when all other elements appear exactly twice.
 *
 * Approach (Step-by-step):
 * 1. Initialize a variable 'result' = 0.
 * 2. Traverse through the array:
 *    a. For each number, perform XOR with result → result ^= num.
 * 3. Since duplicates cancel out, the remaining value in 'result'
 *    will be the single number.
 *
 * Complexity:
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Code

var singleNumber = function (nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }

  return result;
};

// 4 ^ 1 ^ 2 ^ 1 ^ 2
// = 4 ^ (1 ^ 1) ^ (2 ^ 2)
// = 4 ^ 0 ^ 0
// = 4

console.log("Single element:", singleNumber([7])); // 7

console.log("Two elements (one pair + one single):", singleNumber([2, 2, 1])); // 1

console.log("Single at start:", singleNumber([5, 1, 1, 2, 2])); // 5

console.log("Single at end:", singleNumber([1, 1, 2, 2, 9])); // 9

console.log("Single in middle:", singleNumber([1, 2, 3, 2, 1])); // 3

console.log("Negative numbers:", singleNumber([-1, -1, -2])); // -2

console.log("Mixed positive & negative:", singleNumber([-1, 2, 2, -1, 3])); // 3

console.log("Large numbers:", singleNumber([100000, 1, 1, 100000, 999999])); // 999999

// Another Approach: space Complexity O(n)

// var singleNumber = function(nums) {
//     let set = new Set();
//     for(let num of nums){
//         if(!set.has(num)){
//             set.add(num);
//         }
//         else
//         {set.delete(num);}
//     }
//     return set.values().next().value
// };

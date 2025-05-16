//Leetcode 974. Subarray Sums Divisible by K
// Difficulty: Medium
// Approach : prefix Sum

//Intuition:    
// We will Keep a running total (called sum) as you move through the array.
// At each step, calculate the remainder when sum is divided by k → remainder = sum % k.
//  If the remainder is negative, adjust it to be positive by adding k (since JS can return negative remainders).
//  If you've seen this same remainder before, it means:
// There is a previous subarray that, when removed, leaves a subarray that is divisible by k.
// So, the number of times you've seen that remainder = number of valid subarrays ending at current index.
// Use a Map to store how many times each remainder has been seen so far.
// For each element in the array, update the sum, calculate the remainder, and check the map.

//Complexity:
// 1. Time Complexity: O(n) where n is the length of the nums array.
// 2. Space Complexity: O(n) for the hash map to store the prefix sums modulo k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);
    for (let val of nums) {
        sum += val;
        let rem = sum % k;
        if (rem < 0) rem += k;
        if (map.has(rem)) {
            count += map.get(rem);        }
        map.set(rem, (map.get(rem) || 0) + 1);
    }
    return count;
};


console.log(subarraysDivByK([4,5,0,-2,-3,1],5)); //7
console.log(subarraysDivByK([2,-2,2,-4],6)); //2  
console.log(subarraysDivByK([-7,2,3,0,-9],3)); // 6
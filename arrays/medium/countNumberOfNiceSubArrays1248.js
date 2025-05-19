// Leetcode 1248. Count Number of Nice Subarrays
// Difficulty: Medium
// Approach: HashMap
// Intuition:
// Given an array of integers, we need to find the number of nice subarrays.
// A nice subarray is defined as an array that contains exactly k odd numbers.
// We can use a hashmap to solve this problem.
// We will iterate through the array and for each element, we will check if the number of odd numbers in the subarray is equal to k.
// If it is, we will increment the count.
// If it is not, we will add the element to the hashmap along with its index.

// Complexity:
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0;
    let oddC = 0;
    let map = new Map();
    map.set(0,1);
    for(let val of nums){
        if(val%2 === 1) oddC++;
        if(map.has(oddC-k)){
            count=count+map.get(oddC-k);
        }
        map.set(oddC,(map.get(oddC) || 0)+1);
    }
    return count;
};

console.log(numberOfSubarrays([1,1,2,1,1],3)); // 2

// more faster solution because of +ve keys & arrays are faster than maps

function numberOfSubarraysFaster(nums, k) {
    const prefix = new Array(nums.length + 1).fill(0);
    prefix[0] = 1;

    let count = 0;
    let odd = 0;

    for (let num of nums) {
        if (num % 2 === 1) {
            odd++;
        }

        if (odd - k >= 0) {
            count += prefix[odd - k];
        }

        prefix[odd]++;
    }

    return count;
}

// Example:
const nums = [2,2,2,1,2,2,1,2,2,2];
const k = 2;
console.log(numberOfSubarraysFaster(nums, k)); // Output: 16

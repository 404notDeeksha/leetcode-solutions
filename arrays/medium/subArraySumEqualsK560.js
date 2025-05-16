// Leetcode 560. Subarray Sum Equals K
// Difficulty: Medium
// Approach : prefix Sum

//Intuition:
// 1. We can use a prefix sum to keep track of the cumulative sum of the elements in the array.
// 2. We can use a hash map to store the frequency of each prefix sum.
// 3. For each element in the array, we can check if the difference between the current prefix sum and k exists in the hash map.
// 4. If it exists, we can add the frequency of that prefix sum to our count.
// 5. Finally, we can return the count of subarrays that sum to k.

//Complexity:
// 1. Time Complexity: O(n) where n is the length of the nums array.
// 2. Space Complexity: O(n) for the hash map to store the prefix sums.
//

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count=0;
    let sum=0;
    let map = new Map();
    map.set(0,1);

    for(let val of nums){
        sum+=val;
        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }
        map.set(sum, (map.get(sum) || 0)+1);
    }
    return count;
};

console.log(subarraySum([1,2,3],2)); 
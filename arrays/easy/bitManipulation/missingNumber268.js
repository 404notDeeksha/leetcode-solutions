// Leetcode: 268


// a ^ 0 = 0
// 0 ^ a = 0
// a ^ a = 0

// code:
var missingNumber = function(nums) {
    let xor = nums.length;
    for(let i=0; i<nums.length; i++){
       xor ^= i ^ nums[i] ;
    }
    return xor;
}
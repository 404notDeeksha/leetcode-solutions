// Leetcode 136: Single Number 
// Approach:



// Code

var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};

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
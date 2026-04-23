// Leetcode 303:

// Using Functional components

const numArray = (nums) => {
  const prefixArr = [];

  prefixArr[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefixArr[i] = prefixArr[i - 1] + nums[i];
  }

  return {
    sumRange(left, right) {
      if (left === 0) {
        return prefixArr[right];
      }
      return prefixArr[right] - prefixArr[left-1];
    },
  };
};

const obj = numArray([1, 2, 3, 4]);

console.log(obj.sumRange(0, 2)); // 6
console.log(obj.sumRange(1, 3)); // 9

// Using Class

// var NumArray = function(nums) {
//   created prefix array here

//     this.prefix = [];

//     this.prefix[0] = nums[0];

//     for(let i=1; i<nums.length; i++){
//         this.prefix[i] = this.prefix[i-1] + nums[i];
//     }

// };

// NumArray.prototype.sumRange = function(left, right) {
//     // return sum based on prefix values

//     if(left === 0) {return this.prefix[right];}
//     return this.prefix[right]-this.prefix[left-1];
// };

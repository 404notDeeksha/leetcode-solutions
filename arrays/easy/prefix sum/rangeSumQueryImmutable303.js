// Leetcode 303:

// Approach:
// - Precompute prefix sum where prefix[i] = sum(0 → i)
// - Range sum becomes:
//     sum(left, right) = prefix[right] - prefix[left - 1]
// - Handle left === 0 separately
//
// Why:
// - Avoid O(n) per query
// - Reduce to O(1) per query after O(n) preprocessing
//
// Takeaway:
// - "Multiple queries on immutable array" → think PREFIX SUM
// - Use closure to persist computed data without classes

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
      return prefixArr[right] - prefixArr[left - 1];
    },
  };
};

const obj = numArray([1, 2, 3, 4]);

// Edge Cases
const obj1 = numArray([1, 2, 3, 4]);
console.log(obj1.sumRange(0, 2)); // 6 (normal range)

const obj2 = numArray([5]);
console.log(obj2.sumRange(0, 0)); // 5 (single element)

const obj3 = numArray([4, 5, 6]);
console.log(obj3.sumRange(1, 1)); // 5 (left === right)

const obj4 = numArray([-1, -2, -3]);
console.log(obj4.sumRange(0, 2)); // -6 (all negatives)

const obj5 = numArray([10, 20, 30]);
console.log(obj5.sumRange(0, 1)); // 30 (starts from 0)

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

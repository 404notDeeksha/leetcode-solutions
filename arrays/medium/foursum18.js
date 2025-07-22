// LeetCode #18:  4Sum
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers + sorting

// # Approach
// it is similiar to 3sum problem exactly .

// # Approach
// - Sort the array
// - Use two nested loops to fix the first two numbers
// - Use two pointers to find the remaining two numbers
// - Check for duplicates to avoid duplicate quadruplets
// - Return the result

// # Complexity
// - Time complexity:
// - O(n^3) for the nested loops and two pointers
// - O(nlogn) for sorting the array (Timsort= merge sort + insertion sort)
// - O(n^3+nlogn) = O(n^3)
// - O(n^3) is the dominant term

// - Space complexity:
// - O(n) for sorting the array
// - O(k) for the result array (no. of quadruplets)
// - O(n+k) = O(n)
// - O(n) is the dominant term

// # Code
// javascript []
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 **/

var fourSum = function(nums, target) {
  let result=[];
  nums.sort((a,b)=> a-b);
  for(let i=0; i<nums.length-3 ; i++){
      if(i>0 && nums[i]===nums[i-1]){continue;}
      
      for(let j=i+1 ; j<nums.length-2; j++){
           if(j>i+1 && nums[j]===nums[j-1]){continue;}

          let left=j+1;
          let right=nums.length-1;

          while(left < right){
              let sum = nums[i]+nums[j]+nums[left]+nums[right];

              if(sum === target){
                  result.push([nums[i],nums[j],nums[left],nums[right]]);
                  left++;
                  right--;

                  while(left < right && nums[left] === nums[left-1]){left++;}
                  while(left < right && nums[right] === nums[right+1]){right--;}
              }
              else if(sum<target)
                  {left++;}
              else{right--;}
          }
      }
  }
  return result;
};

console.log("General Test Case", fourSum([1, 0, -1, 0, -2, 2], 0)); // [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
console.log("All Zeros", fourSum([0, 0, 0, 0, 0], 0));
// [ [0, 0, 0, 0] ]

console.log("Empty Array", fourSum([], 0));
// []

console.log("Less Than Four Elements", fourSum([1, 2, 3], 6));
// []

console.log("No Combination Found", fourSum([1, 2, 3, 4], 100));
// []

console.log("All Same Numbers", fourSum([2, 2, 2, 2, 2], 8));
// [ [2, 2, 2, 2] ]

console.log("Negative Target", fourSum([-5, -4, -3, -2, -1], -10));
// [ [-4, -3, -2, -1] ]

console.log("Duplicates in Input", fourSum([1, 1, 1, 1, 2, 2, 2, 2], 6));
// [ [1, 1, 2, 2] ]

console.log(
  "With Large Numbers",
  fourSum([1000000000, 1000000000, 1000000000, 1000000000], 4000000000)
);
// [ [1000000000, 1000000000, 1000000000, 1000000000] ]

console.log("Negative and Positive", fourSum([-3, -1, 0, 2, 4, 5], 2));
// [ [-3, -1, 2, 4] ]

console.log("Multiple Quadruplets", fourSum([0, 0, 0, 0, 0, 0, 0], 0));
// [ [0, 0, 0, 0] ]

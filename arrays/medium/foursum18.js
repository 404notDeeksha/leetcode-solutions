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
  nums.sort((a,b)=> a-b);
  let result=[];
  for(let i=0;i<nums.length-3; i++){
      if(i>0 && nums[i]=== nums[i-1]){ continue;}
      for(let j=i+1; j<nums.length-2; j++){
          if(j>i+1 && nums[j]=== nums[j-1]){ continue;}

          let left = j+1;
          let right = nums.length-1;

          while(left<right){
              let sum = nums[i]+nums[j]+nums[left]+nums[right];
              if(sum === target){
                  result.push([nums[i],nums[j],nums[left],nums[right]]);

                  while(left<right && nums[left]===nums[left+1]){ left++;}
                  while(left<right && nums[right]===nums[right-1]){ right--;}
              }
              if(sum<target){left++;}
              else {right--;}
          } 
      }
  }
  return result;
};
  console.log(foursum([1,0,-1,0,-2,2],0));
// LeetCode Problem 15: 3Sum
// Difficulty: Medium
// Approach: Two Pointers

// Intuition:
// We can use the two pointers approach to solve this problem.
// First, we sort the array to make it easier to find triplets that sum to zero.
// Then, we can iterate through the array and for each element, we can use two pointers to find pairs such that total sum is zero.
// We can start with one pointer at the next element and the other pointer at the end of the array.
// If the sum of the three elements is zero, we can add the triplet to the result.
// If the sum is less than zero, we can move the left pointer to the right to increase the sum.
// If the sum is greater than zero, we can move the right pointer to the left to decrease the sum.

// Complexity:
// Time Complexity: O(n^2), where n is the length of the input array. nlog(n) for sorting and O(n) for the two-pointer traversal.   
// Space Complexity: O(1), since we are not using any extra space for the result array, we are just returning the result.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res=[];
    
    for(let k=0;k<nums.length-2;k++){
         if (k > 0 && nums[k] === nums[k - 1]) continue;
        let i=k+1;
        let j=nums.length-1;        
        while(i<j){
            let sum=nums[i]+nums[j]+nums[k];
            if(sum === 0) {
                res.push([nums[k],nums[i],nums[j]]);
                while(nums[i]== nums[i+1]) i++;
                while(nums[j]== nums[j-1]) j--;
                i++;
                j--;
            }
            else if(sum<0){i++;}
            else{j--;}

            }
        }
        return res;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Output: []
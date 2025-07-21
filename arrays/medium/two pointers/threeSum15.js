// LeetCode Problem 15: 3Sum
// Difficulty: Medium
// Implementation: Two Pointers + Sorting

// Approach:
// We can use the two pointers approach to solve this problem.
// First, we sort the array to make it easier to find triplets that sum to zero.
// Then, we can iterate through the array and for each element, we can use two pointers left, right to find pairs such that total sum is zero.
// We start with one pointer at the next element and the other pointer at the end of the array.
// To check duplicates, we can skip the element which is same as previous element.
// If the sum of the three elements is zero, we can add the triplet to the result. 
// To avoid duplicates in result, we can check if next (left+1) or previous (right-1) are same as current left or right elements. Skip them if they are the same.
// If the sum is less than zero, we can move the left pointer to the right to increase the sum.
// If the sum is greater than zero, we can move the right pointer to the left to decrease the sum.

// Complexity:
// Time Complexity: O(n^2), where n is the length of the input array. nlog(n) for sorting and O(n) for the two-pointer traversal.   
// Space Complexity: O(1), since we are not using any extra space for the result array, we are just returning the result.

// Tricks to understand:
    //index is not needed
    // sum = 0
    // it will atleast take n2 complexity
    // skipping same numbers, use continue. dont use while loop inside for loop. let for loop do the iteration work
    // dont skip left if nums[left] & nums[i] are same.
    // skip left or right after checking valid pairs

var threeSum = function(nums) {
    
    nums.sort((a,b)=> a-b);
    let result=[];
    for (let i=0; i<nums.length-2 ; i++){
        if(i>0 && nums[i]=== nums[i-1]){continue;}
        let left= i+1;
        let right = nums.length-1;
        while(left<right){
            let sum=nums[i]+nums[left]+nums[right];

            if(sum===0){
                result.push([nums[i],nums[left],nums[right]]);
                left++;
                right--;

                while(left < right && nums[left] === nums[left-1]){left++;}
                while(left < right && nums[right] === nums[right+1]){right--;}

            } else 
            if(sum<0){
               left++;         
            }else{
                right--;
            }
        }        
    }
    return result;
};

console.log("Multiple Duplicates",threeSum([-1,0,1,2,2,-1,,-4,-4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log("No result",threeSum([0,1,1])); // Output: []
console.log("All zeroes",threeSum([0,0,0,0])); // Output: [[0,0,0]]
console.log("All negative numbers",threeSum([-4,-2,-1])); // Output: []
console.log("Less than 3 elements",threeSum([1,2])); // Output: []
console.log("Empty array",threeSum([])); // Output: []
console.log("Negative & Positive Extremes", threeSum([-1000000, 1000000, 0])); // Output: [[-1000000, 0, 1000000]]
// Leetcode: 977. Squares of a Sorted Array
// Difficulty: Easy
// Approach: Two pointer

//Optimised Solution:

//Intuition:
// In order to have only O(n) time complexity, we will have to do squaring & sorting in single iteration.
// We can have two pointers, left & right, pointing to start & end of the array.
// We will create a new array to sequentially store the values in sorted order, and a pointer index which will point to the last index of the new array.
// We will iterate through the array & compare squares of left & right pointer elements.
// The Larger square will be stored in new array at index pointer, and pointer shall be decremented.
// Whichever pointer gave the larger square will either be incremented (if left pointer) or decremented (if right pointer).
// Code will run until left & right pointers meet.
// Finally, we will return the new array which will be sorted in ascending order as required.

// Time Complexity: O(n)
// Space Complexity: O(n)

//Tried whole myself
var sortedSquares = function(nums) { 
    let left=0;
    let right=nums.length-1;
      let arr = new Array(nums.length-1).fill(0);
      let k=right;
    while(left<=right){
        let leftSq = Math.pow(nums[left],2);
        let rightSq = Math.pow(nums[right],2);
        if( leftSq <= rightSq ){
            arr[k]=rightSq;
            right--;
        }else{
            arr[k]= leftSq;
            left++;
        }
        k--;
    }
return arr;
};

//Tried-failed-updated
var sortedSquares = function(nums) {
    let left=0;
    let right = nums.length-1;
    let result = new Array(nums.length);
    let index = nums.length-1;

    while(left<=right){
        let leftSq = nums[left]*nums[left];
        let rightSq = nums[right]*nums[right];

        if(leftSq>rightSq){
            result[index] = leftSq;
            left++;
        } else{
            result[index] = rightSq;
            right--;
        }
        index--;
    }
    return result;
};

// Not Optimised
//Time Complexity: O(nlogn)
// Space Complexity: O(n)

var sortedSquaresSortFn = function(nums) {
    nums = nums.map(ele=>ele*ele);    
    nums.sort((a,b)=>a-b);
    return nums;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
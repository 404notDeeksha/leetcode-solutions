// LeetCode #448: Find all Numbers Disappeared in an Array
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// - track the numbers that are present in the array

// # Approach
// - Sort the array
// - Use two pointers to track the numbers
// - The first pointer will track the current number
// - The second pointer will track the range of numbers from 1 to n
// - If the first pointer is equal to the second pointer, move both pointers forward
// - If the first pointer is greater than the second pointer, add the second pointer to the result array and move the second pointer forward
// - If the first pointer is less than the second pointer, move the first pointer forward
// - After the first pointer reaches the end of the array, add the remaining numbers from the second pointer to the result array
// - Return the result array

// # Complexity
// - Time complexity:
// - O(nlogn) for sorting the array
// - O(n) for the two pointers
// - O(n) for the result array
// - O(n) for the final result array

// - Space complexity:
// - O(n) for the result array 

// # Code
// javascript []
var findDisappearedNumbers = function(nums) {
    let n=nums.length;let j=1;let i=0;
    let arr=[];
    nums.sort((a,b)=>a-b);
    while(i<n){
        if(nums[i]===j){
            j++;
            i++;
        }else if(nums[i]>j){
            arr.push(j);
            j++;
        }else{
            i++;
        }
    }
    while(j<=n){
        arr.push(j);
        j++;
    }
    return arr;
};

console.log(findDisappearedNumbers([1,1]));

//optimum approach

// # Complexity
// - Time complexity:
// - O(n) for the two pointers
// - O(n) for the result array

// - Space complexity:
// - O(n) for the result array

// # Code
// javascript []
var findDisappearedNumbers = function(nums) {
    let n=nums.length;
    let arr=[];
    for(let i=0;i<n;i++){
        let index=Math.abs(nums[i])-1;
        if(nums[index]>0){
            nums[index]*=-1;
        }
    }
    for(let i=0;i<n;i++){
        if(nums[i]>0){
            arr.push(i+1);
        }
    }
    return arr;  
};


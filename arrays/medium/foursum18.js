// LeetCode #18:  4Sum
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers

// # Intuition
// it is similiar to 2sum & 3sum problem.

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

function foursum(arr,target){
    let n=arr.length;
    let result=[];
    arr.sort((a,b)=>a-b);
    
    for(let i=0;i<n-3;i++){
      if(i>0 && arr[i]===arr[i-1]){continue;}
      for(let j=i+1;j<n-2;j++){
        if(j>i+1 && arr[j]===arr[j-1]){continue;}
        
       let sum1=arr[i]+arr[j];
       let l=j+1;
       let r=n-1;
       
      while(l<r){
      let sum2=arr[l]+arr[r];
      if((sum1+sum2)===target){
      result.push([arr[i],arr[j],arr[l],arr[r]]);
     
      while(l<r && arr[l]===arr[l+1]){l++;}
      while(l<r && arr[r]===arr[r-1]){r--;}
      
      l++;
      r--;
      }
      else
      if((sum1+sum2)<target){
        l++;}
        else {r--;}
     
    }}}
    return result;
  }
  console.log(foursum([1,0,-1,0,-2,2],0));
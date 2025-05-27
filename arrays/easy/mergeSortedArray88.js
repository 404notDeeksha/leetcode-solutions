// LeetCode #88: Merge  
// Difficulty: Easy
// Category: Arrays
// Approach: Two Pointers

//Intuition:
// We can use two pointers to merge the two sorted arrays in-place.
// We will start from the end of both arrays and compare the elements.
// we will also keep a pointer for the end of the merged array (1st array).
// We will place the larger element at the end of the merged array and move the pointers accordingly.

// Time Complexity: O(m+n)
// Space Complexity: O(1)

function merge(nums1,m,nums2,n){
    let k=m+n-1;
    let j=n-1;
    let i=m-1;
    while(j>=0){
      if(i>=0 && nums1[i]>nums2[j]){
        nums1[k]=nums1[i]
        i--;
      }
          else{
            nums1[k]=nums2[j];
            j--;
        }
        k--;
     
  } return nums1;
  }
  console.log(merge([1,2,3,0,0,0],3,[1,1,1],3));
  console.log(merge([0],0,[1],1)); // [1]
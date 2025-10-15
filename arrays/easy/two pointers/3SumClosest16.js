// Leetcode: 16. 3Sum Closest
// Difficulty: Medium

//------------------------
// Intuition:
// This is a variation of the classic "3Sum" problem. 
// Since we need combinations of 3 elements and to minimize |target - sum|, 
// sorting helps us efficiently adjust pointers and move closer to the target.

//------------------------
// Approach:
// 1. Sort the array to enable two-pointer traversal.
// 2. Fix one element (nums[i]) and use two pointers (left = i+1, right = end) to find the best possible pair that forms a sum closest to the target.
// 3. Calculate the sum of the triplet (nums[i] + nums[left] + nums[right]).
//    - If this sum is closer to the target than our current closestSum, update closestSum.
// 4. Move pointers based on comparison:
//    - If sum < target → increment left (need larger sum).
//    - If sum > target → decrement right (need smaller sum).
//    - If sum == target → return immediately since it’s the best possible match.
// 5. Repeat for all i and finally return closestSum.

//------------------------
// Complexity: 
// Time- O(nlog n + n^2)
// Space- O(logn + n)


var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;
    nums.sort((a,b) => a-b);
    for(let i = 0; i<nums.length-2; i++){
        let left = i+1;
        let right = nums.length-1;

        while(left < right){
            let sum = nums[i]+ nums[left]+nums[right];
            if(Math.abs(target-sum) < Math.abs(target-closestSum)){
                closestSum=sum;
            }
             if (sum === target) {
                return sum;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
return closestSum};

//------------------------
// Edge Cases:
console.log("Min input size", threeSumClosest([1, 2, 3], 6));  //6
console.log("All same numbers - Duplicates", threeSumClosest([2, 2, 2, 2], 5));  //6
console.log("Exact match exists", threeSumClosest([-1, 2, 1, -4], 2));   //2
console.log("All negative numbers", threeSumClosest([-8, -6, -5, -2], -10));  //-13
console.log("All positive numbers", threeSumClosest([5, 6, 7, 8], 3));  //18
console.log("Target smaller than all sums", threeSumClosest([10, 20, 30], -100));  //60 
console.log("Target larger than all sums", threeSumClosest([1, 2, 3, 4], 100));  //9
console.log("Large numbers", threeSumClosest([1000000, 1000000, 1000000], 2999999));  //300000
console.log("Duplicates with multiple closest", threeSumClosest([-1, 2, 1, -4, 2], 1));  //0

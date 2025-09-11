// Leetcode: 16. 3Sum Closest

// Complexity: 
// Time- O(nlog n + n2)
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

console.log("Min input size", threeSumClosest([1, 2, 3], 6)); 
console.log("All same numbers", threeSumClosest([2, 2, 2, 2], 5)); 
console.log("Exact match exists", threeSumClosest([-1, 2, 1, -4], 2)); 
console.log("All negative numbers", threeSumClosest([-8, -6, -5, -2], -10)); 
console.log("All positive numbers", threeSumClosest([5, 6, 7, 8], 3)); 
console.log("Target smaller than all sums", threeSumClosest([10, 20, 30], -100)); 
console.log("Target larger than all sums", threeSumClosest([1, 2, 3, 4], 100)); 
console.log("Large numbers", threeSumClosest([1000000, 1000000, 1000000], 2999999)); 
console.log("Duplicates with multiple closest", threeSumClosest([-1, 2, 1, -4, 2], 1)); 

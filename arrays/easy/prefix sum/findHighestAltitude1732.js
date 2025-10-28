// Leetcode 1732. Find the Highest Altitude
// Difficulty: Easy
// Approach : prefix Sum

// Problem:
// Given an array of net altitude gains between different points on ground, max alitude is to be returned.

// Intuition:
// We will keep track of max altitude by calculating altitude as we go.

// Approach:
// 1. Initialize a variable `sum` to 0 to keep track of the current altitude.
// 2. Initialize a variable `max` to 0 to keep track of the maximum altitude.
// 3. Iterate through the `gain` array using a while loop.
// 4. For each element in the `gain` array, add it to the running sum (prefix sum).
// 5. Update `max` to be the maximum of `max` and `sum`.
// 6. After the loop, return `max` as the highest altitude.

// Complexity:
// Time : O(n) where n is the length of the gain array
// Space : O(1) as we are using only a constant amount of space

// code
var largestAltitude = function (gain) {
  let sum = 0;
  let max = 0;
  let i = 0;
  while (i < gain.length) {
    sum += gain[i];
    max = Math.max(max, sum);
    i++;
  }
  return max;
};

// 1. Example case
console.log("Example case", largestAltitude([-5, 1, 5, 0, -7]));
// Expected: 1

// 2. All positive gains → altitude keeps increasing
console.log("All positive gains", largestAltitude([1, 2, 3, 4]));
// Expected: 10

// 3. All negative gains → altitude keeps decreasing
console.log("All negative gains", largestAltitude([-1, -2, -3, -4]));
// Expected: 0 (starts from 0, goes down)

// 4. Mixed ups and downs
console.log("Mixed ups and downs", largestAltitude([-4, 3, -2, 2, -1]));
// Expected: 3

// 5. Empty array → no movement
console.log("Empty array", largestAltitude([]));
// Expected: 0

// 6. Single element positive
console.log("Single positive element", largestAltitude([5]));
// Expected: 5

// 7. Single element negative
console.log("Single negative element", largestAltitude([-5]));
// Expected: 0

// 8. Long array with equal ups and downs
console.log("Equal ups and downs", largestAltitude([2, -2, 3, -3, 4, -4]));
// Expected: 4

// Leetcode 1732. Find the Highest Altitude
// Difficulty: Easy
// Approach : prefix Sum 

//Question explanation - a biker starts at altitude 0 & goes through net altitude changes given in gain array. Find max altitude location it reached.

// Approach:
// 1. Initialize a variable `sum` to 0 to keep track of the current altitude.
// 2. Initialize a variable `max` to 0 to keep track of the maximum altitude.
// 3. Iterate through the `gain` array using a while loop.
// 4. For each element in the `gain` array, add it to `sum`.
// 5. Update `max` to be the maximum of `max` and `sum`.
// 6. After the loop, return `max` as the highest altitude.

// Time Complexity: O(n) where n is the length of the gain array
// Space Complexity: O(1) as we are using only a constant amount of space


/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum=0;
    let max=0;
    let i=0;
    while(i<gain.length){
        sum+=gain[i];
        max=Math.max(max,sum);
        i++;
    }
    return max;
};

console.log(largestAltitude([-5,1,5,0,-7]));
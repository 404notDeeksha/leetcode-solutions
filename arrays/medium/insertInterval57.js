// Leetcode 57. Insert Interval
// Difficulty: Medium
// Approach: Sorting + Intervals

// Intuition:
// Given an array of intervals and a new interval, we need to insert the new interval into the array and merge any overlapping intervals.
// We can add the new interval to the array and then sort the array based on the start time of the intervals.
// After sorting, we can use the same approach as in the merge intervals problem to merge any overlapping intervals.


// Complexity:
// Time complexity: O(n log n) for sorting + O(n) for merging = O(n log n)
// Space complexity: O(n) for the result array

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals) return newInterval;
    intervals.push(newInterval);
    intervals.sort((a,b)=>a[0]-b[0]);

    let merged=[intervals[0]];
    for(let i=1 ; i<intervals.length ; i++){
        let curr = intervals[i];
        let last = merged[merged.length-1];

        if(last[1]>=curr[0]){last[1]=Math.max(last[1],curr[1])}
        else{
            merged.push(curr);
        } 
    }
return merged;
};

console.log(insert([[1,3],[6,9]], [2,5])); // [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])); // [[1,2],[3,10],[12,16]]
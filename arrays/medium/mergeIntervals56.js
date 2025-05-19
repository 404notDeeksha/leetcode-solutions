// Leetcode 56. Merge Intervals
// Difficulty: Medium
// Approach: Sorting + Intervals

// Intuition:
// Given an array of intervals, we need to merge all overlapping intervals.
// We can sort the intervals based on their start time and then iterate through the sorted intervals.
// If the current interval overlaps with the previous interval, we merge them by updating the end time of the previous interval.
// If the current interval does not overlap with the previous interval, we add it to the result array.
//
// Complexity:
// Time complexity: O(n log n) for sorting + O(n) for merging = O(n log n)
// Space complexity: O(n) for the result array
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a,b)=>a[0]-b[0]);

    let merged=[intervals[0]];
   
    for(let i=1; i<intervals.length ; i++  ){
        let last=merged[merged.length-1];
        let current = intervals[i];
        
        if(last[1]>=current[0]){
            last[1]=Math.max(last[1],current[1]);
        }else{
            merged.push(current);
        }
    }
    return merged;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
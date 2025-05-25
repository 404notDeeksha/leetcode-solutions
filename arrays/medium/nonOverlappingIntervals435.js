// Leetcode 986. Non Overlapping Intervals
// Difficulty: Medium
// Approaches: Greedy

// intuition:
// We need to maximise the non-overlapping intervals.
// Sort the intervals by their end time.
// Iterate through the intervals and check if the start time of the current interval is smaller to the end time of the previous interval.
// If it is, we need to remove the current interval, thus we increment the count.
// If it is not, we update the end time to the end time of the current interval.

// Complexity:
// Time Complexity: O(nlogn), where n is the number of intervals.
// Space Complexity: O(1), since we are not using any extra space.


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let i=1;
    let count=0;
    intervals.sort((a,b)=>a[1]-b[1]);
    let prev = intervals[0][1]
    while(i<intervals.length){
        if(intervals[i][0]<prev) count++;
            else prev=intervals[i][1];
    i++;
    }
    return count;
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // 1
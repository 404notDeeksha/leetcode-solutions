// Leetcode 252. Meeting Rooms
// Difficulty: Easy
// Approach: Sorting + Intervals

// Intuition:
// Given an array of meeting time intervals consisting of start and end times, we need to determine if a person could attend all meetings.
// We can sort the intervals based on the start time and then check if any two intervals overlap.
// If any two intervals overlap, it means the person cannot attend all meetings.

// Complexity:
// Time complexity: O(n log n) for sorting + O(n) for checking overlaps = O(n log n)
// Space complexity: O(n) for the merged array (if no overlapping intervals case)
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */

var canAttendMeetings = function(intervals) {
    if(!intervals || intervals.length === 0) return true;

    intervals.sort((a,b)=> a[0]-b[0]);

    let merged = [intervals[0]];

    for(let i=1;i<intervals.length ; i++){
        let curr = intervals[i];
        let last = merged[merged.length-1];
        
        if(last[1]>curr[0]) return false;
        else merged.push(curr);

    }
    return true;
};

console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log(canAttendMeetings([[7,10],[2,4]])); // true
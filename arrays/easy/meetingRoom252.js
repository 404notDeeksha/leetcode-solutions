// Leetcode 252. Meeting Rooms
// Difficulty: Easy
// Approach: Sorting + Intervals

// Problem - "Meeting Rooms," is an easy-level problem that asks you to determine if a person can attend all meetings given a list of intervals, where each interval is a [start, end] pair. The condition for attending all meetings is that no two meetings overlap in time. If there is any overlap, the function should return false; otherwise, it should return true. 

// Problem :
// Given time intervals of meetings, we must analyze a person can attend all meetings or not.
// All meetings can only be attended if ending time of a meeting is before start time of next meeting.

// Intuition:
// We can sort the intervals based on the start time and then check if any two intervals overlap, by comparing end time & start time of two consecutive intervals.
// If any two intervals overlap, it means the person cannot attend all meetings.

// Approach:
// If intervals array length is `0` or `1`, return true.
// We will sort the intervals as per their start time.
// We shall iterate the intervals array.
//      - if next meeting starts before current meeting can end, we will return false.
// If no such meeting interval exists, return true.    

// Complexity:
// Time complexity: O(n log n) for sorting + O(n) for checking overlaps = O(n log n)
// Space complexity: O(1) 

// Code
var canAttendMeetings = function(intervals){
    if(intervals.length <= 1){return true;}

    intervals.sort((a,b) => a[0]-b[0]);

    for(let i=0; i<intervals.length-1; i++){
        if(intervals[i][1]>intervals[i+1][0]){
            return false;
        }
    }
    return true;
}

// Edge Cases
console.log("Empty list:", canAttendMeetings([])); // true
console.log("Single meeting:", canAttendMeetings([[5,10]])); // true
console.log("No overlap (sorted):", canAttendMeetings([[0,5],[5,10],[10,15]])); // true
console.log("Overlap (simple):", canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log("Unsorted input:", canAttendMeetings([[5,10],[0,5]])); // true
console.log("Same start time:", canAttendMeetings([[1,4],[1,5]])); // false
console.log("Identical intervals:", canAttendMeetings([[2,6],[2,6]])); // false
console.log("Large interval encompasses others:", canAttendMeetings([[1,10],[2,3],[4,5]])); // false
console.log("Back-to-back reversed:", canAttendMeetings([[10,20],[0,10]])); // true
console.log("Zero-duration meeting:", canAttendMeetings([[2,2],[3,4]])); // true
console.log("Negative times:", canAttendMeetings([[-5,-1],[-10,-6]])); // true
console.log("Float times:", canAttendMeetings([[0.5,1.0],[1.0,1.5]])); // true);
// Leetcode 253. Meeting Rooms II
// Difficulty: Medium
// Approach: Sorting + Intervals

// Intuition:
// Given an array of meeting time intervals consisting of start and end times, we need to determine the minimum number of conference rooms required to hold all meetings.

//Brute Force approach:
// 1. Create a new Arr rooms which stores the end time of each meeting.
// 2. For each meeting, check if it can be placed in an existing room. by comparing its start time with rooms[] end times.
// 3. If it can be placed, update the end time of that room in rooms[].
// 4. If it cannot be placed, add a new room to rooms[].
// 5. The length of rooms[] will be the minimum number of conference rooms required.
// 6. Return the length of rooms[].
// 7. If intervals is empty, return 0.

// Complexity:
// Time - O(n^2) for brute force
// Space - O(n) for brute force

// Brute force approach:
var minMeetingRoomsBF = function (intervals) {
  if (!intervals || intervals.length === 0) return 0;

  let rooms = [];

  for (let i = 0; i < intervals.length; i++) {
    let placed = false;

    // Check if the meeting can be placed in an existing room
    for (let j = 0; j < rooms.length; j++) {
      if (intervals[i][0] >= rooms[j]) {
        rooms[j] = intervals[i][1];
        placed = true;
        break;
      }
    }
    // If it cannot be placed in any existing room, add a new room
    if (!placed) {
      rooms.push(intervals[i][1]);
    }
  }
  return rooms.length;
};

console.log(
  minMeetingRoomsBF([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // 2
console.log(
  minMeetingRoomsBF([
    [7, 10],
    [2, 4],
  ])
); // 1
console.log(
  minMeetingRoomsBF([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
); // 1
console.log(
  minMeetingRoomsBF([
    [0, 30],
    [5, 10],
    [15, 20],
    [20, 25],
  ])
); // 2


// Optimized approach: using minHeap

//Intuition

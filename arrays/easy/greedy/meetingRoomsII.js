// Problem:  Given an array of meeting time intervals intervals where
// intervals[i] = [start_i, end_i], determine the minimum number of conference rooms required.

/*
Approach:
- Pattern: Greedy + Sorting + Two Pointers (Sweep Line Concept)
- We separate all start times and end times, sort them independently,
  and simulate a timeline of meetings starting and ending.

Problem:
- Given an array of meeting intervals [start, end],
  return the minimum number of conference rooms required.
- A room can be reused if a meeting ends before another starts.
- If start == end → no overlap (room can be reused).

Intuition:
- Think of each start as "a meeting begins" and each end as "a meeting finishes".
- If a meeting starts before the earliest one ends → we need a new room.
- If a meeting starts after one ends → we reuse a room.
- We track the maximum number of simultaneous meetings.

Key Idea:
- Sort start times → order of arrivals
- Sort end times → order of departures
- Use two pointers to compare them and detect overlap

Complexity:
O(nlogn) - Time Complexity (sorting)
O(n) - Space Complexity 
*/

const minConferenceRooms = (intervals) => {
  const start = intervals.map((i) => i[0]).sort((a, b) => a - b); // a meeting begins
  const end = intervals.map((i) => i[1]).sort((a, b) => a - b); // a meeting ends
  let endPtr = 0; // tracks earliest meeting that ends
  let rooms = 0;

  for (let i = 0; i < start.length; i++) {
    if (start[i] <= end[endPtr]) {
      // new meeting starts before the earliest one ends, needs a new room
      rooms++;
    } else {
      // meeting has already ended before this one starts
      endPtr++; // so, free the room
    }
  }
  return rooms;
};

console.log(
  "No overlap (single room)",
  minConferenceRooms([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // 1

console.log(
  "All meetings overlap (max rooms needed)",
  minConferenceRooms([
    [1, 10],
    [2, 9],
    [3, 8],
    [4, 7],
  ])
); // 4

console.log(
  "Exact end-start touch (no overlap)",
  minConferenceRooms([
    [1, 5],
    [5, 10],
    [10, 15],
  ])
); // 1

console.log(
  "Partial overlaps",
  minConferenceRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // 2

console.log(
  "Same start time",
  minConferenceRooms([
    [1, 4],
    [1, 3],
    [1, 2],
  ])
); // 3

console.log(
  "Nested meetings",
  minConferenceRooms([
    [1, 10],
    [2, 3],
    [4, 5],
    [6, 7],
  ])
); // 2

console.log("Single meeting", minConferenceRooms([[5, 10]])); // 1

console.log(
  "Two meetings fully overlapping",
  minConferenceRooms([
    [1, 5],
    [2, 6],
  ])
); // 2

console.log(
  "Unsorted input",
  minConferenceRooms([
    [5, 10],
    [0, 30],
    [15, 20],
  ])
); // 2

console.log(
  "Large interval with small overlaps",
  minConferenceRooms([
    [1, 100],
    [10, 20],
    [30, 40],
    [50, 60],
  ])
); // 2

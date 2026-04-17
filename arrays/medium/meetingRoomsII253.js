// ### LeetCode 253: Meeting Rooms II

// **Difficulty:** Medium

// ---

// ### Approach

// Sorting + Greedy + Two Pointers (Intervals)

// ---

// ### Problem

// We need to find the **minimum number of meeting rooms required** to accommodate all meetings without conflicts.

// **Problem Statement:**
// Given an array of meeting time intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the **minimum number of conference rooms required**.

// ---

// ### Intuition

// * We need to count how many meetings are happening **at the same time**.
// * For that, we separate:

//   * All **start times** into one array
//   * All **end times** into another array
// * Sort both arrays.

// Now:

// * If a meeting starts **before the earliest ending meeting finishes**, we need a **new room**.
// * If a meeting starts **after or when a meeting ends**, we can **reuse the room**.

// This comes from the rule:

// > If `start < end` → overlap → need new room
// > If `start >= end` → reuse room (move end pointer)

// ---

// ### Approach (Steps / Notes)

// * Let `n = intervals.length`

// * If `n === 0`, return `0`

// * Create:

//   * `starts = intervals.map(i => i[0]).sort((a,b) => a-b)`
//   * `ends = intervals.map(i => i[1]).sort((a,b) => a-b)`

// * Initialize:

//   * `endPtr = 0`
//   * `rooms = 0`

// * Traverse all start times:

//   * If `starts[i] < ends[endPtr]`
//     → No room is free → **rooms++**
//   * Else
//     → Room freed → **endPtr++** (reuse room)

// * Return `rooms`

// ### Code

var minMeetingRooms = function(intervals) {
  let n = intervals.length;
  if(n === 0) return 0;

  let starts = intervals.map(i => i[0]).sort((a,b)=>a-b);
  let ends = intervals.map(i => i[1]).sort((a,b)=>a-b);

  let endPtr = 0;
  let rooms = 0;

  for(let i = 0; i < n; i++){
    if(starts[i] < ends[endPtr]){
      rooms++;
    } else {
      endPtr++;
    }
  }

  return rooms;
};

// ✅ No meetings
console.log(
    "Edge - Empty:",
    minMeetingRooms([])
  ); // 0
  
  // ✅ Single meeting
  console.log(
    "Edge - Single:",
    minMeetingRooms([[5, 10]])
  ); // 1
  
  // ❌ All meetings overlap → max rooms
  console.log(
    "Edge - Full overlap:",
    minMeetingRooms([
      [1, 5],
      [2, 6],
      [3, 7],
    ])
  ); // 3
  
  // ✅ No overlaps at all
  console.log(
    "Edge - No overlap:",
    minMeetingRooms([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  ); // 1
  
  // ✅ Touching boundaries (reuse room)
  console.log(
    "Edge - Touching:",
    minMeetingRooms([
      [1, 5],
      [5, 10],
      [10, 15],
    ])
  ); // 1
  
  // ❌ Same start time → need multiple rooms
  console.log(
    "Edge - Same start:",
    minMeetingRooms([
      [1, 4],
      [1, 3],
      [1, 2],
    ])
  ); // 3
  
  // ❌ Same end time
  console.log(
    "Edge - Same end:",
    minMeetingRooms([
      [1, 5],
      [2, 5],
      [3, 5],
    ])
  ); // 3
  
  // ❌ Nested intervals
  console.log(
    "Edge - Nested:",
    minMeetingRooms([
      [1, 10],
      [2, 3],
      [4, 5],
      [6, 7],
    ])
  ); // 2
  
  // ❌ Unsorted input
  console.log(
    "Edge - Unsorted:",
    minMeetingRooms([
      [5, 10],
      [0, 30],
      [15, 20],
    ])
  ); // 2
  
  // ❌ Complex overlap pattern
  console.log(
    "Edge - Mixed overlaps:",
    minMeetingRooms([
      [0, 10],
      [5, 15],
      [10, 20],
      [12, 25],
    ])
  ); // 3
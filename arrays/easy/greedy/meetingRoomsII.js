// Problem:  Given an array of meeting time intervals intervals where
// intervals[i] = [start_i, end_i], determine the minimum number of conference rooms required.

const minConferenceRooms = (intervals) => {
  const start = intervals.map((i) => i[0]).sort((a, b) => a - b);
  const end = intervals.map((i) => i[1]).sort((a, b) => a - b);
  let endPtr = 0;
  let rooms = 0;


  for (let i = 0; i < start.length; i++) {
    if (start[i] <= end[endPtr]) {
      rooms++;
    } else {
      endPtr++;
    }
  }
  return rooms;
};

console.log(
    "No overlap (single room)",
    minConferenceRooms([[1, 2], [3, 4], [5, 6]])
  ); // 1
  
  console.log(
    "All meetings overlap (max rooms needed)",
    minConferenceRooms([[1, 10], [2, 9], [3, 8], [4, 7]])
  ); // 4
  
  console.log(
    "Exact end-start touch (no overlap)",
    minConferenceRooms([[1, 5], [5, 10], [10, 15]])
  ); // 1
  
  console.log(
    "Partial overlaps",
    minConferenceRooms([[0, 30], [5, 10], [15, 20]])
  ); // 2
  
  console.log(
    "Same start time",
    minConferenceRooms([[1, 4], [1, 3], [1, 2]])
  ); // 3
  
  console.log(
    "Nested meetings",
    minConferenceRooms([[1, 10], [2, 3], [4, 5], [6, 7]])
  ); // 2
  
  console.log(
    "Single meeting",
    minConferenceRooms([[5, 10]])
  ); // 1
  
  console.log(
    "Two meetings fully overlapping",
    minConferenceRooms([[1, 5], [2, 6]])
  ); // 2
  
  console.log(
    "Unsorted input",
    minConferenceRooms([[5, 10], [0, 30], [15, 20]])
  ); // 2
  
  console.log(
    "Large interval with small overlaps",
    minConferenceRooms([[1, 100], [10, 20], [30, 40], [50, 60]])
  ); // 2


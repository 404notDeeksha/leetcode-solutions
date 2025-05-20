// Leetcode 253. Meeting Rooms II
// Difficulty: Medium
// Approach: Sorting + Intervals 

// Intuition:


// Complexity:


var minMeetingRooms = function(intervals) {
//     if (!intervals || intervals.length === 0) return 0;
//     // let min=1;

//     intervals.sort((a,b)=> a[0]-b[0]);
//     let merged=[intervals[0]];

//     for(let i=1; i<intervals.length ; i++){
//         let last = merged[merged.length-1];
//         let curr = intervals[i];

//         if(last[1]>curr[0]){
//             // min++;
//             merged.push(curr);
//         }
//     }
//     // return min;
// return merged.length;
}

console.log(minMeetingRooms([[0,30],[5,10],[15,20]])); // 2
console.log(minMeetingRooms([[7,10],[2,4]])); // 1
console.log(minMeetingRooms([[1,2],[2,3],[3,4],[4,5]])); // 1
console.log(minMeetingRooms([[0,30],[5,10],[15,20],[20,25]])); // 2
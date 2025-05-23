// Leetcode 986. Interval List Intersections
// Difficulty: Medium
// Approaches: Two Pointers

// intuition:
// 1. We can use two pointers to iterate through both lists.
// 2. For each pair of intervals, we can check if they intersect by comparing their start and end times.
// 3. If they do intersect, we can add the intersection to the result list.
// 4. If they don't intersect, we can move the pointer of the interval that ends first.
// 5. We repeat this process until we reach the end of either list.
// 6. Finally, we return the result list containing all the intersections.

// Complexity:
// Time Complexity: O(n + m), where n and m are the lengths of the two lists.
// Space Complexity: O(k), where k is the number of intersections.

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let common=[];
    let i=0; let j=0;
    while(i<firstList.length && j<secondList.length){
        let start = Math.max(firstList[i][0],secondList[j][0]);
        let end = Math.min(firstList[i][1],secondList[j][1]);

        if(start<=end){
            common.push([start,end]);
        }

        if(firstList[i][1]<secondList[j][1]) i++;
        else
        j++;
    }
    return common;
};

console.log(intervalIntersection([[0,2],[5,10],[13,23],[24,25]],[[1,5],[8,12],[15,24],[25,26]])); // [[1,2],[5,5],[8,10],[15,23],[24,24]]
console.log(intervalIntersection([[1,3],[5,9]],[[2,3],[6,8]])); // [[2,3],[6,8]]
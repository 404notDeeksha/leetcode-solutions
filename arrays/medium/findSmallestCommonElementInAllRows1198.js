// Leetcode 1198. Find Smallest Common Element in All Rows
// Difficulty: Medium
// Category: Arrays

// Approach: Brute force 

// Complexity 
// Time: O(m*n*m) where n is the number of rows and m is the average number of elements in each row. Also .includes() takes O(m) time to search for an element in the array.
// Space: O(1) since we are not using any extra space

//Intuition:
// In nested array, consider all elemnts to be row = r & all elements in a row be column = c.
// we iterate through r=1 till we reach the last row.
// For each element in the r=0, we check if it is present in all other rows.
// If we find an element that is present in all rows (r == k.length), we return it.
// If not, we continue to the next element (c++) in r=0.
// If we reach the end of the r=0 and haven't found any common element, we return -1.

function smallestCommonElementBF(k) {
    if(k.length === 1) return k[0][0];
    for(let c=0;c<k[0].length;c++){

        let r=1;
      while(r<k.length && k[r].includes(k[0][c])) {r++};
        if(r === k.length){return k[0][c];}
      }
    return -1;
}

console.log(smallestCommonElementBF([[1,2,3],[2,3,4],[2,5,6]])); // 2

//Edge case
console.log(smallestCommonElementBF([[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]])); //-1

//edge case
console.log(smallestCommonElementBF([ [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]])); // 1

//Edge case
console.log(smallestCommonElementBF([[1,2,3]])); //1

console.log(smallestCommonElementBF([[1, 2, 5, 7],
    [5, 6, 7, 8],
    [0, 5, 9, 10]]));

function range(start, end) {
return Array.from({ length: end - start }, (_, i) => start + i);
 }
      
const testInput = [
        range(1, 1001),         // [1, 2, ..., 1000]
        range(1001, 2001),      // [1001, 1002, ..., 2000]
        range(2001, 3001)       // [2001, 2002, ..., 3000]
]; //-1

//Edge case
console.log(smallestCommonElementBF(testInput));
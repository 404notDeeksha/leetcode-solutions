// Leetcode 344. Reverse String
// Difficulty : Easy
//Approach : Two Pointers


// Intuition:
// We can use the two pointers approach to solve this problem.
// We can start with one pointer at the beginning and one at the end of the string.
// We can then swap the characters at the two pointers and move the pointers towards the center.
// We can repeat this process until the two pointers meet in the middle.

// Complexity:
// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(1), since we are not using any extra space.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let l=0;
    let r=s.length-1;
    while(l<r){
        [s[l++],s[r--]]=[s[r],s[l]];
    }
    return s;
};
console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
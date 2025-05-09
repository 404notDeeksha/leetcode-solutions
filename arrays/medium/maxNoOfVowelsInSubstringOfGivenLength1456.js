// LeetCode #1456. Maximum Number of Vowels in a Substring of Given Length
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers & Sliding Window

// #Intuition
// - The substring has to be of length k
// - The substring has to have the maximum number of vowels

// #Approach
// - Use two pointers to find the maximum number of vowels in the substring
// - Use a variable to keep track of the number of vowels in the substring
// - Use a variable to keep track of the starting index of the substring
// - Use a variable to keep track of the ending index of the substring
// - Use a variable to keep track of the maximum number of vowels in the substring
// - Use a variable to keep track of the length of the substring
// - Use a variable to keep track of the number of vowels in the substring

// #Complexity
// - Time complexity:
// - O(n) for the two pointers
// - Space complexity:
// - O(1) for the variables
// #Code
//javascript []

//Revisit: Yes

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let set = new Set(['a','e','i','o','u']);
    let count=0;let maxCount=0;
    for(let j=0;j<s.length;j++){
        if(set.has(s[j])) count++;
        if((j>=k) && set.has(s[j-k])) count--;
        maxCount = Math.max(count,maxCount);
    }
    return maxCount;
};
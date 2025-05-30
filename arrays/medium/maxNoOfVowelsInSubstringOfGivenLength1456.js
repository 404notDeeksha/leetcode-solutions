// LeetCode #1456. Maximum Number of Vowels in a Substring of Given Length
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers & Sliding Window

// #Intuition
// - The substring has to be of length k
// - The substring has to have the maximum number of vowels

// #Approach
// - Initialise a set of vowels.
// - Iterate over string.
// - if element in string is present already in set, increment count.
// - when iteration goes over k & start element of substring [j-k] is present in set, decrement count.
// - Use a variable to count max out of all substrings.
// - Return max;

// #Complexity
// - Time complexity:
// - O(n) for the two pointers
// - Space complexity:
// - O(n) for the set
// #Code
//javascript []

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

console.log(maxVowels("abciiidef",3)); //3
console.log(maxVowels("aeiou",2)); //2
console.log(maxVowels("a",1)); //1
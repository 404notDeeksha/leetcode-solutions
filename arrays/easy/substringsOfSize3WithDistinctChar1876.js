// LeetCode #1876. Substrings of Size Three with Distinct Characters 
// Difficulty: Easy
// Category: Arrays
// Approach: Two Pointers & sets


// Appraoch :
// we will iterate over the String & will add every new element of string to a set.
// We will check if set already doesnt have same element present, if yes, we will delete all elements from start of till element present in set.
//we will track start of set alongside.
// when set size will be greater than 3, count will increment.
// return count.



//Complexity: O(n) & Space: O(n)

/**
 * @param {string} s
 * @return {number}
 */

var countGoodSubstrings = function(s) {
    let set = new Set();
    let count=0;
    let left=0;
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
           set.delete(s[left]);
           left++;
        }
        set.add(s[i]);
        if(set.size>=3){count++;}    
    }
    return count;
};

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));

// #More Optimum & easier Approach
//Complexity: O(n) & Space: O(1)

// # Code
// javascript []
var countGoodSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i <= s.length - 3; i++) {
        let a = s[i], b = s[i+1], c = s[i+2];
        if (a !== b && b !== c && a !== c) {
            count++;
        }
    }
    return count;
};
console.log(countGoodSubstrings("xyzzaz"));
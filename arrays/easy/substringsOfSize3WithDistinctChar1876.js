// LeetCode #1876. Substrings of Size Three with Distinct Characters 
// Difficulty: Easy
// Category: Arrays
// Approach: Two Pointers & sets

//Complexity: O(n) & Space: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let set = new Set();
    let count=0;let l=0;
    for(let i=0;i<s.length;i++){
        while(set.has(s[i])){
           set.delete(s[l]);
           l++;
        }
        set.add(s[i]);
        if(set.size>3){
         set.delete(s[l]);
         l++;
        }
        if(set.size === (3)){
        count++;}    
    }
    return count;
};

console.log(countGoodSubstrings("xyzzaz"));


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
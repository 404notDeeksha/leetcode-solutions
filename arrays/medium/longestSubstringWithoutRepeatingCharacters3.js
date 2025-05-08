// LeetCode #3: Longest Substring Without Repeating Characters 
// Difficulty: Medium
// Category: Arrays
// Approach: Sliding Window & Sets

var lengthOfLongestSubstring = function(s) {
        let set = new Set();
        let j=0;
        let maxLen=0;
        for(let i=0;i<s.length;i++){
           while(set.has(s[i])){
            set.delete(s[j]);
            j++;
           } 
           set.add(s[i]);
           maxLen=Math.max(maxLen,i-j+1);
        }
        return maxLen;
    };
// Leetcode: 242: Valid Anagram.
// Difficulty: Easy
// Intuition: Hashmap - An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// Approach - Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// 1. If lengths of 2 strings isnt equal, it is not an anagram.
// 2. Put all char of s in a map with freq.
// 3. Iterate t .
        // - check if char in t is present in map.
        // - if it isnt, return false.
        // - reduce relevant freq. in map if char in t is matched in map.
        // - if freq becomes 0, delete that entry from map.
// 4. return true if map size becomes 0.       


// Complexity:

// Time Complexity: O(n)
// Space Complexity: O(k). // k - unique char

var isAnagram = function(s, t) {
    if(s.length !== t.length){ return false;}
    
    // map to track string characters
    let map = new Map();

    // store all string char in map
    for(let char of s){
        map.set(char, (map.get(char) || 0)+1);
    }

    // check if char of t match with char of s
    // if tchar is present in map, reduce its repeatation by 1 
    // if repeatation is 0, delete the char
    for(let char of t){
        if(!map.get(char)){return false;}
        map.set(char, (map.get(char) - 1));
        if(map.get(char) === 0) {map.delete(char);}
    }

    return map.size === 0;
    
};

// --- mental model

// function createMap(str){
//     let map = new Map();
//     for(let i=0; i<str.length; i++){        
//         map.set(str[i], (map.get(str[i]) || 0) +1);
//     }
//     return map;
// }

// var isAnagram = function(s, t) {
//     if(createMap(s) === createMap(t)){
//         return true;
//     }
//     return false;
// };

// above wont work bcz map are non primitive data types, stored by reference: two seperately created maps are never equal.

// --- Another Approach

// var isAnagram = function(s, t) {
//     if(s.length !== t.length) return false;

//     let sArr = new Array(26).fill(0);
//     let tArr = new Array(26).fill(0);

//     for(let i=0; i<s.length; i++){
//         sArr[s.charCodeAt(i) - 97]++;
//         tArr[t.charCodeAt(i) - 97]++;
//     }
//     for(let i=0; i<sArr.length; i++){
//         if(sArr[i] !== tArr[i]) return false;
//     }
//     return true;
// };

// ✅ Basic true cases
console.log("simple true", isAnagram("anagram", "nagaram")); // true
console.log("repeated chars", isAnagram("aabb", "bbaa"));   // true
console.log("single letter same", isAnagram("a", "a"));     // true

// ❌ Basic false cases
console.log("simple false", isAnagram("rat", "car"));       // false
console.log("different length", isAnagram("ab", "a"));      // false
console.log("single letter diff", isAnagram("a", "b"));     // false

// 🧪 Edge cases with tricky chars
console.log("empty strings", isAnagram("", ""));            // true
console.log("one empty", isAnagram("", "a"));               // false
console.log("unicode chars", isAnagram("🙂🙃", "🙃🙂"));    // true
console.log("unicode mismatch", isAnagram("🙂", "🙃"));     // false

// 🧪 Case sensitivity (depends on implementation)
console.log("case sensitive fail", isAnagram("Hello", "hello")); // false
console.log("case sensitive pass", isAnagram("Aa", "aA"));       // true if map-based

// 🧪 Very long strings (performance check)
const longA = "a".repeat(100000);
const longB = "a".repeat(100000);
console.log("long identical", isAnagram(longA, longB));     // true

const longC = "a".repeat(99999) + "b";
console.log("long one diff", isAnagram(longA, longC));      // false

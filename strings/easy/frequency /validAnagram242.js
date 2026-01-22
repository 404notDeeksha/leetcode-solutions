// Leetcode: 242: Valid Anagram.
// Difficulty: Easy
// Approach: Hashmap

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

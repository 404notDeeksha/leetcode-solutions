// Leetcode: 387: First Unique Character in String.
// Difficulty: Easy
// Intuition: Traversal + frequency mapping

// Approch - Optimised

//  1. Add a map to count char with their frequency of occurance.
//  2. Add all char to map.
//      - add their frequency.
//  3. Iterate again. if freq of first char occurence is 1, return index.
//  4. Return -1 if no char has 1 as freq.

// Complexity:

// Time Complexity: O(n)
// Space Complexity: O(n).

var firstUniqChar = function(s) {
    let map = new Map();
    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1);
    }

    for(let i=0; i<s.length; i++){
        if(map.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
}

// ---

// Approach: BRUTE FORCE
// 1. Lets go with Iteration & flag mapping.
// 2. Outer Iteration will be 0 -> n (i)
// 3. Initialise a flag as true.
// 4. Inner Iteration will also be 0 -> n (j)
// 5. If i & j indices are different & characters are same, 
//      -   break the inner loop. 
//      -   mark flag = false.
// 6. If characters dont match, & flag is still true after completion of inner loop, return i;
// 6. Return -1 if flag is still false;

// Complexity:

// Time Complexity: O(n2)
// Space Complexity: O(1).

// var firstUniqCharBF = function(s) {
//     for (let i = 0; i < s.length; i++) {
//         let isUnique = true;

//         for (let j = 0; j < s.length; j++) {
//             if (i !== j && s[i] === s[j]) {
//                 isUnique = false;
//                 break;
//             }
//         }

//         if (isUnique) return i;
//     }
//     return -1;
// };

console.log("Empty string:", firstUniqChar(""));
console.log("Single character:", firstUniqChar("a"));
console.log("All repeating:", firstUniqChar("aabbcc"));
console.log("First is unique:", firstUniqChar("leetcode"));
console.log("Middle unique:", firstUniqChar("loveleetcode"));
console.log("Last unique (critical):", firstUniqChar("aaab"));
console.log("Multiple uniques:", firstUniqChar("abacddbec"));
console.log("Late unique:", firstUniqChar("aaaaaaaaab"));
console.log("All same char:", firstUniqChar("zzzzzz"));
console.log("Mixed case / symbols (Map version only):", firstUniqChar("aA!a"));

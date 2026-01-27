// Leetcode: 387: First Unique Character in String.
// Difficulty: Easy
// Approach: Traversal + frequency mapping

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

var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        let isUnique = true;

        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) return i;
    }
    return -1;
};

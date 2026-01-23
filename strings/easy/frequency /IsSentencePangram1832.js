// Leetcode: 1832: Is Sentence Pangram.
// Difficulty: Easy
// Approach: Traversal + frequency mapping

// Approach:
// 1. Lets work with quicker exit approach.
// 2. If length of sentence is less than 26, It is not a Pangram.
// 3. Initialise an array of 26 length , filled with 0s.
// 4. Iterate through sentence.
//      - Extract ASCII code of each character.
    //  - place -1 in array at location where letter code must fall in alphabetical order (code - 97). 
// 5. Iterate array.
        // - Check if it has 0 in it. return false.
// 6. Return true;


// Complexity:

// Time Complexity: O(n)
// Space Complexity: O(1). (constant space of 26)

var checkIfPangram = function(sentence) {
    if (sentence.length < 26) return false;

    let codeArr = new Array(26).fill(0);

    for (let i = 0; i < sentence.length; i++) {
        let code = sentence.charCodeAt(i);
        codeArr[code - 97] = 1;
    }

    for (let i = 0; i < 26; i++) {
        if (codeArr[i] === 0) return false;
    }

    return true;
};

console.log("Empty string:", checkIfPangram("")); 
// false

console.log("Length < 26:", checkIfPangram("abcdefghijklmnopqrstuvwxy")); 
// false

console.log("Exact 26 unique:", checkIfPangram("abcdefghijklmnopqrstuvwxyz")); 
// true

console.log("Repeated characters:", checkIfPangram("aaaaaaaaaaaaaaaaaaaaaaaaaa")); 
// false

console.log("Valid pangram:", checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); 
// true

// Simpler & readable solution

var checkIfPangram2 = function(sentence) {
    return new Set(sentence).size === 26;
};
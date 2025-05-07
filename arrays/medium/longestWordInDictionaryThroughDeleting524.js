// LeetCode #524: Longest Word in Dictionary through Deleting
// Difficulty: Medium
// Category: Arrays
// Approach: Two Pointers

// # Intuition
// every element in the dictionary is a word which is a subsequence of the string s.

// # Approach
// - Use a function to check if the word is a subsequence of the string s
// - Use a variable to keep track of the longest word
// - check word of bigger length or lexicographically smaller

// # Complexity
// - Time complexity:
// - O(n) for the function to check if the word is a subsequence of the string s
// - O(m) for the loop to check each word in the dictionary
// - O(m*n) for the loop to check each word in the dictionary
// - O(m*n) = O(m*n)

// - Space complexity:
// - O(1) for the variables

// # Code
// javascript []

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    const canForm = (word) => {
        let pos = -1
        for(let i=0; i<word.length; i++){
            const l = word[i]
            pos = s.indexOf(l, pos+1)
            if(pos === -1) return false
        }
        return true
    }
    let result = ""
    for(let word of dictionary){
        if(canForm(word) && (word.length > result.length || word.length === result.length && word < result)){
            result = word
        }
    }
    return result
};


console.log(findLongestWord("abpcplea",["ale","apple","monkey","plea"]));
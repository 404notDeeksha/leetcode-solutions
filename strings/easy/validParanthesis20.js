// Leetcode Problem 20: Valid Parentheses
// Check right pair of parentheses in a string
// Implementation - stack + maps

// Approach:
// 1. Create a Map to hold right pairs of paranthesis.
// 2. Create a stack to hold the closing paranthesis as we encounter the opening ones in string.
// 3. Iterate through the string.
// 4. If the character is an opening paranthesis, push the corresponding closing paranthesis onto the stack.
// 5. If the character is a closing paranthesis, pop from stack & check if it matches the current character.
// 6. If it doesn't match, return false.
// 7. If the stack is empty at the end, return true, else false.

// Complexity:
// Time : O(n)
// Space: O(n) for stack


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let arr=[['{','}'],['[',']'],['(',')']];
    let map = new Map(arr);
    for (let char of s) {
        if (map.has(char)) {
            stack.push(map.get(char));
        } else {
            if (stack.pop() !== char) return false;
        }
    }
    return stack.length === 0;
};
// Leetcode Problem 20: Valid Paranthesis
// Implementation - stack

// Approach:
// 1. Here every last opening bracket type must have a closing bracket in same order.
// 2. We will keep an stack & push any opening bracket in it.
// 3. Keep a map object with closing types as key & opening ones as values.
// 4. For any closing bracket, last char of stack (top) shall be popped.
//       - check if top === map(char).
//       - If false, return false.
//       - If stack.length === 0, return false.
// 5. Return stack.length ===0;    

// Complexity:
// Time : O(n)
// Space: O(n)

var isValidParanthesis = function (s) {
    let stack = []
    let map = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        } else {
            let top = stack.pop()
            if (!top || (s[i] !=map[top]) ) {
                return false
            }
        }
    }
    return stack.length == 0;
};

// 1️⃣ Empty input
console.log("Empty String:", isValidParanthesis("")); 
// true → no brackets means nothing is invalid

// 2️⃣ Single character (cannot be valid)
console.log("Single Opening:", isValidParanthesis("(")); 
// false

console.log("Single Closing:", isValidParanthesis(")")); 
// false

// 3️⃣ Only one type, correct order
console.log("Simple Valid:", isValidParanthesis("()")); 
// true

// 4️⃣ Only one type, wrong order
console.log("Wrong Order:", isValidParanthesis(")(")); 
// false

// 5️⃣ Multiple types, properly nested
console.log("Nested Valid:", isValidParanthesis("{[()]}")); 
// true

// 6️⃣ Multiple types, but wrong nesting
console.log("Wrong Nesting:", isValidParanthesis("{[(])}")); 
// false

// 7️⃣ Sequential but valid (not nested)
console.log("Sequential Valid:", isValidParanthesis("()[]{}")); 
// true

// 8️⃣ Closing bracket appears first
console.log("Starts With Closing:", isValidParanthesis("]")); 
// false

// 9️⃣ Extra opening bracket left
console.log("Unclosed Opening:", isValidParanthesis("((()")); 
// false

// 🔟 Extra closing bracket
console.log("Extra Closing:", isValidParanthesis("())")); 
// false

// 1️⃣1️⃣ Long valid input
console.log(
  "Long Valid:",
  isValidParanthesis("({[]})({[]})")
); 
// true

// 1️⃣2️⃣ Alternating invalid pattern
console.log(
  "Alternating Invalid:",
  isValidParanthesis("([)]")
); 
// false

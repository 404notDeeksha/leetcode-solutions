//Leetcode 844. Backspace String Compare
// Difficulty: Easy
// Approach: Stack

//Intuition:
// We can use a stack to pop char which falls before '#' symbol.
// we will iterate over a string & push its char into stack.
// If we encounter '#' symbol, last element of stack shall be deleted.
// Finally, both strings will be compared after joining stack.

// Complexity:
// Time : O(n+m)
// Space: O(n+m)

var backspaceCompare = function (s, t) {
  if (stack(s) === stack(t)) {
    return true;
  } else {
    return false;
  }
};
const stack = (str) => {
  let stack = [];
  for (let char of str) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
};

console.log("Stack approach");
console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false

//Approach : Two Pointer
// More Optimal

// Complexity:
// Time : O(n)
// Space: O(1)

var backspaceCompare1 = function (s, t) {
  let i = s.length - 1,
    j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidIndex(s, i);
    j = getNextValidIndex(t, j);

    if (i < 0 && j < 0) return true; // both finished
    if (i < 0 || j < 0) return false; // one finished before the other
    if (s[i] !== t[j]) return false; // mismatch

    i--;
    j--;
  }
  return true;
};

function getNextValidIndex(str, index) {
  let skip = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      skip++;
      index--;
    } else if (skip > 0) {
      skip--;
      index--;
    } else {
      break;
    }
  }
  return index;
}

console.log("Two Pointer approach");
console.log(backspaceCompare1("ab#c", "ad#c")); // true
console.log(backspaceCompare1("ab##", "c#d#")); // true
console.log(backspaceCompare1("a#c", "b")); // false

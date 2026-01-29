// leetcode 13. Roman to Integer
// Difficulty: Easy
// Approach: Map + Iteration

// Problem:
// Given a roman numeral as string, return its number form.

// Intuition + Trick:
// Roman forms are summed if Larger Roman falls before smaller Roman.
// In opposite cases, Smaller Roman is subtracted from larger Roman.

// Approach:
// 1. Create a map of Roman Numerals - I, V, X, L, C, D, M.
// 2. Iterate the string.
//      - Since we have to check two neighbouring digits, we must go uptill s.length-1.
//      - if next character is greater than current one, subtract current from total.
//      - else add current to total.
// 3. Return number.

// Complexity:
// Time complexity: O(n) where n is the length of the string.
// Space complexity: O(1) since we are using a fixed-size map.

// code
var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
      number -= map[s[i]];
    } else {
      number += map[s[i]];
    }
  }
  return number;
};

// 🧪 Edge Case Tests
console.log("Basic numeral:", romanToInt("III"));
// 3

console.log("Subtractive rule (IV):", romanToInt("IV"));
// 4

console.log("Simple mixed:", romanToInt("IX"));
// 9

console.log("Larger compound:", romanToInt("LVIII"));
// 58 → L(50)+V(5)+III(3)

console.log("Typical test:", romanToInt("MCMXCIV"));
// 1994 → M(1000)+CM(900)+XC(90)+IV(4)

console.log("Single numeral:", romanToInt("V"));
// 5

console.log("Highest possible (MMMCMXCIX):", romanToInt("MMMCMXCIX"));
// 3999 → max valid roman

console.log("Repeating numerals:", romanToInt("XXVII"));
// 27 → 10+10+5+1+1

console.log("Lower combination:", romanToInt("XLII"));
// 42 → XL(40)+II(2)

console.log("Hundreds mix:", romanToInt("CDXLIV"));
// 444 → CD(400)+XL(40)+IV(4)

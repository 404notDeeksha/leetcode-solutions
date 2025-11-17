// Leetcode 202
// Difficulty: Easy
// Category: Arrays
// Approach - Floyd's Cycle Detection Algorithm (Slow and Fast Pointer)

// Problem:
// Determine if given no. is a Happy Number
// A happy number is positive & subsequent squares of its digits end in 1

// Intuition:
// Use a helper function to calculate sum of squares of a number.
// Use two pointers to detect if sum of squares ends up in a loop or ends up to be 1.

// Approach
// 1. Use two pointers to detect the cycle.
//      - Slow pointer moves one step at a time
//      - Fast pointer moves two steps at a time
//      - If the fast pointer meets the slow pointer, It will move out of loop & it means we are in a cycle.
//      - If the fast pointer reaches 1, It will move out of loop & it means the number is happy
// 2. Return true if the number is happy (fast === 1), false otherwise.

// Complexity
// Time complexity: O(logn) as sumSqDigits1 will take O(logn) time to calculate the sum of the square of each digit.
// - Space complexity: O(1)
// - This approach does not use extra space for HashSet
// - This approach is more efficient than the HashSet approach

// # Code
// javascript []
var isHappy = function (n) {
  let slow = n;
  let fast = sumOfSquares(n);

  //Detect cycle
  while (fast !== 1 && fast !== slow) {
    slow = sumOfSquares(slow);
    fast = sumOfSquares(sumOfSquares(fast));
  }
  return fast === 1;
};

const sumOfSquares = (n) => {
  let sum = 0;
  while (n > 0) {
    let num = n % 10;
    sum = sum + num * num;
    n = Math.floor(n / 10);
  }
  return sum;
};

console.log("Happy Number Approach 1: Slow and Fast Pointer");

// 1. Example happy number
console.log("Example case", isHappy(19));
// Expected: true → sequence: 19 → 82 → 68 → 100 → 1

// 2. Single digit happy number
console.log("Single digit happy (1)", isHappy(1));
// Expected: true → already 1

// 3. Single digit non-happy number
console.log("Single digit non-happy (2)", isHappy(2));
// Expected: false → 2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4 (cycle)

// 4. Large happy number
console.log("Large happy number", isHappy(1000));
// Expected: true → 1000 → 1^2 + 0^2 + 0^2 + 0^2 = 1

// 5. Large non-happy number
console.log("Large non-happy number", isHappy(999));
// Expected: false

// 6. Number with zeroes
console.log("Number with zeros", isHappy(10));
// Expected: true → 1^2 + 0^2 = 1

// 7. Minimal input
console.log("Minimal input", isHappy(0));
// Expected: false → 0 → 0^2 = 0 (stuck)

// 8. Number causing short loop quickly
console.log("Quick loop number", isHappy(4));
// Expected: false → known cycle starter

// --------------------------

// Alternate Approach : This doesnt work for cycle detection through pointers
// - Use a HashSet to keep track of the numbers we have seen
// - uses logn Space

// - If we see a number that we have already seen, it means we are in a cycle and the number is not happy
// - If we reach 1, it means the number is happy
// - Return true if the number is happy, false otherwise

// # Complexity
// - Time complexity: O(logn)
// - a no. n has around logn digits
// - each digit will take O(1) time to square
// - sum of the square of each digit will take O(logn) time

// - Space complexity: O(logn)
// HashSet will take O(logn) space because we are storing the numbers we have seen which are at most logn in size
// - O(logn) is the dominant term

// # Code
// javascript []
var isHappy = function (n) {
  let seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) return false;
    seen.add(n);
    n = sumSqDigits(n);
  }
  return true;
};

const sumSqDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    let num = n % 10;
    sum = sum + num * num;
    n = Math.floor(n / 10);
  }
  return sum;
};

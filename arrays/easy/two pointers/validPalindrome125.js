// Leetcode 125. Valid Palindrome
// Difficulty: Easy
// Approaches: Two Pointers

//Most optimum Solution

// Problem:
// Given a string, we have to check if it is a valid palindrome. It can have only alphaNumeric characters.

// Intuition:
// We will need two pointers & check string from start & end. Only alphanumeric char must be checked & non-alphanumeric ones must be skipped.
// if two pointers meet each other, string is a valid palindrome.
// If not, return false.

// Approach:
// We will use two pointers at end points of string, & convert whole string to lowercase.
// We will iterate the string untill two pointers meet.
//      - We will check if both pointers are pointing to a valid alphanumeric char.
//      - If yes, we will compare if they are equal or not. If not, return false.
//      - If no, we shall skip the pointer untill it points to a valid alphanumeric char.
// When pointers meet each other, return true;

// Complexity : Time: O(n) Space: O(1)

// Code:
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlphaNum(s[left])) {
      left++;
      continue; // to bring incremented left element under conditional check
    }
    if (!isAlphaNum(s[right])) {
      right--;
      continue;
    }
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

//use const for helper functions if we arent reassigning
const isAlphaNum = (char) => {
  let regex = /^[a-z0-9]$/;
  return regex.test(char);
};

// ^ - denotes start of string.

// --------------------------------

// 2nd solution- Concised form

//Intuition:
// We can use the two pointers approach to solve this problem without creating a new string.
// We can start with one pointer at the beginning and one at the end of the string.
// We can then check if the characters at the two pointers are alphanumeric.
// If they are not, we can move the pointers towards the center until we find alphanumeric characters.
// If the characters at the two pointers are equal, we can move the pointers towards the center.
// If they are not equal, we can return false.

// Complexity:
// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(1), since we are not using any extra space.

var isPalindromeOptimized = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNum2(s[left])) left++;
    while (left < right && !isAlphaNum2(s[right])) right--;

    if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
  }
  return true;
};

// const isAlphaNum2 = (char) => {
//  return /[a-z0-9]/.test(char);
// }

//-----------------------------------

//3rd Solution: less optimum

//Intuition:
// We can use the two pointers approach to solve this problem.
// First, remove all non-alphanumeric characters from the string and convert it to lowercase.
// Then, we can use two pointers to check if the string is a palindrome.
// We can start with one pointer at the beginning and one at the end of the string.
// If the characters at the two pointers are equal, we can move the pointers towards the center.
// If they are not equal, we can return false.
// If we reach the center of the string, we can return true.

// Complexity:
// Time Complexity: O(n), where n is the length of the input string.
// Space Complexity: O(n), since we are creating new string after removing non-alphanumeric characters.

var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left++] !== s[right--]) return false;
  }
  return true;
};

console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log("Optimized Palindrome Check:");
console.log(isPalindromeOptimized("race a car")); // false
console.log(isPalindromeOptimized("A man a plan a canal Panama")); // true

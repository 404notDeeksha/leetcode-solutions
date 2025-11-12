// LeetCode 1346. Check If N and Its Double Exist
// Difficulty: Easy
// Category: Arrays
// Approach: Sets

// Problem: Given an array of integers, we have to check if double of an array element exist in array.

// # Intiution
// - Use a set to store the elements of the array
// - Check if the double of the element exists in the set
// - Check if the half of the element exists in the set
// - Return true if any of the above conditions are met
// - Return false if none of the above conditions are met

// # Complexity
// - Time complexity:
// - O(n) for the set
// - O(1) for the set operations
// - Space complexity:
// - O(n) for the set

// # Code
var checkIfExist = function (arr) {
  let l = 0;
  let set = new Set();
  while (l < arr.length) {
    // Since array is integers array, check ensures even integers are only processed.
    if (set.has(2 * arr[l]) || (arr[l] % 2 === 0 && set.has(arr[l] / 2))) {
      return true;
    }
    set.add(arr[l]);
    l++;
  }
  return false;
};

// 🧪 Edge Case Tests
console.log("Basic positive case:", checkIfExist([10, 2, 5, 3]));
// true (10 is double of 5)

console.log(
  "Negative numbers included:",
  checkIfExist([-2, 0, 10, -19, 4, 6, -8])
);
// false (no valid double pair)

console.log("All zeros:", checkIfExist([0, 0]));
// true (0 == 2 * 0)

console.log("Single element:", checkIfExist([1]));
// false (no pair possible)

console.log("Empty array:", checkIfExist([]));
// false (no elements to compare)

console.log("Negative and positive doubles:", checkIfExist([-10, -5, 2, 4]));
// true (-10 == 2 * -5 or 4 == 2 * 2)

console.log("No doubles present:", checkIfExist([3, 1, 7, 11]));
// false

console.log("Includes even and odd mix:", checkIfExist([7, 1, 14, 11]));
// true (14 == 2 * 7)

console.log("Duplicate numbers but no doubles:", checkIfExist([5, 5, 5]));
// false (no number is double of another)

console.log("Zero with other numbers:", checkIfExist([0, 3, 7, 14]));
// true (14 == 2 * 7, zero is harmless but should not cause false positive)

console.log("Negative doubles only:", checkIfExist([-4, -2, 0, 1, 2]));
// true (-2 == 2 * -1 doesn’t exist, but -4 == 2 * -2)

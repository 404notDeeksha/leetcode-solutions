// LeetCode 1346. Check If N and Its Double Exist
// Difficulty: Easy
// Category: Arrays
// Approach: Sets

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
// javascript []

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let l = 0;
  let set = new Set();
  while (l < arr.length) {
    if (set.has(2 * arr[l]) || (arr[l] % 2 === 0 && set.has(arr[l] / 2))) {
      return true;
    }
    set.add(arr[l]);
    l++;
  }
  return false;
};

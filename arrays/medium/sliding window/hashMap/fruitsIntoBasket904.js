// Leetcode: 904. Fruits into Basket
// Problem : longest subarray containing at most 2 distinct elements
// Difficulty: Medium

// Optimised Approach : HashMaps;

// Intuition:
// We are supposed to maximise a tree type occurence while starting with a certain tree.
// The maximum repeated trees we can cover, the better.

// Approach
// 1. First, use Map to track fruits inside the window (our baskets).
//    - key = fruit type.
//    - value = count of that fruit in the current window.

// 2. Use one pointer `i` to mark the start of the window 
//    - the first tree we currently include.
//    - This will help us shrink the window when we exceed 2 fruit types.

// 3. Use another pointer `j` to trace subsequent trees.
//    For each tree, add its fruit to the map and increase its count.

// 4. If the map ever has more than 2 types of fruits, 
//    - start shrinking from the left:
//    - reduce count of fruits[left]
//    - if count becomes 0, remove that fruit from the map
//    - move `i` ahead by 1
//    - Keep shrinking until map.size <= 2

// 5. At each step, update the maximum window size (j - i + 1).

// The result will be the largest window we could maintain 
// with at most 2 fruit types → maximum fruits collected.


// Complexity:
// Time : O(n);
// Space: O(1);

var totalFruit = function(fruits) {
    let n = fruits.length;
    let maxLen = 0;
    let map = new Map();
    let i=0;
    for(let j=0; j<n ; j++ ){
      map.set(fruits[j],(map.get(fruits[j]) || 0) + 1);
  
      while(map.size > 2){
          map.set(fruits[i], map.get(fruits[i]) - 1);
          if(map.get(fruits[i]) === 0){
              map.delete(fruits[i]);
          }
          i++;
      }
        maxLen = Math.max(maxLen, j - i + 1);
    }
      return maxLen;
  };

// --------------------------------------------------

// Brute Force 
// Approach:

// 1. For each tree index i, start fresh with an empty set (called basket) to keep track of the unique fruits.
// 2. Move right with j, adding each fruit to the basket.
// 3. If the basket ever holds more than 2 types, break—since only 2 baskets are allowed.
// 4. For every valid tree picked, bump up the count.
// 5. After each addition, update maxLen with the largest count seen so far.
// 6. In the end, maxLen tracks the longest stretch you can pick using at most 2 types of fruits.

//Complexity:
// Time: O(n2);
// Space: O(1)

var totalFruitBF = function(fruits) {
    let n = fruits.length;
    let maxLen = 0;

    for (let i = 0; i < n; i++) {
        let basket = new Set();
        let count = 0;

        for (let j = i; j < n; j++) {
            basket.add(fruits[j]);

            if (basket.size > 2) break; // can't use more than 2 baskets

            count++;
            maxLen = Math.max(maxLen, count);
        }
    }
    return maxLen;
};

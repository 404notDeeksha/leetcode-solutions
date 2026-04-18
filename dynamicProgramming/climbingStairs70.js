// Leetcode 70:
// Approach: Dynamic Programming (1D DP - Fibonacci pattern) using Tabulation (Bottom-Up), derived from Recursion + Memoization

// Problem: LeetCode 70 - Climbing Stairs
// Given n steps, you can climb either 1 or 2 steps at a time. Find the total number of distinct ways to reach the top.
// Input: integer n (number of steps)
// Output: integer (number of distinct ways)

// Intuition:
// To reach step n, you must come from either step (n-1) or (n-2).
// So total ways = ways(n-1) + ways(n-2).
// Instead of recalculating repeatedly (recursion), we store only the last two results using variables and build forward.

// Approach:
// If n <= 2, return n (base cases).
// Initialize prev1 = 1 (ways to reach step 1), prev2 = 2 (ways to reach step 2).
// Run a loop from i = 3 to n:
//   - curr = prev1 + prev2
//   - shift values: prev1 = prev2, prev2 = curr
// Return prev2 as the final answer.

// Complexity:
// Time Complexity: O(n)
// Space Complexity: O(1)







var climbStairs = function(n) {
    if (n <= 2) return n;

    let prev1 = 1; // f(1)
    let prev2 = 2; // f(2)

    for (let i = 3; i <= n; i++) {
        let curr = prev1 + prev2;

        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
};
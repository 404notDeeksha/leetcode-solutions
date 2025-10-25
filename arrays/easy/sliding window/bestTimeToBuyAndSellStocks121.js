// LeetCode #121: Best Time to Buy and Sell Stock
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// Problem:
// Given stocks on different days, we must maximise profit with max difference between stocks on different days.

// Intuition
// max profit will be from stocks with lesser value at left end & greater value at right end.

// # Approach
// - Use two pointers to find the maximum profit
// - Use a variable to keep track of the starting index of the sliding window.
// - Use a variable to keep track of the ending index of the sliding window.
// - Use a variable to keep track of the maximum profit
// - return the maximum profit

// # Complexity
// - Time complexity:
// - O(n) for the two pointers

// - Space complexity:
// - O(1) for the variables

// # Code
var maxProfit = function(prices) {
    let max=0;
    let i=0;
    for(let j=i+1;j<prices.length;j++){
        let diff=prices[j]-prices[i];

        if(diff<0){
            i=j
            }
        else
        {
            max=Math.max(max,diff);
        }
    }
    return max;
};


console.log("Minimum Input (Only one price)", maxProfit([5])); 
// Expected: 0 → Cannot buy and sell on the same day

console.log("All Decreasing Prices (No profit possible)", maxProfit([9, 8, 6, 3, 1])); 
// Expected: 0 → Prices keep falling, no chance to make profit

console.log("All Increasing Prices (Max profit case)", maxProfit([1, 2, 3, 4, 5])); 
// Expected: 4 → Buy at 1, sell at 5

console.log("Typical Fluctuating Prices (Normal Case)", maxProfit([7, 1, 5, 3, 6, 4])); 
// Expected: 5 → Buy at 1, sell at 6

console.log("All Same Prices (No profit, no loss)", maxProfit([4, 4, 4, 4, 4])); 
// Expected: 0 → No change in price

console.log("Two Elements - Increasing", maxProfit([2, 4])); 
// Expected: 2 → Buy at 2, sell at 4

console.log("Two Elements - Decreasing", maxProfit([4, 2])); 
// Expected: 0 → Price drops, no profit

console.log("Random High-Low Pattern (Multiple peaks)", maxProfit([3, 2, 6, 5, 0, 3])); 
// Expected: 4 → Buy at 2, sell at 6

console.log("Empty Array (Invalid Input)", maxProfit([])); 
// Expected: 0 → No data to process

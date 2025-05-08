// LeetCode #121: Best Time to Buy and Sell Stock
// Difficulty: Easy
// Category: Arrays
// Approach: Sliding Window

// # Intuition
// max profit has to be tracked

// # Approach
// - Use two pointers to find the maximum profit
// - Use a variable to keep track of the starting index of the subarray
// - Use a variable to keep track of the ending index of the subarray
// - Use a variable to keep track of the maximum profit
// - return the maximum profit

// # Complexity
// - Time complexity:
// - O(n) for the two pointers

// - Space complexity:
// - O(1) for the variables

// # Code
// javascript []


/**
 * @param {number[]} prices
 * @return {number}
 */

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
console.log(maxProfit([7,1,5,3,6,4]))
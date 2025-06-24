// Leetcode 202
// Difficulty: Easy
// Category: Arrays
// Approach - Floyd's Cycle Detection Algorithm (Slow and Fast Pointer)

// # Intuition
// A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit.
// If it does not reach 1, it will enter a cycle that does not include 1. (value will start to repeat)

// # Approach
// - Use two pointers to detect the cycle
// - Slow pointer moves one step at a time
// - Fast pointer moves two steps at a time
// - If the fast pointer meets the slow pointer, it means we are in a cycle
// - If the fast pointer reaches 1, it means the number is happy
// - Return true if the number is happy, false otherwise
// - This approach does not use extra space for HashSet
// - This approach is more efficient than the HashSet approach

// # Complexity
// - Time complexity: O(logn) as sumSqDigits1 will take O(logn) time to calculate the sum of the square of each digit. 
// - Space complexity: O(1)


// # Code
// javascript []
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = sumSqDigits1(n);

    while(fast!==1 && fast!==slow){
        slow=sumSqDigits1(slow);
        fast=sumSqDigits1(sumSqDigits1(fast));
    }
    return fast===1;
};

const sumSqDigits1=(n)=>{
    let sum=0;
    while(n>0){
        let num=n%10;
        sum=sum+num*num;
        n=Math.floor(n/10);
    }
    return sum;
}

console.lof("Happy Number Approach 1: Slow and Fast Pointer");
console.log(isHappy(19)); // true


// # Approach
// - Use a HashSet to keep track of the numbers we have seen
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
// /**


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();
    while(n!==1) {
        if(seen.has(n)) return false;
        seen.add(n);
        n=sumSqDigits(n);
    }
    return true;
};

const sumSqDigits=(n)=>{
    let sum=0;
    while(n>0){
        let num=n%10;
        sum=sum+num*num;
        n=Math.floor(n/10);
    }
    return sum;
}

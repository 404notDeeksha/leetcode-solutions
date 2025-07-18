//Leetcode 125. Valid Palindrome
// Difficulty: Easy
// Approaches: Two Pointers

//Most optimum Solution

var isPalindrome = function(s) {
    s=s.toLowerCase();
    let left=0;
    let right=s.length-1;
    
    while(left<right){
        if(!isAlphaNum(s[left])){
            left++;
            continue;
        }
        if(!isAlphaNum(s[right])){
            right--;
            continue;
        }
        if(s[left]!==s[right]){
            return false;            
            } 
    left++;
    right--;
    }
     return true;
};

//use const for helper functions if we arent reassigning
 const isAlphaNum=(char)=>{
        let regex = /^[a-z0-9]$/;
        return regex.test(char);
}

//2nd solution- Concise 

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

var isPalindromeOptimized = function(s) {
    let left=0;
    let right=s.length-1;
    while(left<right){
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left++].toLowerCase() !== s[right--].toLowerCase()) return false;
    }
    return true;
}

//Used in 1st Solution
// const isAlphaNum = (char) => {
//  return /[a-zA-Z0-9]/.test(char);
// }

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

var isPalindrome = function(s) {
    s=(s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase());
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left++]!==s[right--]) return false;
    }
    return true;
};

console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log("Optimized Palindrome Check:");
console.log(isPalindromeOptimized("race a car")); // false
console.log(isPalindromeOptimized("A man a plan a canal Panama")); // true
// leetcode 13. Roman to Integer
// Difficulty: Easy
// Approach: Map + Iteration



// Intuition:
// Create a map of Roman Numerals.
// Iterate the string. 
// Check if string has more than one character & if next character is greater than current one, subtract current from total.
// else add current to total.

// Complexity:
// Time complexity: O(n) where n is the length of the string.
// Space complexity: O(1) since we are using a fixed-size map.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let map={
     'I':1,
     'V':5,
     'X':10,
     'L':50,
     'C':100,
     'D':500,
     'M':1000,
    }
    let number=0;
    let j=-1;
    for(let index=0; index<s.length; index++){
         if(index<s.length-1 && map[s[index]]<map[s[index+1]]){            
             number-=map[s[index]];
         }
         else{            
             number += map[s[index]];
         }
         j++;    
    }
    return number;
 };

 console.log(romanToInt("III")); // 3
 console.log(romanToInt("MCMXLII")); //1942
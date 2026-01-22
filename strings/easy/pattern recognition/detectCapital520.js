// Leetcode Problem 520: Detect Capital 
// Implementation - pattern recognition

// Approach #1: Using ASCII code - Verbose
// 1. This approach involves checking ascii code of first & second character os string.
// 2. If second char is uppercase, first Char cant be lowercase.   
// 3. Iterate from 3rd char to end of string. If char exists,
//      - Check If 2nd char is uppercase, all trailing char must be uppercase. 
//      - Check If 2nd char is lowercase, all trailing char must be lowercase.  
// 4. If all consitions are met, return true.

// Complexity:
// Time : O(n)
// Space: O(1)

var detectCapitalUse = function(word) {
    let n = word.length;
     let firstCode = word.charCodeAt(0);
    let code = 0;
    if(word[1]) {code = word.charCodeAt(1)};
    if(firstCode >= 97 && firstCode <= 122 && code >= 65 && code <= 90){return false;}
    for(let i=2; i<n ; i++){
        if(word[i]){
            if(code >= 65 && code <= 90) 
                { if(firstCode >= 97 && firstCode <= 122 && word.charCodeAt(i)<65 || word.charCodeAt(i)>90){ return false;} }
            else if(code >= 97 && code <= 122){
                if(word.charCodeAt(i)<97 || word.charCodeAt(i)>122){ return false;}
            }    
        }
    }
    return true;
};

console.log("All lowercase:", detectCapitalUse("word"));          // true
console.log("All uppercase:", detectCapitalUse("USA"));           // true
console.log("First capital only:", detectCapitalUse("Google"));   // true

console.log("Mixed case invalid:", detectCapitalUse("FlaG"));     // false
console.log("Uppercase in middle:", detectCapitalUse("GoOgle"));  // false
console.log("Lowercase start uppercase later:", detectCapitalUse("woRd")); // false

console.log("Single lowercase letter:", detectCapitalUse("a"));   // true
console.log("Single uppercase letter:", detectCapitalUse("Z"));   // true
console.log("Two letters valid:", detectCapitalUse("Us"));        // true
console.log("Two letters invalid:", detectCapitalUse("uS"));      // false

console.log("All same uppercase:", detectCapitalUse("AAAA"));     // true
console.log("All same lowercase:", detectCapitalUse("aaaa"));     // true
console.log("Capital at end only:", detectCapitalUse("gooGle"));  // false

console.log("Proper noun:", detectCapitalUse("India"));           // true
console.log("Acronym-like:", detectCapitalUse("NASA"));           // true
console.log("Sentence-style word:", detectCapitalUse("OpenAI"));  // false


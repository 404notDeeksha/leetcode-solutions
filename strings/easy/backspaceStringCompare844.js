//Leetcode 844. Backspace String Compare
// Difficulty: Easy
// Approach: Stack

//Intuition:
// We can use a stack to pop char which falls before '#' symbol.
// we will iterate over a string & push its char into stack.
// If we encounter '#' symbol, last element of stack shall be deleted.
// Finally, both strings will be compared after joining stack.



var backspaceCompare = function(s, t) {
    if(stack(s) === stack(t)){
       return true;
      }else
      {return false}
   };
   const stack=(str)=>{
       let stack=[];
       for(let char of str){
           if(char === '#'){
               stack.pop();
           }else{
               stack.push(char);
           }
       }
       return stack.join('');   
   }

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true 
console.log(backspaceCompare("a#c", "b")); // false
// Problem - Codewars Russian Post Code Validation
// A russian postcode is a string of 6 digits, where the first digit must be within 12346 & next 5 can be between 0-9. No other characters are allowed.

function zipvalidate(postcode) { 
    // RegEx to check numbers in postcode
    let regex = /^[12346][0-9]{5}$/; 
  
    return regex.test(postcode)? true: false;
  }

  console.log(zipvalidate("123456")); // true
  console.log(zipvalidate("12345a")); // false
  console.log(zipvalidate("mE$JfGBz#j1Q,K")); // false


// Initial attempt
// function zipvalidate(postcode) {
//     //applying regex
//     // understanding problem - check for valid postal code
//     // must be 6 digits, all numbers.
//     // must not start with 0,5,7,8,9
//     // can only start with 1,2,3,4,6
    
//     // RegEx to check numbers in postcode
//     let regex = /[0-9]/;
  
//     // Check length
//     if(postcode.length !== 6) return false;
    
//     // Check if all values of postcode are numbers
//     for(let char of postcode){ 
//       if (!regex.test(char)) {return false;}
//     };
    
//     //check if first digit is valid
//     if(postcode[0] === '0' || postcode[0] === '5' || postcode[0] === '7' || postcode[0] === '8' || postcode[0] === '9'){return false;} 
    
//     return true;
//   }


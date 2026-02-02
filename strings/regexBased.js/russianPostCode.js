// Problem - Codewars Russian Post Code Validation
// A russian postcode is a string of 6 digits, where the first digit must be within 12346 & next 5 can be between 0-9. No other characters are allowed.

// Approach - 1:
    // applying regex
    // understanding problem - check for valid postal code
    // must be 6 digits, all numbers.
    // must not start with 0,5,7,8,9
    // can only start with 1,2,3,4,6
    
    // RegEx to check numbers in postcode :  let regex = /[0-9]/;

function zipvalidate1(postcode) { 
    // RegEx to check numbers in postcode
    let regex = /^[12346][0-9]{5}$/; 
  
    return regex.test(postcode)? true: false;
  }

  console.log(zipvalidate1("123456")); // true
  console.log(zipvalidate1("12345a")); // false
  console.log(zipvalidate1("mE$JfGBz#j1Q,K")); // false

// ----  

// Approach - 2: Loop based
// 1. Check length
// 2. Check if all values of postcode are numbers
// 3. Check if first digit is valid


function zipvalidate2(postcode) {  
    if(postcode.length !== 6) return false;
    
    for(let char of postcode){ 
      if (!regex.test(char)) {return false;}
    };
    
    if(postcode[0] === '0' || postcode[0] === '5' || postcode[0] === '7' || postcode[0] === '8' || postcode[0] === '9'){return false;} 
    
    return true;
  }


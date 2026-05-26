var validPalindrome = function (s) {
  let checkPalindrome = (left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
    }
    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        checkPalindrome(left, right - 1) || checkPalindrome(left + 1, right)
      );
    }
    left++;
    right--;
  }
  return true;
};

//
console.log(validPalindrome("aba"));

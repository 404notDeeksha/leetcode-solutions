var longestPalindrome = function(s) {
    let longest = "";

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindrome
        let odd = expand(i, i);

        // Even length palindrome
        let even = expand(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};
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

    return longest;
};
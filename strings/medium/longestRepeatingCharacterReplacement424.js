var characterReplacement = function(s, k) {
    let map = new Map();
    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;

    for(let right=0; right<s.length; right++){

        map.set(s[right],(map.get(s[right]) || 0) +1);

        maxFreq = Math.max(maxFreq, map.get(s[right]) );

        while((right - left +1) - maxFreq > k){
            map.set(s[left],(map.get(s[left]) || 0) -1);
            left++;
        }
        maxLen = Math.max(right-left+1, maxLen);
    }
    return maxLen;
};
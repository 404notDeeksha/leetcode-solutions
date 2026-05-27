var findAnagrams = function(s, p) {
    let result = [];
    if(p.length > s.length) return result;

    let pCount = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    // for 1st window
    for(let i=0; i<p.length; i++){
        pCount[p.charCodeAt(i) - 97]++;
        windowCount[s.charCodeAt(i) - 97]++;
    }

    if(pCount.toString() === windowCount.toString()){
        result.push(0);
    }

    // for rest of windows
    for(let right=p.length ; right<s.length ; right++){
        windowCount[s.charCodeAt(right) - 97]++;

        let left = right - p.length;
        windowCount[s.charCodeAt(left) - 97]--;
        
        if(pCount.toString() === windowCount.toString()){
            result.push(left+1);
        }
    }
    return result;
};

var groupAnagrams = function(strs) {
    
    const map = new Map();
    for (let i = 0; i<strs.length; i++) {
  
      const newStr = strs[i].split('').sort().join("");
  
      if (!map.has(newStr)) {
        map.set(newStr, []);
      }
  
      map.get(newStr).push(strs[i]);
    }
    return [...map.values()];
  
  };
    
// --------------

  var groupAnagrams = function(strs) {
    const map = {};

    for (let word of strs) {
        // 26-length frequency array
        let freq = new Array(26).fill(0);

        for (let ch of word) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        // Use frequency signature as key
        let key = freq.join("#");

        if (!map[key]) {
            map[key] = [];
        }

        map[key].push(word);
    }

    return Object.values(map);
};

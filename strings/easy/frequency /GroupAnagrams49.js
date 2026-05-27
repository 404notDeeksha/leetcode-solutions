
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
    

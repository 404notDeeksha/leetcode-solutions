
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
// or
 
var groupAnagrams = function(strs) {
    let map = new Map();

    for(let str of strs){
        let newStr = str.split("").sort().join("");

        if(!map.has(newStr)){
            map.set(newStr,[str]);
        }else{
            map.get(newStr).push(str);
        }
        
    }
    return [...map.values()]
};

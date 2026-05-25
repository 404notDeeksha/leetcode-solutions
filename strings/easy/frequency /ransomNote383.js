// Complexity:
// - Time: O(n)
// - Space: O(n)

// var canConstruct = function (ransomNote, magazine) {
//   if (ransomNote.length > magazine.length) return false;

//   const map = new Map();
//   for (let char of ransomNote) {
//     const index = magazine.indexOf(char, map.get(char) || 0);
//     if (index == -1) return false;
//     map.set(char, index + 1);
//   }

//   return true;
// };

// - Time: O(n)
// - Space: O(n)

var canConstruct = function(ransomNote, magazine) {
    const map = new Map();

    for (const ch of magazine) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (const ch of ransomNote) {
        if (!map.has(ch) || map.get(ch) === 0) {
            return false;
        }

        map.set(ch, map.get(ch) - 1);
    }
    
    return true;
};
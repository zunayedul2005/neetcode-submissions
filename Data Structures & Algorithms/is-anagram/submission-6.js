class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length!== t.length) return false;

        let map_s = new Map();
        let map_t= new Map();

      for(let i=0; i<s.length; i++){
        map_s.set(s[i], (map_s.get(s[i]) || 0)+1)
        map_t.set(t[i], (map_t.get(t[i])||0)+1)

      }
        
        for (let[char, count] of map_s){
            if(map_t.get(char)!==count){
                return false
            }
        }
        return true;
        
    }
}

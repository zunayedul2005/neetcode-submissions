class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


        if( s.length !== t.length){
            return false;
        }
        let map_s = new Map();
        let map_t= new Map();

        for(let i=0; i<s.length; i++){
            if (map_s.has(s[i])){
                map_s.set(s[i], map_s.get(s[i])+1)
            }
           else map_s.set(s[i],1)
        }


        for(let k=0; k<t.length; k++){
            if (map_t.has(t[k])){
                map_t.set(t[k], map_t.get(t[k])+1)
            }
           else map_t.set(t[k],1)
        }
        
        for (let[char, count] of map_s){
            if(map_t.get(char)!==count){
                return false
            }
        }

        return true;
        
    }
}

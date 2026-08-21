class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // 1. Convert to lowercase so 'A' and 'a' match easily
let cleanStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

for(let i=0; i< cleanStr.length; i++){ 
    let j = cleanStr.length-i-1;

    if(cleanStr[i]!== cleanStr[j]){
        return false;
    }
}
return true;
    
    
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        const isNonAlpha = /[^a-zA-Z0-9]/;
        let right = s.length-1;

        while(left<right) { 
            if(isNonAlpha.test(s[left].toLowerCase())){
                left++
                continue
            }
            if(isNonAlpha.test(s[right].toLowerCase())){
                right--
                continue

        }

        if(s[left].toLowerCase()!==s[right].toLowerCase()){
            return false;
        }
        left++
        right--

    }
    return true;
  }
}

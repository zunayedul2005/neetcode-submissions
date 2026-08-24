class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let map = new Map();
        let left =0;
        let right=0;
        let max_length=0;

        while(right<s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);

            while( (right-left+1) - Math.max(...map.values()) > k) {
                map.set(s[left], map.get(s[left])-1 )
                left++;
            }


            max_length= Math.max(right-left+1, max_length);
            right++;

        }
        return max_length;
    }
}

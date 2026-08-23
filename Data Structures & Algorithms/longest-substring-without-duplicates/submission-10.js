class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left=0;
        let right=0;

        let seen= new Set();
        let count =0;

        while(right<s.length) {

            if(!seen.has(s[right])){
                seen.add(s[right])
                count = Math.max(count, seen.size)
                right++

            }
            else{
                seen.delete(s[left])
                left++
            }
        }

        return count;
    }
}

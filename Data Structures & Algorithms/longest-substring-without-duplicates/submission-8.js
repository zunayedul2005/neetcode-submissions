class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0; // Start both at 0 so we check the very first letter
        let subString = new Set();
        let max_Count = 0;

        while (right < s.length) {
            // IF NO DUPLICATE: Add the character, update max, and expand window (right++)
            if (!subString.has(s[right])) {
                subString.add(s[right]);
                max_Count = Math.max(max_Count, subString.size);
                right++; 
            } 
            // IF DUPLICATE: Remove the left-most character and shrink window (left++)
            else {
                subString.delete(s[left]);
                left++; 
            }
        }
        
        return max_Count;
    }
}
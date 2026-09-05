class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = "";
        let count =0;

        for(let i=0; i<s.length; i++) {
            let low =i;
            let high =i;
            //checking for odd length palindrome
            while(low>= 0 && high<s.length && s[low]== s[high]){
                //check if the new palindrone greater than eisting one or not
                let length = high-low+1
                if(length > count) {
                    res = s.substring(low, high+1);
                    count = length;
                    
                }
                low--
                high++

            }

           

            //check for even length palindrome
             low =i;
             high =i+1;

            while(low>= 0 && high<s.length && s[low]== s[high]){
                //check if the new palindrone greater than eisting one or not
               let length = high-low+1
                if(length > count) {
                    res = s.substring(low, high+1);
                    count = length;
                    
                }
                low--
                high++

            }




        }

        return res;
    }
}

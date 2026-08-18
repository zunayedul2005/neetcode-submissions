class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ="";
        for(let str of strs){
            result += String(str.length) + "#"+str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded=[];
        let i =0

        while(i<str.length){
          let  j=i;

            while(str[j]!=="#"){
                j++;
            }

            let length = parseInt(str.substring(i, j));

            let word = str.substring(j+1, length+1+j);

            decoded.push(word);

            i = length+j+1;



        }
        return decoded;
    }
}

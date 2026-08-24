class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let dict = new Map([
            ["(" , ")"],

            [ "["  ,"]"],

            ["{",   "}"]

        ]);


        let stack = [];

        for( let bracket of s) {

            if(dict.has(bracket)){  //if bracket in the map, meaning if its an opening
                stack.push(bracket);
            }

            else if( stack.length==0 || bracket!== dict.get(stack[stack.length-1]) ) {
                    return false;
            }

            else stack.pop();


        }

        return stack.length ===0;

    }
}

class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    isHappy(n, dict= new Map()) {
        let number = n.toString();
        

        let sum =0;

        for(let num of number){
            sum+= Number(num**2)
        }
        
        if(sum == 1) return true;
        if(!dict.has(sum)) dict.set(sum)
          else return false;
        
       return  this.isHappy(sum,dict);

        }

    }



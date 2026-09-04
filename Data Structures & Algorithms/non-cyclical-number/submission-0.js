class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
       
        let set = new Set();

        while(n!==1 && !set.has(n)){

            set.add(n);
            
            let sum =0;
             let str = n.toString();
             for(let value of str){
                sum += Number(value)**2;
             }

             n = sum;

        }

        return n==1;
    }
}

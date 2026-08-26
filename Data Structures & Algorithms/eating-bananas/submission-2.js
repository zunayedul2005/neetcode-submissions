class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        let low = 1
        let high = Math.max(...piles);
        let min_k = high; // at beginning temporarily store the min_k /time as      highest;
        while(low<=high) {
            let rate = Math.floor((low+high)/2);
            let total_hrs =0;

            for(let i=0; i<piles.length; i++){
                total_hrs += Math.ceil(piles[i]/rate);

            }

            if(total_hrs>h){  //if with the binary mid rate, we exceed time limit(h), then try again with a higher rate, by shifting low to a ligher value
                low= rate +1;

            }

            else { //if we didnt exceed the time limit, then try again to see if we can find a even slower rate
                min_k = Math.min(min_k, rate);
                high = rate-1; 
            }

        }
        return min_k;
    }
}

class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left =0;
        let right = left+1;
        let max_profit = 0;
        while(right< prices.length) {
            let profit = prices[right]- prices[left];
             max_profit = Math.max(profit, max_profit);

            if(prices[right]< prices[left]){
                left = right;
        
            }
            right++;


        }
        return max_profit;
    }
}

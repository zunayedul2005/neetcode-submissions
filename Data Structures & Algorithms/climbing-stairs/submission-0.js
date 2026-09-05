class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        let memo = {};
        function dfs(i){
            if(i==n) return 1;
            if(i>n) return 0;

            if(i in memo) return memo[i];

            memo[i] = dfs(i+1)+ dfs(i+2);

            return memo[i];

        }
        return dfs(0);
    }
}

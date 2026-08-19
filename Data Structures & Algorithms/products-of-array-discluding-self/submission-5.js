class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre_m =1;
        let post_m =1;
        const n = nums.length; 
        let pre=[];
        let post =[];
        let output =[];

        for (let i=0; i<n; i++){ 
            let j = n-1-i;
            pre[i] = pre_m;
            pre_m *= nums[i]

            post[j]= post_m
            post_m *= nums[j]

        }

        for( let i2 =0; i2< n; i2++){
        
            output[i2] = pre[i2] * post[i2];

        }
        return output;
    }
}

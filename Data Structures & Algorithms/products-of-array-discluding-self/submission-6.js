class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product =1;
        let output=[];
        let zeroCount =0;
        //solution with division method
        for(let num of nums){
            if(num==0) zeroCount++;
            else product*= num;
        }

        for(let i=0; i<nums.length;i++){
            if(zeroCount>1) output.push(0);

            else if(zeroCount ==1){
                if(nums[i]==0) output[i]=product;
                else output[i]=0;
            }

           else output[i]= Math.floor(product/nums[i]);
        }

        return output;

    }
}

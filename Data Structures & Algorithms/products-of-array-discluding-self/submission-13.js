class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let output =[];
        let left =[];
        let right =[];

        let leftProduct = 1;
        let rightProduct =1;

        for(let i=0; i<nums.length; i++){
            let j = nums.length-1-i;

            left[i]= leftProduct;
            leftProduct *= nums[i]

            right[j] = rightProduct;
            rightProduct *= nums[j];
        }

        for(let i=0; i<nums.length; i++){
            output[i] = left[i]*right[i];
        }

        return output;
    }
}

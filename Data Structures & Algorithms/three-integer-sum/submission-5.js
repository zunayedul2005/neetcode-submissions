class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const s_nums = nums.sort((a,b)=>a-b); 
        let result =[];

        for(let i=0; i<nums.length-1; i++){
            let low =i+1;
            let high=nums.length-1;
            if(i>0 && s_nums[i] ==s_nums[i-1])    continue;

            while(low<high) {

                if(s_nums[i] + s_nums[low] + s_nums[high] == 0){

                result.push([s_nums[i],s_nums[low],s_nums[high]])

                while(low<high && s_nums[low] == s_nums[low+1]){
                        low++}
                    while(low< high && s_nums[high] == s_nums[high-1]){
                        high--}
                low++
                high--
                }


                else if(s_nums[i] + s_nums[low] + s_nums[high] < 0){
                    low++
                    while(s_nums[low] == s_nums[low-1]){
                        low++
                    }
                }

               else if (s_nums[i] + s_nums[low] + s_nums[high] > 0){
                    high--
                    while(s_nums[high] == s_nums[high+1]){
                        high--
                    }
                }

            
                
            }

        }

        return result;
    }
}

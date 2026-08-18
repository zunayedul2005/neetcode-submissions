class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map={};

        for(let num of nums){
            if (!map[num]){
                map[num] =1;
            }else{
                map[num]+=1;
            }
        }
            const entries = Object.entries(map);

// 2. Sort by frequency (index 1) from highest to lowest
entries.sort((a, b) => b[1] - a[1]);

// 3. Extract the first k numbers (index 0) and convert them back to Numbers
return entries.slice(0, k).map(pair => Number(pair[0]));



        
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max_area =0;

            let low =0;
            let high = heights.length-1; 

            while(low<high){

                let width = high-low;
                let height = Math.min(heights[low], heights[high]);

                let area = width * height;
                max_area = Math.max(area, max_area);

                if(heights[low] < heights[high]) {
                      low++
                }
                else high--;

                
            }

        
        return max_area;
    }
}

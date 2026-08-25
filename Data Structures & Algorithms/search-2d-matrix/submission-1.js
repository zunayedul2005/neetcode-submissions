class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        const  row = matrix.length;
        const column = matrix[0].length;

        let low =0;
        let high = row*column -1;

        

        while( low <=high){
            let mid = Math.floor((low+high)/2);

            let row_2d = Math.floor(mid/column);

            let column_2d = mid % column;

            let mid_2d =  matrix[row_2d][column_2d];

            if(mid_2d == target) return true;

            else if( mid_2d > target) high = mid-1;

            else low = mid+1;


        }

        return false;



    }
}

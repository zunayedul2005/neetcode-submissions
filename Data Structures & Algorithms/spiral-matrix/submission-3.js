class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix) {
        let result = [];
        let left=0 , right = matrix[0].length-1; //left n right column
        let top =0, bottom = matrix.length-1; //top an dbottom rows

        while(top <=bottom && left<=right) {
            //iterate left to right, then right to bottom, the bottom to left, then left to top, and repeat;
            //get all top row
            for(let i=left; i<= right; i++){ result.push(matrix[top][i])
            }
            top++;


            // iterate the right column , top to bottom
            for(let i=top; i<=bottom; i++){
                result.push(matrix[i][right]);
            }
            right--;

//mid check
 if (left > right || top > bottom) {
                break;
            }

            //iterate bottom right to left
            for(let i=right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;



            //from bottom left to top (left column)

            for(let i=bottom; i>= top; i--){
                result.push(matrix[i][left]);
            }
            left++;




        }
        return result;
    }
}

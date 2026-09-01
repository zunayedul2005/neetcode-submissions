class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        //first traspose (convert each row into column)
        // reverse each row contents

        for(let row =0; row<matrix.length; row++) {

            for( let col = row+1; col<matrix.length; col++){
                let temp =matrix[row][col]
                matrix[row][col] = matrix[col][row]
                matrix[col][row]= temp;
            }
        }

        // rverse row values
        for(let row=0; row<matrix.length; row++){
            let high= matrix.length-1;
            for(let col=0; col<Math.floor(matrix.length/2); col++){
                let temp = matrix[row] [col]
                matrix[row][col]= matrix[row][high];
                matrix[row][high]= temp;
                high--
            }

        }
        return matrix;

    }
}

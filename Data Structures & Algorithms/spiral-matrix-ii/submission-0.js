class Solution {
    /**
     * @param {number} n
     * @return {number[][]}
     */
    generateMatrix(n) {

        let matrix =[];
        for(let i=0; i<n; i++) matrix.push(new Array(n).fill(0));
        let val =1;

        let top = 0
        let bottom = matrix.length-1;

        let left = 0
        let right = matrix[0].length-1;

        while(left<=right && top<= bottom) {
             //fill top row

             for(let i=left; i<= right; i++) {
                matrix[top][i]= val;
                val++
             }
             top++ //update top pointer


             // fill right column

             for(let i=top; i<=bottom; i++) {
                matrix[i][right]= val;
                val++
             }
             right-- //update right pointer

            //fill bottom row

            for(let i=right; i>=left; i--){
                matrix[bottom][i] = val;
                val++
            }

            bottom-- //update bottom row pointer

            //fill left column
            for(let i =bottom ; i>=top; i--){
                matrix[i][left] = val;
                val++
            }

            left++ //update left pointer



        }

        return matrix;



    }


}

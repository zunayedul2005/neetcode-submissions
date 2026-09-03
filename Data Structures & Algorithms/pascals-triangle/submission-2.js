class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {

        let res = [];
        for(let i=0; i<numRows; i++){
            //make each layer of arr of the pyramid.
            let row = new Array(i+1).fill(1);


// using j column index, edit the values so, they are addition of 2 values from previous arr, except first and last 1
            for(let j =1; j<i;j++){
                row[j]= res[i-1][j-1]+ res[i-1][j];
            }

            res.push(row);

            
        }
        return res;
    }
}

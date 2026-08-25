class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let row = 0; row < matrix.length; row++) {
    let low = 0;
    let high = matrix[row].length - 1;

    // Nested loop for binary search on the current row, since its sorted
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (matrix[row][mid] === target) return true;
        if (matrix[row][mid] < target) low = mid + 1;
        else high = mid - 1;
    }
}
return false;

    }
}

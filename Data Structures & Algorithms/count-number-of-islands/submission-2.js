class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {

        let count =0;

        const row = grid.length;
        const column = grid[0].length;

        function dfs(i,j){
            if(i<0 || i>row-1 || j<0 || j> column-1 || grid[i][j]!=="1") return;

            else{
                grid[i][j] ="0";

                // explore right
                dfs(i, j+1);
                // explore down
                dfs(i+1,j);

                //explore left
                dfs(i, j-1);

                //explore up
                dfs(i-1, j);
            }
        }

        for(let i=0; i<row; i++) {
            for(let j=0; j<column; j++){

                if(grid[i][j]=="1") {
                    count +=1;
                    dfs(i, j)
                }

            }
        }
    
        return count;
    }

}

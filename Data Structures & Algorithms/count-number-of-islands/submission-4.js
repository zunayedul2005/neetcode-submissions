class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */


    //bfs queue approach
    numIslands(grid) {

        const row = grid.length;
        const col = grid[0].length;
        let count =0;
        if(!grid || grid.length==0) return 0;

        for(let i=0; i< row; i++){
            for(let j=0; j< col; j++){

                if(grid[i][j]=="1"){
                    grid[i][j]="0";
                    count ++;
                    let front =0;
                    let queue = [];
                    queue.push ([i,j])

                    // pop the value off queue
                    while(front<queue.length) {

                        let [r,c] = queue[front];
                        front++

                        // check all directions
                        // right , bottom, top, left . order dont matter
                        let dir= [[0,1], [1,0], [-1,0], [0,-1]];

                        for(let [dr, dc] of dir){  // dr,dc mean delta row and colummn
                            let newr = r+dr;
                            let newc = c+ dc;

                        if(newr<0 || newr>row-1 || newc<0 || newc> col-1 || grid[newr][newc]!=="1") {
                            continue;
                        }

                            else{ queue.push([newr, newc]);
                            grid[newr][newc] ="0";

                            }
                        }

                    
                        }
                    }

                }
            }
            return count;
        }
    }


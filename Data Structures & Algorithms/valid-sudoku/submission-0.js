class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(board[0].length).fill("0").map(()=>new Set());
        let cols = new Array(board[0].length).fill("0").map(()=>new Set());
        let boxes = new Map();


        for(let r=0; r<board[0].length; r++) {
            for(let c =0; c< board[0].length ; c++){
                let value = board[r][c];

                if(value ==".") continue;

                let box_pos = `${Math.floor(r/3)}, ${Math.floor(c/3)}`;

                if(!boxes.has(box_pos)){
                    boxes.set(box_pos, new Set())
                }
                
                // check all 3 condition
                if(rows[r].has(value) || cols[c].has(value) ||          boxes.get(box_pos).has(value)){
                    return false;
                }

                //add the valuees to the storage;

                rows[r].add( value);
                cols[c].add( value);
                boxes.get(box_pos).add( value);
            }
        }
        return true;

    }
}

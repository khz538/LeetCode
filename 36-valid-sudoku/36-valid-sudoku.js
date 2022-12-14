/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boxes = []
    const rows = []
    const columns = []
    for (let i = 0; i < 9; i++) {
        boxes.push(new Set())
        rows.push(new Set())
        columns.push(new Set())
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const current_square = board[row][col];
            if (current_square === '.') continue;
            if (rows[row].has(current_square)) return false;
            else rows[row].add(current_square);
            
            if (columns[col].has(current_square)) return false;
            else columns[col].add(current_square);
            
            const box_idx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
            if (boxes[box_idx].has(current_square)) return false;
            else boxes[box_idx].add(current_square);
        }
    }
    return true;
};
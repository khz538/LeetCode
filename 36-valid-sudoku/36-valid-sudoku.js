/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const [boxes, rows, columns] = [[], [], []];
    for (let i = 0; i < 9; ++i) {
        boxes.push(new Set());
        rows.push(new Set());
        columns.push(new Set());
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const square = board[i][j];
            if (square === '.') continue;
            
            // checks if the row already contains this value, and if not, add it to the row's set
            if (rows[i].has(square)) return false;
            rows[i].add(square);
            
            // checks if column already contains this value, and if not, add it to the column's set
            if (columns[j].has(square)) return false;
            columns[j].add(square);
            
            // checks if the box already containse this square, and if not, add it to the box's set
            const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[box].has(square)) return false;
            boxes[box].add(square);
        }
    }
    // if we make it through the validation step above without returning false,
    // we know the sudoku is valid, so we can return true;
    return true;
};
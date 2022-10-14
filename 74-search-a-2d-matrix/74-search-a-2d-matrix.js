/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // since integers are sorted in each row, we can iterate over rows and use binary search within
    // check which row would be in
    let matrixRow = 0;
    matrix.forEach((row, i) => {
        if (row[0] <= target && row[row.length - 1] >= target) matrixRow = i;        
    });
    // once the target row is found, binary search that row
    const array = matrix[matrixRow];
    let [l, r] = [0, array.length - 1];
    while (l <= r) {
        const m = Math.floor((r + l) / 2);
        if (array[m] === target) {
            return true;
        } else if (array[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return false;
};
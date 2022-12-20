/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const visited = new Object();
    while (n !== 1) {
        visited[n] = n
        n = sumSquareOfDigits(n);
        if (n in visited) return false;
    }
    return true;
};

const sumSquareOfDigits = num => {
    let numArray = num.toString().split('');
    return numArray.reduce((acc, num) => {
        acc += Number(num) * Number(num);
        return acc;
    }, 0);
};
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const visited = new Map();
    while (n !== 1) {
        visited.set(n, n)
        n = sumSquareOfDigits(n);
        if (visited.get(n)) return false;
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
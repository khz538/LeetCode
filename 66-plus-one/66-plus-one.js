/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const resIntString = (BigInt(digits.join('')) + BigInt(1)).toString();
    const res = [];
    for (let digit of resIntString) {
        res.push(Number(digit));
    }
    return res;
};
/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    rotated_digits = new Map()
    rotated_digits.set(0,0)
    rotated_digits.set(1,1)
    rotated_digits.set(6,9)
    rotated_digits.set(8,8)
    rotated_digits.set(9,6)
    n_string = n.toString();
    rotated_num = '';
    for (let digit of n_string) {
        digit = +digit;
        if (rotated_digits.get(digit) !== undefined) rotated_num += rotated_digits.get(digit).toString();
        else return false;
    }
    rotated_num = rotated_num.split('').reverse().join('');
    return +rotated_num === n ? false : true;
};
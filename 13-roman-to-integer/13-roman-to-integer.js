/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const [ I, V, X, L, C, D, M ] = [ 1, 5, 10, 50, 100, 500, 1000 ];
    const values = { I, V, X, L, C, D, M };
    let total = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if ( values[s[i]] < values[s[i + 1]] ) total -= values[s[i]];
        else total += values[s[i]];
    }
    return total;
};
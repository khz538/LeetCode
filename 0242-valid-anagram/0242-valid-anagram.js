/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    [s, t] = [s.split('').sort().join(''), t.split('').sort().join('')];
    return s === t;
};
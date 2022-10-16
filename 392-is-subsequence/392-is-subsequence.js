/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    let sPointer = 0;
    for (let char of t) {
        if (char === s[sPointer]) sPointer++;
        if (sPointer === s.length) return true;
    }
    return false;
};
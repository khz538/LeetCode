/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    // start at end of string
    let length = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') break;
        else length++;
    }
    
    return length;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let validChars = 'abcdefghijklmnopqrstuvwxyz1234567890'
    validChars += validChars.toUpperCase()
    const cleanArr = []
    for (let char of s) {
        if (validChars.includes(char)) cleanArr.push(char.toLowerCase());
    }
    if (cleanArr.length === 0) return true;
    for (let i = 0; i < cleanArr.length; i++) {
        const char1 = cleanArr[i];
        const j = cleanArr.length - 1 - i;
        const char2 = cleanArr[j]
        if (char1 !== char2) return false;
        if (i === j) return true;
    }
    return true;
};
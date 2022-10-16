/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const obj = {};
    const obj1 = {};
    s.split(' ').forEach((word, i) => {
        obj[word] = pattern[i];
    })
    pattern.split('').forEach((char, i) => {
        obj1[char] = s.split(' ')[i]
    })
    let newPattern = [];
    let newS = [];
    for (let i = 0; i < pattern.length; i++) {
        newPattern.push(obj[s.split(' ')[i]]);
        newS.push(obj1[pattern[i]]);
    }
    if (newPattern.join('') === pattern && newS.join(' ') === s) return true;
    return false;
};
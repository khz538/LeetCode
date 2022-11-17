/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const sArray = s.split(' ');
    // omit elements that do not have length
    const newArr = []
    sArray.forEach(string => {
        if (string.length) newArr.push(string);
    })
    return newArr.reverse().join(' ');
};
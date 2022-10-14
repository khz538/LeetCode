/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const lastParenthesis = [];
    for (const char of s) {
        const lastPar = lastParenthesis[lastParenthesis.length - 1];
        if (char === '(' || char === '[' || char==='{') lastParenthesis.push(char);
        else {
            if (char === ')' && lastPar !== '(') return false;
            else if (char === ']' && lastPar !== '[') return false;
            else if (char === '}' && lastPar !== '{') return false;
            else lastParenthesis.pop();
        }
    }
    if (lastParenthesis.length === 0) return true;
    else return false;
};
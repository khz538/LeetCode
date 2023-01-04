/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            const first = +stack.pop();
            const sec = +stack.pop();
            stack.push(first + sec);
        } else if (tokens[i] === '-') {
            const first = +stack.pop();
            const sec = +stack.pop();
            stack.push(sec - first);
        } else if (tokens[i] === '/') {
            const first = +stack.pop();
            const sec = +stack.pop();
            stack.push(Math.trunc(sec / first));
        } else if (tokens[i] === '*') {
            const first = +stack.pop();
            const sec = +stack.pop();
            stack.push(first * sec);
        } else stack.push(tokens[i]);
    }
    return stack[0]
};
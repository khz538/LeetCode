/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operators = new Set(['*', '/', '+', '-']);
    let i = 0;
    while (tokens.length > 1) {
        const operator = tokens[i]
        if (operators.has(operator)) {
            const operand1 = parseInt(tokens[i - 2]), operand2 = parseInt(tokens[i - 1]);
            let result = 0;
            switch (operator) {
                case "+": {
                    result = operand1 + operand2;
                    break;
                }
                case "-": {
                    result = operand1 - operand2;
                    break;
                }
                case "*": {
                    result = operand1 * operand2;
                    break;
                }
                case "/": {
                    const quotient = operand1 / operand2;
                    result = quotient < 0 ? Math.ceil(quotient) : Math.floor(quotient);
                    break;
                }
            }
            // splice the result into the array and remove the operands
            tokens.splice(i - 2, 3, result.toString());
            i = 0;
        }
        i++;
    }
    return tokens[0];
};
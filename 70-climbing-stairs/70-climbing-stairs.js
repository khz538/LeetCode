/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // fibonacci series
    let oneBefore = 1
    let i = 1
    let twoBefore = 0
    let fib = 0;
    while (i <= n) {
        fib = oneBefore + twoBefore
        let temp = twoBefore
        twoBefore = oneBefore
        oneBefore = fib
        i++
    }
    return fib
};
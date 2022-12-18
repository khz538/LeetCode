/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const res = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                res.push(j - i);
                break;
            } else if (j === temperatures.length - 1) res.push(0)
        }
        
    }
    res.push(0)
    return res;
};
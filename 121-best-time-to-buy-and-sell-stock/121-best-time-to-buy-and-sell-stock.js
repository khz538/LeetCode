/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxGain = 0;
    // two pointers
    let left = 0;
    let right = 1;
    while (right < prices.length) {
        if (prices[right] < prices[left]) left = right;
        const currGain = prices[right] - prices[left];
        maxGain = currGain > maxGain ? currGain : maxGain;
        right++
    }
    return maxGain;
};
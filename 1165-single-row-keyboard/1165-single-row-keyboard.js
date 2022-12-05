/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    // need to log the absolute value of the difference in indices for each letter typed
    let totalTime = 0, prevIdx = 0;
    for (let char of word) {
        totalTime += Math.abs(keyboard.indexOf(char) - prevIdx);
        prevIdx = keyboard.indexOf(char);
    }
    return totalTime;
};
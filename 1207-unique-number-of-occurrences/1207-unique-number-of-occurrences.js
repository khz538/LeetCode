/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counter = {};
    arr.forEach((num, i) => {
        if (counter[num]) counter[num]++;
        else counter[num] = 1;
    });
    const occurences = Object.values(counter);
    const set = new Set();
    occurences.forEach(num => {
        set.add(num);
    });
    if (occurences.length !== set.size) return false;
    return true;
};
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        let greatest = -Infinity;
        for (let j = i + 1; j < arr.length; j++) {
            greatest = arr[j] > greatest ? arr[j] : greatest;
        }
        res.push(greatest);
    }
    res.pop();
    res.push(-1);
    return res;
};
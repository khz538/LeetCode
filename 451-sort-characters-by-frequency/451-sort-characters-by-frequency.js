/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const sortedArray = s.split('').sort();
    let frequencyArray = [], res = [];
    let i = 0, j = 0, k = 1;
    while (i < sortedArray.length) {
        if (sortedArray[j] !== sortedArray[k]) {
            const chunk = sortedArray.slice(i, k);
            frequencyArray.push(chunk)
            i = k;
        }
        j++;
        k++;
    }
    frequencyArray.sort((a, b) => b.length - a.length);
    frequencyArray.forEach(arr => res = [...res, ...arr]);
    return res;
};
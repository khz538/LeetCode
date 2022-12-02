/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    return swappable(word1, word2) || isAnagram(word1, word2);
};

const isAnagram = (word1, word2) => {
    const [sort1, sort2] = [word1.split('').sort().join(''), word2.split('').sort().join('')];
    return sort1 === sort2;
}

const swappable = (word1, word2) => {
    const counter1 = {}, counter2 = {};
    for (let i = 0; i < word1.length; i++) {
        if (counter1[word1[i]]) counter1[word1[i]]++;
        else counter1[word1[i]] = 1;
        if (counter2[word2[i]]) counter2[word2[i]]++;
        else counter2[word2[i]] = 1;
    }
    // check equality of the two counter objects' sorted values
    let vals1 = Object.values(counter1).sort((a, b) => a - b);
    let vals2 = Object.values(counter2).sort((a, b) => a - b);
    let keys1 = Object.keys(counter1).sort();
    let keys2 = Object.keys(counter2).sort();
    if (vals1.length !== vals2.length || keys1.length !== keys2.length) return false;
    else {
        for (let j = 0; j < vals1.length; j++) {
            if (vals1[j] !== vals2[j]) return false;
        }
        for (let k = 0; k < keys1.length; k++) {
            if (keys1[k] !== keys2[k]) return false;
        }
    }
    return true;
}
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let counter = 0;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            const firstIdx = i;
            for (let j = i, k = 0; j, k < needle.length; j++, k++) {
                if (haystack[j] !== needle[k]) break;
                else counter++;
                if (counter === needle.length) return firstIdx;
            }
            counter = 0;
        } 
    }
    return -1;
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let [set, left, maxLength] = [new Set(), 0, 0];
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[i]);
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const s_counter = {};
    const t_counter = {};
    for (let char of s) {
        if (!s_counter[char]) s_counter[char] = 1;
        else s_counter[char]++;
    };
    
    for (let char of t) {
        if (!t_counter[char]) t_counter[char] = 1;
        else t_counter[char]++;
    };
    
    for (let key in s_counter) {
        if (t_counter[key] !== s_counter[key]) return false;
    }
    for (let key in t_counter) {
        if (t_counter[key] !== s_counter[key]) return false;
    }
    
    return true;
};
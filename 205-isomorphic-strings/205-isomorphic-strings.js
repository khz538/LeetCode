/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const obj_t_s = {};
    const obj_s_t = {};
    for (let i = 0; i < s.length; i++) {
        obj_t_s[t[i]] = s[i];
        obj_s_t[s[i]] = t[i];
    }
    let newT = [];
    let newS = [];
    for (let j = 0; j < s.length; j++) {
        newT.push(obj_s_t[s[j]]);
        newS.push(obj_t_s[t[j]]);
    }
    newT = newT.join(''); newS = newS.join('');
    if (newT === t && newS === s) {
        return true;
    } else {
        return false;
    }
};
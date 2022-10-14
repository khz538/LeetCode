/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const tracker = {};
    // for (let num of nums) {
    // // nums.forEach(num => {
    //     if (tracker[num]) return true;
    //     else tracker[num] = 1;
    // };
    // return false;
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) return true;
        else set.add(num);
    }
    return false;
};
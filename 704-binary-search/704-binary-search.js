/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // initialize vars to represent left and right index values
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        const m = Math.floor((r + l) / 2);
        if (nums[m] === target) return m;
        else if (nums[m] > target) r = m - 1;
        else l = m + 1;
    }
    return -1;
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // initialize vars to represent left and right index values
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        if (nums[l] === target) return l;
        if (nums[r] === target) return r;
        if (r === l && nums[r] !== target) return -1;
        const m = Math.floor((l + (r - 1)) / 2);
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            return m;
        }
    }
    return -1;
};
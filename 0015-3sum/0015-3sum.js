/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] && i > 0) {
            continue;
        }
        let [l, r] = [i + 1, nums.length - 1];
        while (l < r) {
            let total = nums[i] + nums[l] + nums[r];
            if (total < 0) l++;
            else if (total > 0) r--;
            else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                while (nums[l] == nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
};
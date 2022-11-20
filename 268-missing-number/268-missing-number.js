/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length - 1) {
        if (nums[i + 1] !== nums[i] + 1) {
            return nums[i] + 1;
        };
        i++;
    }
    if (nums[0] > 0) return 0;
    else return nums[i] + 1;
};
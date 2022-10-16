/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // two pointers?
    let [currSum, maxSum] = [0, nums[0]];
    for (let i = currSum; i < nums.length; i++) {
        currSum += nums[i];
        currSum > maxSum ? maxSum = currSum : maxSum = maxSum;
        currSum < 0 ? currSum = 0 : currSum = currSum;
    }
    return maxSum;
};
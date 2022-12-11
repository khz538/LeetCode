/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    nums = nums.sort((a, b) => a - b);
    let currCount = 1;
    let longest = 0;
    console.log(nums)
    for (let i = 0; i < nums.length; ++i) {
        let currentNum = nums[i], nextNum = nums[i + 1];
        if (currentNum === nextNum - 1) currCount++;
        else if (currentNum === nextNum) continue;
        else currCount = 1;
        if (currCount > longest) longest = currCount;
    };
    return longest;
};
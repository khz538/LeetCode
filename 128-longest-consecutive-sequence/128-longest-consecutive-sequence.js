/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);
    let longest = 1;
    const obj = {};
    nums.forEach((num, i) => {
        if (nums[i + 1] === num + 1) longest++;
        else if (nums[i + 1] === num) longest += 0;
        else {
            obj[longest] = longest;
            longest = 1;
        }
    });
    return Math.max(...Object.keys(obj));
};
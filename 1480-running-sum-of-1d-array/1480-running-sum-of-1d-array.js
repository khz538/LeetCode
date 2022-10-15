/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // memoize the last sum
    let lastSum = 0;
    const res = []
    // iterate over array
    nums.forEach(num => {
        res.push(num + lastSum);
        lastSum += num;
    })
    return res;
};
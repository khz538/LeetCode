/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    
    // Move all non-zero numbers to the front of the array
    let idx = 0; // pointer
    for (let j = 0; j < nums.length; ++j) {
        if (nums[j] !== 0) nums[idx++] = nums[j];
    }
    
    // Change all the remaining numbers to zero
    while(idx < nums.length) {
        nums[idx++] = 0;
    }
    
    return nums;
};
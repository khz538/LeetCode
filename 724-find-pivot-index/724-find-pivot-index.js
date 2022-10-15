/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // brute force
    let [trailingTotal, forwardTotal] = [0, 0]
    // console.log(trailingTotal, forwardTotal)
    for (let pivot = 0; pivot < nums.length; pivot++) {
        for (let j = pivot + 1; j < nums.length; j++) {
            forwardTotal += nums[j];
            
        }
        if (trailingTotal === forwardTotal) return pivot;
        trailingTotal += nums[pivot];
        forwardTotal = 0;
    }
    return -1;
};
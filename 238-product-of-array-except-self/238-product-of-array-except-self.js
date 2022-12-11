/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);
    let [leftProduct, rightProduct] = [1, 1];
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        answer[i] *= leftProduct;
        answer[j] *= rightProduct;
        leftProduct *= nums[i];
        rightProduct *= nums[j];
    }
    return answer;
};
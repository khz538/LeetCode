/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = [];
    const preProducts = [];
    const postProducts = [];
    // calculate preProducts array
    let runningProd = 1;
    nums.forEach(num => {
        runningProd *= num;
        preProducts.push(runningProd);
    });
    
    // calculate postProducts array
    runningProd = 1;
    const numsReversed = nums.reverse();
    numsReversed.forEach(num => {
        runningProd *= num;
        postProducts.unshift(runningProd)
    })
    
    nums.forEach((num, i) => {
        if (i === 0) res.push(postProducts[1]);
        else if (i === nums.length - 1) res.push(preProducts[i - 1]);
        res.push(preProducts[i - 1] * postProducts[i + 1]);
    })
    
    const ret = res.filter(num => !isNaN(num))
    return ret;
};
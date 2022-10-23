/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};
    const res = [];
    nums.forEach(num => {
        if (obj[num]) obj[num]++;
        else obj[num] = 1;
    })
    console.log(obj)
    while (res.length < k) {
        const highestFreq = Math.max(...Object.values(obj));
        for (let key in obj) {
            if (obj[key] === highestFreq) {
                res.push(key);
                delete obj[key]
            }
        }
    }
    return res;
};
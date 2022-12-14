/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // count frequency of each number
    const counter = new Map();
    const bucket = [];
    const res = [];
    nums.forEach(num => counter.set(num, (counter.get(num) || 0) + 1));
    for (let [num, frequency] of counter) {
        bucket[frequency] = (bucket[frequency] || new Set()).add(num);
    }
    for (let i = bucket.length - 1; i > 0; i--) {
        if (bucket[i]) res.push(...bucket[i]);
        if (res.length === k) break;
    }
    return res;
};
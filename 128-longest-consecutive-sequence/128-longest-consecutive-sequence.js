/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longestStreak = 0, set = new Set(nums);
    for (num of set) {
        let current_num = num
        if (!set.has(num - 1)) { // this is the condition for the start of a new streak
            let current = num;
            let streak = 1;
            while (set.has(current + 1)) {
                current++;
                streak++;
            }
            longestStreak = Math.max(longestStreak, streak);
        }
    }
    return longestStreak;
};
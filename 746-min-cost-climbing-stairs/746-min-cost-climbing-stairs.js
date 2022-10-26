/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // cost input is an array
    // cost[i] is the cost to advance from that idx either one or two steps
    let a = cost[0];
    let b = cost[1];
    let c;
    cost.push(0);
    for (let i = 2; i < cost.length; i++) {
        c = Math.min(a, b) + cost[i];
        a = b;
        b = c;
    }
    return c;
};
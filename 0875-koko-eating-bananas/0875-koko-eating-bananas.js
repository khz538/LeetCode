/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let min = 1, max = Math.max(...piles), best = max;
    const timeToEat = k => piles.reduce((total, pile) => total + Math.ceil(pile/k), 0);
    while (min <= max) {
        const k = Math.floor((min + max) / 2);
        if (timeToEat(k) <= h) {
            best = k;
            max = k - 1;
        } else {
            min = k + 1;
        }
    }
    return best;
};
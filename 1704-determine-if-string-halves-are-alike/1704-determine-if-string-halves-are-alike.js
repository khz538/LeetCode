/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    s = s.toUpperCase();
    const half_idx = (s.length / 2);
    const vowels = 'AEIOU';
    const firstHalf = s.slice(0, half_idx), secondHalf = s.slice(half_idx);
    let firstCount = 0, secondCount = 0;
    for (let i = 0; i < firstHalf.length; i++) {
        if (vowels.includes(firstHalf[i])) firstCount++;
        if (vowels.includes(secondHalf[i])) secondCount++
    }
    return firstCount === secondCount;
};
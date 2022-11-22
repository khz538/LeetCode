/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const inventory = {};
    for (let char of magazine) {
        if (inventory[char]) inventory[char]++;
        else inventory[char] = 1;
    }
    console.log(inventory)
    for (let char of ransomNote) {
        if (!inventory[char] || inventory[char] < 1) {
            return false;
        } else {
            inventory[char]--;
        }
    }
    return true;
};
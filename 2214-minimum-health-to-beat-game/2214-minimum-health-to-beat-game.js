/**
 * @param {number[]} damage
 * @param {number} armor
 * @return {number}
 */
var minimumHealth = function(damage, armor) {
    if (armor === 0) {
        return damage.reduce((acc, damage) => {
            return acc += damage;
        }, 0) + 1;
    };
    
    let highestDamage = 0;
    let minHealth = 0;
    damage.forEach(damage => {
        highestDamage = Math.max(highestDamage, damage);
        minHealth += damage            
    });
    
    if (armor > highestDamage) minHealth -= highestDamage;
    else minHealth -= armor;
    return minHealth + 1;
};
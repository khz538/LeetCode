/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let [left, right] = [1, n];
        while (left <= right) {
            const middle = Math.floor((left + right) / 2)
            if (isBadVersion(middle) && !isBadVersion(middle - 1)) return middle;
            else if (isBadVersion(middle) && isBadVersion(middle - 1)) right = middle - 1;
            else if (!isBadVersion(middle) && !isBadVersion(middle - 1)) left = middle + 1;
        }
    };
};
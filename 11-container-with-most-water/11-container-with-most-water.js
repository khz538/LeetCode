/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // keep track of width
    let [r, l] = [height.length - 1, 0];
    let maxArea = 0;
    while (l < r) {
        const [leftHeight, rightHeight] = [height[l], height[r]];
        const area = Math.min(leftHeight, rightHeight) * (r - l);
        maxArea = Math.max(maxArea, area);
        if (leftHeight <= rightHeight) l++;
        else r--;
    }
    return maxArea;
};
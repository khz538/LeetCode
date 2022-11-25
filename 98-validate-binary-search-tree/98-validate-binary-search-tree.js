/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = [[root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]];
    while (stack.length) {
        let [curr, max, min] = stack.pop();
        if (!curr) continue;
        if (curr.val >= max || curr.val <= min) return false;
        curr.left && stack.push([curr.left, curr.val, min]);
        curr.right && stack.push([curr.right, max, curr.val]);
    }
    return true;
};
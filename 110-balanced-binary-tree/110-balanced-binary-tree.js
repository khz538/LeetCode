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
var isBalanced = function(root) {
    if (!root) return true;
    if (!isBalanced(root.left) || !isBalanced(root.right)) return false;
    return Math.abs(height(root.left) - height(root.right)) <= 1;
};

const height = function(root) {
    if (!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}
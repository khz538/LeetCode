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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    const ldiameter = diameterOfBinaryTree(root.left);
    const rdiameter = diameterOfBinaryTree(root.right);
    return Math.max(height(root.left) + height(root.right), Math.max(ldiameter, rdiameter));
};

var height = function(root) {
    if (!root) return 0;
    return 1 + Math.max(height(root.left), height(root.right));
}
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    //traverse the tree and push values into the array
    const arr = [];
    const stack = [root];
    while (stack.length) {
        const curr = stack.pop();
        arr.push(curr.val);
        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);
    }
    return arr.sort((a,b) => a - b)[k - 1]
};
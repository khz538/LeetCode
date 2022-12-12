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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let q = [root];
    while (q.length) {
        const curr = q.shift();
        if (sameTree(curr, subRoot)) return true;
        curr.left && q.push(curr.left);
        curr.right && q.push(curr.right);
    }
    return false;
};

const sameTree = (p, q) => {
    if (!p && !q) return true;
    else if (!p || !q) return false;
    else if (p.val !== q.val) return false;
    else return sameTree(p.left, q.left) && sameTree(p.right, q.right);
}
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
    // bfs of root tree
    let q = [root];
    while (q.length) {
        let curr = q.shift();
        if (curr.val === subRoot.val && sameTree(curr, subRoot)) return true;
        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);    
    }
    return false;
};

const sameTree = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    if (!sameTree(p.left, q.left)) return false;
    if (!sameTree(p.right, q.right)) return false;
    return true;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const [res1, res2] = [[], []];
    return isEqual(dfs(root1, res1), dfs(root2, res2))
};

const dfs = (root, res) => {
    // dfs in order traversal
    if (!root) return;
    if (!(root.left || root.right)) res.push(root.val)
    dfs(root.left, res)
    dfs(root.right, res)
    return res;
}

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
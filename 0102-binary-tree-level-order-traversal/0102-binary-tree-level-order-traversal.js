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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // bfs => use a queue to traverse the binary tree
    if (!root) return [];
    root.level = 0
    const [q, levels] = [[root], {}];
    while (q.length) {
        let curr = q.shift();
        if (Array.isArray(levels[curr.level])) levels[curr.level].push(curr.val)
        else levels[curr.level] = [curr.val];
        if (curr.left) {
            curr.left.level = curr.level + 1;
            q.push(curr.left)
        }
        if (curr.right) {
            curr.right.level = curr.level + 1;
            q.push(curr.right)
        }
    }
    console.log(levels)
    return Object.values(levels);
};
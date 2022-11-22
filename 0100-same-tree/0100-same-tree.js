/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // traverse two trees at the same time and check values
    let [pTrav, qTrav] = [p, q];
    let pQueue = [p], qQueue = [q]
    while (pQueue.length && qQueue.length) {
        let [pCurr, qCurr] = [pQueue.pop(), qQueue.pop()];
        if (pCurr !== null && qCurr !== null) {
            if (pCurr.val !== qCurr.val) return false;
            else if ((pCurr.left && !qCurr.left) || (!pCurr.left && qCurr.left)) {
                return false;
            } else if ((pCurr.right && !qCurr.right) || (!pCurr.right && qCurr.right)) {
                return false;
            }
            else {
                pQueue.push(pCurr.left);
                pQueue.push(pCurr.right);
                qQueue.push(qCurr.left);
                qQueue.push(qCurr.right);
            }
        } else if ((pCurr === null && qCurr !== null) || (pCurr !== null && qCurr === null)) {
            return false;
        }
    }
    return true;
};

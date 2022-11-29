/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // count the nodes
    let leading = head, trailing = head, nodeCount = 1;
    while (leading) {
        ++nodeCount;
        leading = leading.next;
    }
    let middleNode = Math.ceil(nodeCount / 2);
    while (middleNode > 1) {
        --middleNode;
        trailing = trailing.next;
    }
    return trailing;
};
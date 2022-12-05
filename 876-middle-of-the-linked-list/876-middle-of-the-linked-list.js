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
    let [l, r] = [head, head];
    let nodeCount = 0;    
    while (r.next) {
        r = r.next;
        nodeCount++;
    }
    let midPosition = 0;
    if (nodeCount % 2 === 0) {
        midPosition = (nodeCount / 2)
    } else {
        midPosition = Math.ceil(nodeCount / 2)
    }
    while (midPosition > 0) {
        midPosition--;
        l = l.next;
    }
    return l;
};
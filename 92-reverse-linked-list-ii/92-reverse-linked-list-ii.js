/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head;
    let trav = head;
    let count = 1;
    while (count < left) {
        trav = curr;
        curr = curr.next;
        count++;
    }
    let tail = curr, prev = null;
    while (count <= right && count >= left) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        count++;
    }
    trav.next = prev;
    tail.next = curr;
    return left > 1 ? head : prev;
};
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
var reverseList = function(head) {
    // init trav and prev pointers
    let trav = head
    let prev = null
    
    while (trav) {
        let next = trav.next
        trav.next = prev
        prev = trav
        trav = next
    }
    return prev
};
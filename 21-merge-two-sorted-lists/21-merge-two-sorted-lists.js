/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
    let dummy = new ListNode();
    let curr = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            curr = curr.next;
            list1 = list1.next;
        } else {
            curr.next = list2;
            curr = curr.next
            list2 = list2.next;
        }
    }
    curr.next = list1 || list2;
    return dummy.next;
}
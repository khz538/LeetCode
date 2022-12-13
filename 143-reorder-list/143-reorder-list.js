/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

const reorderList = head => {
    let [secondHalf, firstHalf] = findMiddle(head) // return middle node
    return mergeList(firstHalf, reverseList(secondHalf));
}

const findMiddle = head => {
    let slow = head, fast = head;
    let dummy = new ListNode();
    let firstHalf = dummy;
    // move the fast pointer first
    while (fast && fast.next) {
        fast = fast.next.next;
        dummy.next = slow;
        slow = slow.next;
        dummy = dummy.next;
    }
    dummy.next = null;
    return [slow, firstHalf.next];
}

const reverseList = head => {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        // [head.next, prev, head] = [prev, head, head.next];
    }
    return prev;
}

const mergeList = (list1, list2) => {
    let dummy = new ListNode();
    let curr = dummy;
    while (list1 && list2) {
        curr.next = list1;
        list1 = list1.next;
        curr.next.next = list2;
        list2 = list2.next;
        curr = curr.next.next;
    }
    curr.next = list1 || list2;
    return dummy.next;
}
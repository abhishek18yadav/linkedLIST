/**
//  * https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let fast = head, slow= head;
    k--;
    while(k--){
        fast= fast.next;
    }
    let firstnode = fast;
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    let temp = firstnode.val;
    firstnode.val=slow.val;
    slow.val=temp;
    return head;
};
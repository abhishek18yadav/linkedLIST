var removeNthFromEnd = function(head, n) {
    
    let fast= head;
    while(n>0){
        fast= fast.next;
        n=n-1;
    }
    if(fast == null){
        let newhead = head.next;
        head.next = null;
        return newhead;
    }
     let slow = head;
    while( fast.next != null){
        fast=fast.next;
        slow=slow.next;
    }
     let toBeDel = slow.next;
    slow.next = toBeDel.next;
    toBeDel.next = null;
    return head;
};
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
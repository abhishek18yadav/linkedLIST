var hasCycle = function(head) {
    let fast = head;
    let slow= head;
    let size=0;
    while(fast!= null && fast.next != null){
        fast= fast.next.next;
        slow = slow.next;
        if(fast== slow)return true;
    }
    return false;
};
 // cpp code
 /**
  * bool hasCycle(ListNode *head) {
        ListNode* slow=head;
        ListNode* fast = head;
        int size=0;
        while(fast and fast->next){
            fast=fast->next->next;
            slow= slow->next;
            if(fast == slow and size>0)return true;
            size++;
        }
     
  */
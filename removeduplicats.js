// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/ 

var deleteDuplicates = function(head) {
    let temp = head;
    while(temp != null && temp.next != null ){
        if(temp.val == temp.next.val){
            let del = temp.next;
            temp.next = del.next;
            del.next = null;
        }
        else{
            temp= temp.next;
        }
    }
    return head;
};
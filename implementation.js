var node = function(data){
    this.data= data;
    this.next=null;
};
var linkedlist = function(){
    this.head;
};
linkedlist.prototype.get=function(index){
    let temp = this.head;
    while(temp.next && index--){
        temp= temp.next;
    }
    return temp.data;
};
linkedlist.prototype.addatHead= function(value){
    let curr= this.head;
    let n = new node(value);
    if(!curr){
        return this.head=n;
    }
    else{
        n.next=head;
        head=n;
    }
    return head;
};
linkedlist.prototype.addatTail=function(value){
    let curr = this.head;
    let n = new node(value);
    if(!curr){
        return this.head=n;
    }else{
        while(curr.next){
            curr= curr.next;
        }
        curr.next=n;
    }
    return this.head;
};
linkedlist.prototype.deleteathead = function(){
    if(!this.head)return;
    else{
        let temp = this.head;
        head = head.next;
        temp.next=null;
    }
};
var obj = new linkedlist();
obj.addatHead(3);
obj.addatTail(4);
obj.addatTail(5);
obj.addatTail(6);
obj.addatTail(7);
console.log(obj.get(2));
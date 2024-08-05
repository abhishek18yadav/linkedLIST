class node{
    constructor(key , val){
        this.key=key;
        this.val = val;
        this.next =null;
        this.prev = null;
    }
}
class doublylinkedlist{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addAtHead(key,val){

        let temp = new node(key ,val);
        if(this.head==null){
            this.head = temp;
            this.tail=temp;
            return temp;
        }else{
            temp.next= this.head;
            this.head .prev = temp;
            this.head = temp;
            return this.head;
        }
    }
    // isEmpty() {
    //     return this.head == null;
    // }
    // removeAtHead() {
    //     if(this.isEmpty()) {
    //         // 1. If the ll is empty , we can't do anything
    //         return;
    //     } else if (this.head.next == null) {
    //         // 2. You have a single node, just destroy the node
    //         this.head = null;
    //         this.tail = null;
    //     } else {
    //         // 3. LL has size more than 1
            
    //         // a. Remember the new incmoing head
    //         const newHead = this.head.next;
    //         // b. break the conn
    //         this.head.next = null;
    //         newHead.prev = null;
    //         // c. assign the new head as the head
    //         this.head = newHead;

    //     }
    // }

    // removeAtTail() {
    //     if(this.isEmpty()) {
    //         // 1. If the ll is empty, we can't do anything
    //         return;
    //     } else if(this.head.next == null) {
    //         // 2. If LL is of size 1, then remove the single node
    //         this.head = null;
    //         this.tail = null;
    //     } else {
    //         // 3. LL with more than 1 size

    //         // a. remember the newTail
    //         const newTail = this.tail.prev;
    //         // b. break the conn
    //         newTail.next = null;
    //         this.tail.prev = null;
    //         // c. reassign the tail
    //         this.tail = newTail;
    //     }
    // }

    // removeNode(node) {
    //     if(node.prev == null) {
    //         // 1. If the node is a head node call removeAtHead
    //         this.removeAtHead();
    //     } else if(node.next == null) {
    //         // 2. If the node is a tail node call removeAtTail
    //         this.removeAtTail();
    //     } else {
    //         // 3. Some node in between
    //         const prevNode = node.prev;
    //         const nextNode = node.next;
    //         // prevnode - node - nextNode
    //         // a. Break conn between prevNode and currNode
    //         prevNode.next = null;
    //         node.prev = null;

    //         // b. break the conn between nextnode and currnode
    //         nextNode.prev = null;
    //         node.next = null;

    //         // c. Connect the prev node with nextNode
    //         prevNode.next = nextNode;
    //         nextNode.prev = prevNode;
    //     }
    // }
    removeAtTail(){
        if(this.head==null){
            return;
        }if(this.head.next == null){
            this.head = null;
            this.tail= null;
            return;
        }
        let curr = this.tail;
        this.tail= this.tail.prev;
        this.tail.next = null;
        curr.prev = null;
        return;
    }
    removeAtHead(){
        if(this.head==null)return;

        if(this.head.next== null){
            this.head=null;
            this.tail=null;
            return;
        }else{
            let temp = this.head;

            this.head = this.head.next;
            this.head.prev = null;

            temp.next = null;
            return;
        }
    }
    removeNode(node){
        if(node.prev == null){
            return this.removeAtHead();
        }
        if(node.next == null){
            return this.removeAtTail();
        }
        else{
            let prevnode = node.prev;
            let nextNode= node.next;
            prevnode.next = null;
            nextNode.prev = null;
            node.next=null;
            node.prev= null;
            prevnode.next = nextNode;
            nextNode.prev = prevnode;
            return;
        }
    }

    display(){
        let temp = this.head;
        if(temp==null){
            console.log("not yet");
            return;
        }
        while(temp != null){
            console.log(temp.key);
            temp = temp.next;
        }
    }
}
   



/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dll = new doublylinkedlist();
    this.capacity= capacity;
    this.size=0;
    this.mp={};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.mp[key]==undefined)return -1;
    let res = this.mp[key].val;
    this.dll.removeNode(this.mp[key]);
    this.mp[key]= this.dll.addAtHead(key,res);
    return res;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, val) {
    if(this.mp[key]!= undefined){
        const nodeTobeRemoved = this.mp[key];
        this.dll.removeNode(nodeTobeRemoved);
        this.mp[key] = this.dll.addAtHead(key,val);
    }
    else{
        if(this.size== this.capacity){
        
            delete this.mp[this.dll.tail.key];
            this.dll.removeAtTail();
            this.size= this.size -1;
        }
            this.mp[key] = this.dll.addAtHead(key,val);
            this.size = this.size+1;
    }
    


    // if(this.mp[key] != undefined) {
    //     // the key we wanted to add already exist
    //     const nodeTobeRemoved = this.mp[key];
    //     this.dll.removeNode(nodeTobeRemoved);
    //     this.mp[key] = this.dll.addAtHead(key, val);
    // } else {
    //     // a new key value pair is being added
    //     if(this.size == this.cacheCapacity) {
    //         // the cache is full
    //         // remove the lru element
    //         delete this.mp[this.dll.tail.data];
    //         this.dll.removeAtTail();
    //         this.size--;
    //     }
    //     this.mp[key] = this.dll.addAtHead(key, val);
    //     this.size++;
    // }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
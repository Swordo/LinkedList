function LinkedList() {
    this.head = null;               //[][][]
    this.tail = null;

}
function Node(prev, value, next) {
    this.prev = prev;
    this.value = value;
    this.next = next;
}
LinkedList.prototype.addToHead = function (value) {
    let newNode = new Node(null, value, this.head);

    if (this.head) {
        this.head.prev = newNode;
    }
    else {
        this.tail = newNode;
    }
    this.head = newNode;
}
LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(this.tail, value, null);
    if (this.tail) {
        this.tail.next = newNode;
    }
    else {
        this.head = newNode;
    }
    this.tail = newNode;
}

let newLinkedList = new LinkedList();

newLinkedList.addToHead(6);
newLinkedList.addToHead(3);
newLinkedList.addToTail(10);
console.log(newLinkedList);





function LinkedList() {
    this.head = null; //[][][]
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
    } else {
        this.tail = newNode;
    }
    this.head = newNode;
}
LinkedList.prototype.addToTail = function (value) {
    let newNode = new Node(this.tail, value, null);
    if (this.tail) {
        this.tail.next = newNode;
    } else {
        this.head = newNode;
    }
    this.tail = newNode;
}

LinkedList.prototype.traverse = function () {

    let currentNode = this.head;
    if (currentNode === null) {
        console.log('this is an empty linked list');
        return;
    }
    console.log('head node value is ' + currentNode.value);
    while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode === this.tail)
            console.log('tail node value is ' + currentNode.value);
        else
            console.log('next node value is ' + currentNode.value);
    }

};
LinkedList.prototype.removeHead = function () {

    if (!this.head) {
        return null;
    }
    let val = this.head.value;

    this.head = this.head.next;

    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }

    return val;

};

LinkedList.prototype.removeTail = function () {

    if (!this.tail) {
        return null;
    }

    let val = this.tail.value;

    this.tail = this.tail.prev;

    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }

    return val;

};

let newLinkedList = new LinkedList();
newLinkedList.addToHead(1)
newLinkedList.addToHead(2);
newLinkedList.addToHead(3)
newLinkedList.addToHead(4);
newLinkedList.addToTail(5);
newLinkedList.addToTail(6);
newLinkedList.addToTail(7);
newLinkedList.addToTail(8);

// newLinkedList.traverse();
console.log(newLinkedList)
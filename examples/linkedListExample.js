class Node {
    constructor(data) { this.data = data; this.next = null; }
}

class LinkedList {
    constructor() { this.head = null; }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) { this.head = newNode; return; }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = newNode;
    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList();

class Queue {
    constructor() { this.items = []; }
    enqueue(element) { this.items.push(element); }
    dequeue() { return this.items.shift(); }
    printQueue() { console.log(this.items.join(" -> ")); }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.printQueue();
queue.dequeue();
queue.printQueue();

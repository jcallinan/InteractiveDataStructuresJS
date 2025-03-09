class Stack {
    constructor() { this.items = []; }
    push(element) { this.items.push(element); }
    pop() { return this.items.pop(); }
    peek() { return this.items[this.items.length - 1]; }
    isEmpty() { return this.items.length === 0; }
    printStack() { console.log(this.items.join(" -> ")); }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
console.log("Popped:", stack.pop());
stack.printStack();
console.log("Peek:", stack.peek());

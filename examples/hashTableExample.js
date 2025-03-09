class HashTable {
    constructor() { this.table = new Array(137); }
    hash(key) { return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.table.length; }
    set(key, value) { this.table[this.hash(key)] = value; }
    get(key) { return this.table[this.hash(key)]; }
}

const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 25);
console.log("Name:", ht.get("name"));
console.log("Age:", ht.get("age"));

class TreeNode {
    constructor(value) { this.value = value; this.left = null; this.right = null; }
}

class BinarySearchTree {
    constructor() { this.root = null; }
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.value < node.value) node.left ? this.insertNode(node.left, newNode) : node.left = newNode;
        else node.right ? this.insertNode(node.right, newNode) : node.right = newNode;
    }
    inorderTraversal(node = this.root) {
        if (!node) return;
        this.inorderTraversal(node.left);
        console.log(node.value);
        this.inorderTraversal(node.right);
    }
}

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.inorderTraversal();

import React, { useState } from "react";

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default function TreeComponent() {
    const [root, setRoot] = useState(null);
    const [input, setInput] = useState("");
    const [traversal, setTraversal] = useState([]);

    const insert = (node, value) => {
        if (!node) return new TreeNode(value);
        if (value < node.value) node.left = insert(node.left, value);
        else node.right = insert(node.right, value);
        return node;
    };

    const inorderTraversal = (node, result = []) => {
        if (!node) return result;
        inorderTraversal(node.left, result);
        result.push(node.value);
        inorderTraversal(node.right, result);
        return result;
    };

    const handleInsert = () => {
        setRoot(insert(root, parseInt(input)));
        setInput("");
    };

    const handleTraversal = () => {
        setTraversal(inorderTraversal(root));
    };

    return (
        <div className="card shadow-sm p-4">
            <h2>Binary Search Tree Operations</h2>

            <input className="form-control mb-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter value" />
            <button className="btn btn-primary me-2" onClick={handleInsert}>Insert</button>
            <button className="btn btn-info" onClick={handleTraversal}>Inorder Traversal</button>

            <div className="alert alert-info mt-3">
                Traversal: {traversal.join(" -> ")}
            </div>
        </div>
    );
}

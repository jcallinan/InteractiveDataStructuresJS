import React, { useState } from "react";

export default function DequeComponent() {
    const [deque, setDeque] = useState(["Middle"]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("Add items to either end of the deque.");

    const addFront = () => {
        if (!input.trim()) {
            setOutput("Please enter a value to add to the front.");
            return;
        }

        const nextValue = input.trim();
        setDeque([nextValue, ...deque]);
        setInput("");
        setOutput(`Added to front: ${nextValue}`);
    };

    const addBack = () => {
        if (!input.trim()) {
            setOutput("Please enter a value to add to the back.");
            return;
        }

        const nextValue = input.trim();
        setDeque([...deque, nextValue]);
        setInput("");
        setOutput(`Added to back: ${nextValue}`);
    };

    const removeFront = () => {
        if (deque.length === 0) {
            setOutput("Deque is empty!");
            return;
        }

        const removed = deque[0];
        setDeque(deque.slice(1));
        setOutput(`Removed from front: ${removed}`);
    };

    const removeBack = () => {
        if (deque.length === 0) {
            setOutput("Deque is empty!");
            return;
        }

        const removed = deque[deque.length - 1];
        setDeque(deque.slice(0, -1));
        setOutput(`Removed from back: ${removed}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Deque Operations</h2>
            <p className="text-muted mb-4">A deque (double-ended queue) lets you add and remove items from both the front and back.</p>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter value"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addFront}>Add Front</button>
                <button className="btn btn-primary" onClick={addBack}>Add Back</button>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
                <button className="btn btn-danger" onClick={removeFront}>Remove Front</button>
                <button className="btn btn-danger" onClick={removeBack}>Remove Back</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Current Deque (front → back):</h5>
                <p className="mb-0">{deque.length ? deque.join(" → ") : "Deque is empty."}</p>
            </div>
        </div>
    );
}

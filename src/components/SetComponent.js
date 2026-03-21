import React, { useState } from "react";

export default function SetComponent() {
    const [items, setItems] = useState(new Set(["apple", "banana"]));
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("Sets keep only unique values.");

    const addItem = () => {
        const trimmed = input.trim();
        if (!trimmed) {
            setOutput("Please enter a value to add.");
            return;
        }

        const nextItems = new Set(items);
        const alreadyExists = nextItems.has(trimmed);
        nextItems.add(trimmed);
        setItems(nextItems);
        setOutput(alreadyExists ? `${trimmed} was already present, so the set stayed unique.` : `Added unique value: ${trimmed}`);
        setInput("");
    };

    const removeItem = () => {
        const trimmed = input.trim();
        if (!trimmed) {
            setOutput("Please enter a value to remove.");
            return;
        }

        const nextItems = new Set(items);
        const existed = nextItems.delete(trimmed);
        setItems(nextItems);
        setOutput(existed ? `Removed: ${trimmed}` : `${trimmed} was not in the set.`);
        setInput("");
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Set Operations</h2>

            <div className="input-group mb-3">
                <input
                    className="form-control"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter unique value"
                />
                <button className="btn btn-primary" onClick={addItem}>Add</button>
                <button className="btn btn-danger" onClick={removeItem}>Remove</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Current Set:</h5>
                <p className="mb-0">{items.size ? Array.from(items).join(", ") : "Set is empty."}</p>
            </div>
        </div>
    );
}

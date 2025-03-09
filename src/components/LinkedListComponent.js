import React, { useState } from "react";

export default function LinkedListComponent() {
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const append = () => {
        if (!input) return;
        setList([...list, input]);
        setInput("");
        setOutput(`Appended: ${input}`);
    };

    const remove = () => {
        if (!input) return;
        setList(list.filter(item => item !== input));
        setOutput(`Removed: ${input}`);
        setInput("");
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Linked List Operations</h2>

            <div className="input-group mb-3">
                <input className="form-control" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter value" />
                <button className="btn btn-primary" onClick={append}>Append</button>
                <button className="btn btn-danger" onClick={remove}>Remove</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output || "No operations yet."}
            </div>

            <div className="border rounded p-3">
                <h5>Current List:</h5>
                <p>{list.length ? list.join(" -> ") : "List is empty."}</p>
            </div>
        </div>
    );
}

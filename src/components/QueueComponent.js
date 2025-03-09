import React, { useState } from "react";

export default function QueueComponent() {
    const [queue, setQueue] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const enqueue = () => {
        if (!input) return;
        setQueue([...queue, input]);
        setInput("");
        setOutput(`Enqueued: ${input}`);
    };

    const dequeue = () => {
        if (queue.length === 0) {
            setOutput("Queue is empty!");
            return;
        }
        const dequeued = queue[0];
        setQueue(queue.slice(1));
        setOutput(`Dequeued: ${dequeued}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Queue Operations</h2>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter value to enqueue"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary" onClick={enqueue}>Enqueue</button>
            </div>

            <button className="btn btn-danger mb-3" onClick={dequeue}>Dequeue</button>

            <div className="alert alert-info">
                <strong>Output:</strong> {output || "No operations yet."}
            </div>

            <div className="border rounded p-3">
                <h5>Current Queue:</h5>
                <p>{queue.length ? queue.join(" -> ") : "Queue is empty."}</p>
            </div>
        </div>
    );
}

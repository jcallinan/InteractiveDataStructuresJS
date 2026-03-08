import React, { useState } from "react";

export default function QueueComponent() {
    const [queue, setQueue] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("Start by enqueuing an item.");

    const enqueue = () => {
        if (!input.trim()) {
            setOutput("Please enter a value to enqueue.");
            return;
        }

        const nextValue = input.trim();
        setQueue([...queue, nextValue]);
        setInput("");
        setOutput(`Enqueued: ${nextValue}`);
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
            <h2 className="mb-2">Queue Operations</h2>
            <p className="text-muted mb-4">Queues follow FIFO (First In, First Out): the earliest item added is removed first.</p>

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
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Current Queue (front → back):</h5>
                <p className="mb-0">{queue.length ? queue.join(" → ") : "Queue is empty."}</p>
            </div>
        </div>
    );
}

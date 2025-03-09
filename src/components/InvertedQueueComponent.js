import React, { useState } from "react";

export default function InvertedQueueComponent() {
    const satorSquare = [
        ['S', 'A', 'T', 'O', 'R'],
        ['A', 'R', 'E', 'P', 'O'],
        ['T', 'E', 'N', 'E', 'T'],
        ['O', 'P', 'E', 'R', 'A'],
        ['R', 'O', 'T', 'A', 'S'],
    ];

    const [queue, setQueue] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [reverseMode, setReverseMode] = useState(false);

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
        const item = reverseMode ? queue[queue.length - 1] : queue[0];
        const updatedQueue = reverseMode ? queue.slice(0, -1) : queue.slice(1);
        setQueue(updatedQueue);
        setOutput(`Dequeued: ${item}`);
    };

    const toggleMode = () => {
        setReverseMode(!reverseMode);
        setOutput(`Mode switched to: ${!reverseMode ? "Inverted (Tenet)" : "Normal"}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Inverted Queue (Inspired by Tenet's Sator Square)</h2>

            <input
                className="form-control mb-3"
                placeholder="Enter value to enqueue"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <div className="d-flex gap-2">
                <button className="btn btn-primary" onClick={enqueue}>Enqueue</button>
                <button className="btn btn-danger" onClick={dequeue}>Dequeue</button>
                <button className="btn btn-warning" onClick={toggleMode}>
                    Toggle Mode ({reverseMode ? "Inverted (Tenet)" : "Normal"})
                </button>
            </div>

            <div className="alert alert-info mt-3">
                <strong>Output:</strong> {output || "No operations yet."}
            </div>

            <div className="border rounded p-3 mt-3">
                <h5>Current Queue ({reverseMode ? "Inverted" : "Normal"}):</h5>
                <p>{queue.length ? (reverseMode ? [...queue].reverse().join(" -> ") : queue.join(" -> ")) : "Queue is empty."}</p>
            </div>

            <div className="mt-4">
                <h4>Sator Square:</h4>
                <div className="border rounded p-3 d-inline-block">
                    {satorSquare.map((row, idx) => (
                        <div key={idx}>
                            {row.map((char, cIdx) => (
                                <span key={cIdx} style={{ padding: '5px', fontWeight: 'bold' }}>{char}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

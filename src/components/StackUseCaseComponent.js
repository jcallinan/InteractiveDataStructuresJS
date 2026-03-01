import React, { useState } from "react";

export default function StackUseCaseComponent() {
    const [history, setHistory] = useState(["Initial text"]);
    const [text, setText] = useState("Initial text");
    const [output, setOutput] = useState("Type and save snapshots, then undo.");

    const saveSnapshot = () => {
        if (!text.trim()) {
            setOutput("Please type some text before saving.");
            return;
        }
        if (history[history.length - 1] === text) {
            setOutput("No change to save. Edit text before creating a new snapshot.");
            return;
        }

        setHistory([...history, text]);
        setOutput(`Saved snapshot: \"${text}\"`);
    };

    const undo = () => {
        if (history.length <= 1) {
            setOutput("Nothing left to undo.");
            return;
        }

        const previousHistory = history.slice(0, -1);
        const previousValue = previousHistory[previousHistory.length - 1];
        setHistory(previousHistory);
        setText(previousValue);
        setOutput(`Undo complete. Current text: \"${previousValue}\"`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Case: Stacks for Undo History</h2>
            <p className="text-muted mb-4">
                Undo in text editors is commonly implemented with a stack (LIFO): the latest change is the first undone.
            </p>

            <textarea
                className="form-control mb-3"
                rows="4"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="d-flex gap-2 mb-3">
                <button className="btn btn-primary" onClick={saveSnapshot}>Save Snapshot</button>
                <button className="btn btn-secondary" onClick={undo}>Undo</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>History Stack (bottom → top)</h5>
                <p className="mb-0">{history.join(" → ")}</p>
            </div>
        </div>
    );
}

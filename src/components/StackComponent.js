import React, { useState } from "react";

export default function StackComponent() {
    const [stack, setStack] = useState([]);
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const push = () => {
        if (!input) return;
        setStack([...stack, input]);
        setInput("");
        setOutput(`Pushed: ${input}`);
    };

    const pop = () => {
        if (stack.length === 0) {
            setOutput("Stack is empty!");
            return;
        }
        const popped = stack[stack.length - 1];
        setStack(stack.slice(0, -1));
        setOutput(`Popped: ${popped}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Stack Operations</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter value to push"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="btn btn-primary" onClick={push}>Push</button>
            </div>

            <button className="btn btn-danger mb-3" onClick={pop}>Pop</button>

            <div className="alert alert-info">
                <strong>Output:</strong> {output || "No operations yet."}
            </div>

            <div className="border rounded p-3">
                <h5>Current Stack:</h5>
                <p>{stack.length ? stack.join(" -> ") : "Stack is empty."}</p>
            </div>
        </div>
    );
}

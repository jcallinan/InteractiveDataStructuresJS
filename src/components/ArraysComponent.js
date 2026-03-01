import React, { useState } from "react";

export default function ArraysComponent() {
    const [arrayValues, setArrayValues] = useState(["A", "B", "C"]);
    const [input, setInput] = useState("");
    const [index, setIndex] = useState("");
    const [output, setOutput] = useState("Start by adding, updating, or removing an item.");

    const addItem = () => {
        if (!input.trim()) return;
        setArrayValues([...arrayValues, input.trim()]);
        setOutput(`Added \"${input.trim()}\" to the end of the array.`);
        setInput("");
        setIndex("");
    };

    const updateItem = () => {
        if (index === "") {
            setOutput("Please enter an index to update.");
            return;
        }

        const numericIndex = Number(index);
        if (!Number.isInteger(numericIndex) || numericIndex < 0 || numericIndex >= arrayValues.length) {
            setOutput("Please enter a valid index to update.");
            return;
        }
        if (!input.trim()) {
            setOutput("Please enter a value to place at the selected index.");
            return;
        }

        const next = [...arrayValues];
        next[numericIndex] = input.trim();
        setArrayValues(next);
        setOutput(`Updated index ${numericIndex} to \"${input.trim()}\".`);
        setInput("");
        setIndex("");
    };

    const removeItem = () => {
        if (index === "") {
            setOutput("Please enter an index to remove.");
            return;
        }

        const numericIndex = Number(index);
        if (!Number.isInteger(numericIndex) || numericIndex < 0 || numericIndex >= arrayValues.length) {
            setOutput("Please enter a valid index to remove.");
            return;
        }

        const removedValue = arrayValues[numericIndex];
        setArrayValues(arrayValues.filter((_, i) => i !== numericIndex));
        setOutput(`Removed \"${removedValue}\" from index ${numericIndex}.`);
        setIndex("");
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Arrays: Core Operations</h2>
            <p className="text-muted mb-4">Arrays are ordered collections where every value has an index.</p>

            <div className="row g-2 mb-3">
                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter value"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Index"
                        value={index}
                        onChange={(e) => setIndex(e.target.value)}
                        min="0"
                    />
                </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-4">
                <button className="btn btn-primary" onClick={addItem}>Add to End</button>
                <button className="btn btn-warning" onClick={updateItem}>Update at Index</button>
                <button className="btn btn-danger" onClick={removeItem}>Remove at Index</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Current Array</h5>
                <p className="mb-0">[{arrayValues.map((value) => `\"${value}\"`).join(", ")}]</p>
            </div>
        </div>
    );
}

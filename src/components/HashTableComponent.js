import React, { useState } from "react";

export default function HashTableComponent() {
    const [hashTable, setHashTable] = useState({});
    const [key, setKey] = useState("");
    const [value, setValue] = useState("");
    const [output, setOutput] = useState("");

    const setEntry = () => {
        if (!key || !value) return;
        setHashTable({ ...hashTable, [key]: value });
        setOutput(`Set: { ${key}: ${value} }`);
        setKey("");
        setValue("");
    };

    const getEntry = () => {
        const result = hashTable[key];
        setOutput(result ? `Value: ${result}` : "Key not found");
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Hash Table Operations</h2>

            <div className="input-group mb-3">
                <input className="form-control" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Key" />
                <input className="form-control" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Value" />
                <button className="btn btn-primary" onClick={setEntry}>Set</button>
            </div>

            <button className="btn btn-info mb-3" onClick={getEntry}>Get Value</button>

            <div className="alert alert-info">
                <strong>Output:</strong> {output || "No operations yet."}
            </div>

            <pre className="border rounded p-3">{JSON.stringify(hashTable, null, 2)}</pre>
        </div>
    );
}

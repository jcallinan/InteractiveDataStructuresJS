import React, { useState } from "react";

export default function DictionaryComponent() {
    const [dictionary, setDictionary] = useState({
        apple: "A fruit",
        algorithm: "A step-by-step problem-solving procedure"
    });
    const [word, setWord] = useState("");
    const [definition, setDefinition] = useState("");
    const [output, setOutput] = useState("Store and retrieve word definitions by key.");

    const addEntry = () => {
        const trimmedWord = word.trim();
        const trimmedDefinition = definition.trim();

        if (!trimmedWord || !trimmedDefinition) {
            setOutput("Please enter both a word and a definition.");
            return;
        }

        setDictionary({ ...dictionary, [trimmedWord]: trimmedDefinition });
        setOutput(`Saved definition for \"${trimmedWord}\".`);
        setWord("");
        setDefinition("");
    };

    const lookupEntry = () => {
        const trimmedWord = word.trim();
        if (!trimmedWord) {
            setOutput("Enter a word to look up.");
            return;
        }

        const result = dictionary[trimmedWord];
        setOutput(result ? `${trimmedWord}: ${result}` : `No definition found for \"${trimmedWord}\".`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Dictionary Operations</h2>

            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        placeholder="Word"
                    />
                </div>
                <div className="col-md-5">
                    <input
                        className="form-control"
                        value={definition}
                        onChange={(e) => setDefinition(e.target.value)}
                        placeholder="Definition"
                    />
                </div>
                <div className="col-md-3 d-grid gap-2 d-md-flex">
                    <button className="btn btn-primary flex-fill" onClick={addEntry}>Add</button>
                    <button className="btn btn-info flex-fill" onClick={lookupEntry}>Lookup</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Current Dictionary:</h5>
                <ul className="mb-0 ps-3">
                    {Object.entries(dictionary).map(([entryWord, entryDefinition]) => (
                        <li key={entryWord}>
                            <strong>{entryWord}</strong>: {entryDefinition}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

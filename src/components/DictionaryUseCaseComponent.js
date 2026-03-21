import React, { useState } from "react";

const initialTranslations = {
    hello: "hola",
    goodbye: "adiós",
    thankyou: "gracias"
};

const useCases = [
    {
        title: "Word definitions and translations",
        description: "Dictionaries map a known key to a value, which is exactly what is needed for glossaries, translation tables, and configuration lookups."
    },
    {
        title: "User or product records by ID",
        description: "Business systems store details under IDs so they can retrieve the right record quickly without scanning a full list."
    }
];

export default function DictionaryUseCaseComponent() {
    const [translations, setTranslations] = useState(initialTranslations);
    const [term, setTerm] = useState("");
    const [translation, setTranslation] = useState("");
    const [output, setOutput] = useState("Lookup a known term to find its stored translation.");

    const saveTranslation = () => {
        const trimmedTerm = term.trim().toLowerCase();
        const trimmedTranslation = translation.trim().toLowerCase();

        if (!trimmedTerm || !trimmedTranslation) {
            setOutput("Enter both a term and a translation.");
            return;
        }

        setTranslations({ ...translations, [trimmedTerm]: trimmedTranslation });
        setOutput(`Saved translation for ${trimmedTerm}.`);
        setTerm("");
        setTranslation("");
    };

    const lookupTranslation = () => {
        const trimmedTerm = term.trim().toLowerCase();
        if (!trimmedTerm) {
            setOutput("Enter a term to look up.");
            return;
        }

        const result = translations[trimmedTerm];
        setOutput(result ? `${trimmedTerm} → ${result}` : `No translation stored for ${trimmedTerm}.`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Dictionaries</h2>
            <p className="text-muted mb-4">
                Dictionaries pair keys with values so you can retrieve information directly by name or identifier.
            </p>

            <div className="row g-3 mb-4">
                {useCases.map((useCase) => (
                    <div className="col-md-6" key={useCase.title}>
                        <div className="border rounded h-100 p-3 bg-light">
                            <h5>{useCase.title}</h5>
                            <p className="mb-0">{useCase.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h5 className="mb-3">Interactive example: translation dictionary</h5>
            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="English term"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Stored value"
                        value={translation}
                        onChange={(e) => setTranslation(e.target.value)}
                    />
                </div>
                <div className="col-md-3 d-grid gap-2 d-md-flex">
                    <button className="btn btn-primary flex-fill" onClick={saveTranslation}>Save</button>
                    <button className="btn btn-info flex-fill" onClick={lookupTranslation}>Lookup</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Dictionary Entries</h5>
                <ul className="mb-0 ps-3">
                    {Object.entries(translations).map(([storedTerm, storedValue]) => (
                        <li key={storedTerm}>
                            <strong>{storedTerm}</strong>: {storedValue}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

import React, { useState } from "react";

const useCases = [
    {
        title: "Deduplicating tags, emails, or IDs",
        description: "Sets are a natural fit when duplicates should be ignored automatically, such as mailing lists, selected filters, or imported customer IDs."
    },
    {
        title: "Tracking active permissions or feature flags",
        description: "Applications often need to know whether a user has a permission or whether a feature flag is enabled, and sets provide fast membership checks for that."
    }
];

export default function SetUseCaseComponent() {
    const [emails, setEmails] = useState(new Set(["alex@example.com", "sam@example.com"]));
    const [email, setEmail] = useState("");
    const [output, setOutput] = useState("Duplicate subscribers are ignored automatically.");

    const addSubscriber = () => {
        const trimmed = email.trim().toLowerCase();
        if (!trimmed) {
            setOutput("Enter an email address first.");
            return;
        }

        const nextEmails = new Set(emails);
        const alreadySubscribed = nextEmails.has(trimmed);
        nextEmails.add(trimmed);
        setEmails(nextEmails);
        setEmail("");
        setOutput(alreadySubscribed ? `${trimmed} was already subscribed.` : `Added unique subscriber: ${trimmed}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Sets</h2>
            <p className="text-muted mb-4">
                Sets are best when uniqueness matters more than position.
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

            <h5 className="mb-3">Interactive example: duplicate-free newsletter signup</h5>
            <div className="input-group mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter subscriber email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addSubscriber}>Add Subscriber</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Unique Subscribers</h5>
                <p className="mb-0">{Array.from(emails).join(", ")}</p>
            </div>
        </div>
    );
}

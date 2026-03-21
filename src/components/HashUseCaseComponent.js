import React, { useState } from "react";

const initialCache = {
    user_101: "Profile loaded from cache",
    order_202: "Order summary cached"
};

const useCases = [
    {
        title: "Caching sessions, profiles, and API responses",
        description: "Hash-based structures are commonly used for caches because they support fast lookup by key for recently used data."
    },
    {
        title: "Indexing records for quick retrieval",
        description: "Databases, search tools, and URL shorteners often hash keys so they can locate values quickly without checking every record."
    }
];

export default function HashUseCaseComponent() {
    const [cache, setCache] = useState(initialCache);
    const [cacheKey, setCacheKey] = useState("");
    const [cacheValue, setCacheValue] = useState("");
    const [output, setOutput] = useState("Store a cached value under a lookup key.");

    const saveCacheEntry = () => {
        const trimmedKey = cacheKey.trim();
        const trimmedValue = cacheValue.trim();

        if (!trimmedKey || !trimmedValue) {
            setOutput("Enter both a cache key and a value.");
            return;
        }

        setCache({ ...cache, [trimmedKey]: trimmedValue });
        setOutput(`Cached ${trimmedKey}.`);
        setCacheKey("");
        setCacheValue("");
    };

    const lookupCacheEntry = () => {
        const trimmedKey = cacheKey.trim();
        if (!trimmedKey) {
            setOutput("Enter a cache key to look up.");
            return;
        }

        const result = cache[trimmedKey];
        setOutput(result ? `${trimmedKey} → ${result}` : `Cache miss for ${trimmedKey}.`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Hashes / Hash Tables</h2>
            <p className="text-muted mb-4">
                Hash structures are designed for quick lookup when a key can be transformed into an efficient storage location.
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

            <h5 className="mb-3">Interactive example: application cache</h5>
            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cache key"
                        value={cacheKey}
                        onChange={(e) => setCacheKey(e.target.value)}
                    />
                </div>
                <div className="col-md-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cached value"
                        value={cacheValue}
                        onChange={(e) => setCacheValue(e.target.value)}
                    />
                </div>
                <div className="col-md-3 d-grid gap-2 d-md-flex">
                    <button className="btn btn-primary flex-fill" onClick={saveCacheEntry}>Save</button>
                    <button className="btn btn-info flex-fill" onClick={lookupCacheEntry}>Lookup</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Cached Entries</h5>
                <ul className="mb-0 ps-3">
                    {Object.entries(cache).map(([entryKey, entryValue]) => (
                        <li key={entryKey}>
                            <strong>{entryKey}</strong>: {entryValue}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

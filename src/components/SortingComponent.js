import React, { useMemo, useState } from "react";

const realWorldUseCases = [
    {
        title: "E-commerce product ranking",
        description: "Sort products by price, rating, or popularity so shoppers can scan results quickly."
    },
    {
        title: "Fast record lookup",
        description: "Search algorithms locate exact IDs, usernames, or values without scanning every item."
    }
];

const parseInput = (text) => text
    .split(",")
    .map((value) => Number.parseInt(value.trim(), 10))
    .filter((value) => !Number.isNaN(value));

const bubbleSort = (items) => {
    const arr = [...items];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};

const linearSearch = (items, target) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === target) return i;
    }
    return -1;
};

const binarySearch = (items, target) => {
    let low = 0;
    let high = items.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (items[mid] === target) return mid;
        if (items[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
};

export default function SortingComponent() {
    const [defaultArray] = useState([64, 34, 25, 12, 22, 11, 90]);
    const [userInput, setUserInput] = useState("5, 3, 8, 1, 9, 6");
    const [searchTarget, setSearchTarget] = useState("8");
    const [sortedArray, setSortedArray] = useState([]);
    const [output, setOutput] = useState("Sort your list, then run linear and binary search.");

    const userArray = useMemo(() => parseInput(userInput), [userInput]);

    const handleSort = () => {
        if (!userArray.length) {
            setOutput("Enter at least one valid number.");
            return;
        }

        const sorted = bubbleSort(userArray);
        setSortedArray(sorted);
        setOutput(`Bubble sort completed in ascending order: ${sorted.join(", ")}`);
    };

    const runSearch = (mode) => {
        const target = Number.parseInt(searchTarget, 10);
        if (Number.isNaN(target)) {
            setOutput("Enter a numeric search target.");
            return;
        }

        const workingArray = mode === "binary" ? sortedArray : userArray;
        if (!workingArray.length) {
            setOutput(mode === "binary"
                ? "Run bubble sort first so binary search has sorted input."
                : "Enter numbers to search.");
            return;
        }

        const index = mode === "binary"
            ? binarySearch(workingArray, target)
            : linearSearch(workingArray, target);

        setOutput(index >= 0
            ? `${mode === "binary" ? "Binary" : "Linear"} search found ${target} at index ${index}.`
            : `${mode === "binary" ? "Binary" : "Linear"} search did not find ${target}.`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Sorting and Searching Algorithms</h2>
            <p className="text-muted mb-4">
                Chapter 10: compare sorting and searching techniques with the same dataset.
            </p>

            <div className="row g-3 mb-4">
                {realWorldUseCases.map((useCase) => (
                    <div className="col-md-6" key={useCase.title}>
                        <div className="border rounded h-100 p-3 bg-light">
                            <h5>{useCase.title}</h5>
                            <p className="mb-0">{useCase.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-4 border-bottom pb-3">
                <h5>Default Chapter Example</h5>
                <p className="mb-0">Original Array: {defaultArray.join(", ")}</p>
                <p className="mb-0">Sorted Array: {bubbleSort(defaultArray).join(", ")}</p>
            </div>

            <div className="mb-3">
                <label className="form-label fw-semibold">Custom number list</label>
                <input
                    className="form-control"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Enter numbers separated by commas"
                />
                <div className="d-grid d-md-flex gap-2 mt-2">
                    <button className="btn btn-primary" onClick={handleSort}>Run Bubble Sort</button>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <input
                        className="form-control"
                        value={searchTarget}
                        onChange={(e) => setSearchTarget(e.target.value)}
                        placeholder="Search target"
                    />
                </div>
                <div className="col-md-6 d-flex gap-2">
                    <button className="btn btn-info flex-fill" onClick={() => runSearch("linear")}>Linear Search</button>
                    <button className="btn btn-secondary flex-fill" onClick={() => runSearch("binary")}>Binary Search</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="row g-3">
                <div className="col-md-6">
                    <div className="border rounded p-3">
                        <h6>Parsed Input</h6>
                        <p className="mb-0">{userArray.length ? userArray.join(", ") : "No valid numbers yet."}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="border rounded p-3">
                        <h6>Sorted Input (for binary search)</h6>
                        <p className="mb-0">{sortedArray.length ? sortedArray.join(", ") : "Sort not run yet."}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

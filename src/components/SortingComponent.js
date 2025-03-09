import React, { useState } from "react";

export default function SortingComponent() {
    const [defaultArray, setDefaultArray] = useState([64, 34, 25, 12, 22, 11, 90]);
    const [defaultSortedArray, setDefaultSortedArray] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [userArray, setUserArray] = useState([]);
    const [userSortedArray, setUserSortedArray] = useState([]);
    const [output, setOutput] = useState("");

    // Original predefined sorting
    const handleDefaultSort = () => {
        const sorted = [...defaultArray].sort((a, b) => a - b);
        setDefaultSortedArray(sorted);
    };

    // Handle input change for user-defined array
    const handleUserInputChange = (e) => {
        setUserInput(e.target.value);
        const values = e.target.value
            .split(",")
            .map((val) => parseInt(val.trim()))
            .filter((val) => !isNaN(val));
        setUserArray(values);
    };

    // Bubble Sort for user-defined array
    const bubbleSort = () => {
        if (userArray.length === 0) {
            setOutput("Please enter numbers to sort.");
            return;
        }

        let arr = [...userArray];
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }

        setUserSortedArray(arr);
        setOutput("User array sorted using Bubble Sort.");
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Sorting Algorithms</h2>

            {/* Original Predefined Sorting */}
            <div className="mb-4 border-bottom pb-4">
                <h4>Original Predefined Array Sorting</h4>
                <p>Original Array: {defaultArray.join(", ")}</p>
                <button className="btn btn-primary" onClick={handleDefaultSort}>
                    Sort Array
                </button>
                <p className="mt-2">Sorted Array: {defaultSortedArray.length ? defaultSortedArray.join(", ") : "Not sorted yet."}</p>
            </div>

            {/* Bubble Sort with User Input */}
            <div>
                <h4>Bubble Sort with Custom Input</h4>
                <input
                    className="form-control mb-3"
                    placeholder="Enter numbers separated by commas (e.g., 5, 3, 8, 1)"
                    value={userInput}
                    onChange={handleUserInputChange}
                />
                <button className="btn btn-primary" onClick={bubbleSort}>
                    Sort with Bubble Sort
                </button>

                <div className="alert alert-info mt-3">
                    <strong>Output:</strong> {output || "No sorting done yet."}
                </div>

                <div className="border rounded p-3 mt-3">
                    <h5>Original User Array:</h5>
                    <p>{userArray.length ? userArray.join(", ") : "No input provided yet."}</p>
                </div>

                <div className="border rounded p-3 mt-3">
                    <h5>Sorted User Array:</h5>
                    <p>{userSortedArray.length ? userSortedArray.join(", ") : "No sorting done yet."}</p>
                </div>
            </div>
        </div>
    );
}

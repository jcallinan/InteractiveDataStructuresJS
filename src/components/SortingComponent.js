import React, { useState } from "react";

export default function SortingComponent() {
    const [array, setArray] = useState([5, 3, 8, 1]);
    const [sortedArray, setSortedArray] = useState([]);

    const sortArray = () => {
        setSortedArray([...array].sort((a, b) => a - b));
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-4">Sorting Operations</h2>

            <p>Original Array: {array.join(", ")}</p>
            <button className="btn btn-primary" onClick={sortArray}>Sort</button>
            <p>Sorted Array: {sortedArray.length ? sortedArray.join(", ") : "Not sorted yet."}</p>
        </div>
    );
}

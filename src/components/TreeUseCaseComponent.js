import React, { useState } from "react";

const useCases = [
    {
        title: "File systems and folder navigation",
        description: "Directories are naturally hierarchical. Tree traversal helps systems search and display nested folders quickly."
    },
    {
        title: "Autocomplete and prefix search",
        description: "Tries and other tree structures index prefixes so suggestion engines can find likely terms fast."
    }
];

const sampleTree = {
    value: "Company",
    children: [
        {
            value: "Engineering",
            children: [
                { value: "Frontend", children: [] },
                { value: "Backend", children: [] }
            ]
        },
        {
            value: "Operations",
            children: [
                { value: "Support", children: [] },
                { value: "IT", children: [] }
            ]
        }
    ]
};

const depthFirstSearch = (node, target, path = []) => {
    if (!node) return null;
    const nextPath = [...path, node.value];

    if (node.value.toLowerCase() === target.toLowerCase()) {
        return nextPath;
    }

    for (const child of node.children) {
        const result = depthFirstSearch(child, target, nextPath);
        if (result) return result;
    }

    return null;
};

export default function TreeUseCaseComponent() {
    const [department, setDepartment] = useState("");
    const [output, setOutput] = useState("Search the org chart for a team name.");

    const handleSearch = () => {
        const target = department.trim();
        if (!target) {
            setOutput("Enter a department or team to search.");
            return;
        }

        const resultPath = depthFirstSearch(sampleTree, target);
        setOutput(
            resultPath
                ? `Found ${target}: ${resultPath.join(" → ")}`
                : `${target} was not found in this hierarchy.`
        );
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Trees</h2>
            <p className="text-muted mb-4">
                Trees are ideal for hierarchical information where one parent branches into many child nodes.
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

            <h5 className="mb-3">Interactive example: organization chart lookup</h5>
            <div className="row g-2 mb-3">
                <div className="col-md-9">
                    <input
                        className="form-control"
                        value={department}
                        placeholder="Search for Engineering, Backend, IT..."
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                </div>
                <div className="col-md-3 d-grid">
                    <button className="btn btn-primary" onClick={handleSearch}>Find Team</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>
        </div>
    );
}

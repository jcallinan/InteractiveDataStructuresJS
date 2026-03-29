import React, { useState } from "react";

const flightGraph = {
    NYC: ["BOS", "ATL"],
    BOS: ["NYC", "ORD"],
    ATL: ["DFW", "MIA"],
    ORD: ["SFO"],
    DFW: ["SFO"],
    MIA: [],
    SFO: []
};

const useCases = [
    {
        title: "Navigation and route planning",
        description: "Maps model intersections and roads as graphs so algorithms can find viable or shortest routes."
    },
    {
        title: "Social and recommendation networks",
        description: "Connections between people, products, and content form graphs used for suggestions and discovery."
    }
];

function shortestRoute(graph, start, destination) {
    if (!graph[start] || !graph[destination]) return null;

    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current === destination) {
            return path;
        }

        graph[current].forEach((neighbor) => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        });
    }

    return null;
}

export default function GraphUseCaseComponent() {
    const [origin, setOrigin] = useState("NYC");
    const [destination, setDestination] = useState("SFO");
    const [output, setOutput] = useState("Find a route in the flight network.");

    const airports = Object.keys(flightGraph);

    const handleRouteSearch = () => {
        const route = shortestRoute(flightGraph, origin, destination);
        setOutput(route ? `Best hop route: ${route.join(" → ")}` : `No route from ${origin} to ${destination}.`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Graphs</h2>
            <p className="text-muted mb-4">
                Graphs capture connected systems where relationships are as important as the data itself.
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

            <h5 className="mb-3">Interactive example: flight connection planning</h5>
            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <select className="form-select" value={origin} onChange={(e) => setOrigin(e.target.value)}>
                        {airports.map((airport) => <option key={airport} value={airport}>{airport}</option>)}
                    </select>
                </div>
                <div className="col-md-4">
                    <select className="form-select" value={destination} onChange={(e) => setDestination(e.target.value)}>
                        {airports.map((airport) => <option key={airport} value={airport}>{airport}</option>)}
                    </select>
                </div>
                <div className="col-md-4 d-grid">
                    <button className="btn btn-primary" onClick={handleRouteSearch}>Find Route</button>
                </div>
            </div>

            <div className="alert alert-info mb-0">
                <strong>Output:</strong> {output}
            </div>
        </div>
    );
}

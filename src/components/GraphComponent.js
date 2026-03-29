import React, { useMemo, useState } from "react";

const initialGraph = {
    A: ["B", "C"],
    B: ["D", "E"],
    C: ["F"],
    D: [],
    E: ["F"],
    F: []
};

const normalizeNode = (value) => value.trim().toUpperCase();

export default function GraphComponent() {
    const [graph, setGraph] = useState(initialGraph);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [startNode, setStartNode] = useState("A");
    const [output, setOutput] = useState("Create edges and run BFS/DFS traversals.");

    const nodeList = useMemo(() => Object.keys(graph).sort(), [graph]);

    const ensureNode = (nextGraph, node) => {
        if (!nextGraph[node]) {
            nextGraph[node] = [];
        }
    };

    const addEdge = () => {
        const fromNode = normalizeNode(from);
        const toNode = normalizeNode(to);

        if (!fromNode || !toNode) {
            setOutput("Enter both a source and destination node.");
            return;
        }

        setGraph((prev) => {
            const next = { ...prev };
            ensureNode(next, fromNode);
            ensureNode(next, toNode);
            if (!next[fromNode].includes(toNode)) {
                next[fromNode] = [...next[fromNode], toNode];
            }
            return next;
        });

        setOutput(`Added edge ${fromNode} → ${toNode}.`);
        setFrom("");
        setTo("");
        if (!startNode) setStartNode(fromNode);
    };

    const bfs = (start) => {
        if (!graph[start]) return [];
        const visited = new Set([start]);
        const queue = [start];
        const order = [];

        while (queue.length) {
            const current = queue.shift();
            order.push(current);

            graph[current].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            });
        }

        return order;
    };

    const dfs = (start) => {
        if (!graph[start]) return [];
        const visited = new Set();
        const order = [];

        const explore = (node) => {
            visited.add(node);
            order.push(node);
            graph[node].forEach((neighbor) => {
                if (!visited.has(neighbor)) {
                    explore(neighbor);
                }
            });
        };

        explore(start);
        return order;
    };

    const runTraversal = (type) => {
        const node = normalizeNode(startNode);
        if (!node || !graph[node]) {
            setOutput("Select a valid start node first.");
            return;
        }

        const order = type === "bfs" ? bfs(node) : dfs(node);
        setOutput(`${type.toUpperCase()} from ${node}: ${order.join(" → ")}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Graph Operations</h2>
            <p className="text-muted mb-4">
                Chapter 9 focus: model relationships using an adjacency list, then explore those
                relationships with breadth-first and depth-first traversals.
            </p>

            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <input
                        className="form-control"
                        placeholder="From node (e.g., A)"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <input
                        className="form-control"
                        placeholder="To node (e.g., B)"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </div>
                <div className="col-md-4 d-grid">
                    <button className="btn btn-primary" onClick={addEdge}>Add Directed Edge</button>
                </div>
            </div>

            <div className="row g-2 mb-3">
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={startNode}
                        onChange={(e) => setStartNode(e.target.value)}
                    >
                        {nodeList.map((node) => (
                            <option key={node} value={node}>{node}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6 d-flex gap-2">
                    <button className="btn btn-info flex-fill" onClick={() => runTraversal("bfs")}>Run BFS</button>
                    <button className="btn btn-secondary flex-fill" onClick={() => runTraversal("dfs")}>Run DFS</button>
                </div>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3 bg-light">
                <h5 className="mb-2">Adjacency List</h5>
                <ul className="mb-0 ps-3">
                    {nodeList.map((node) => (
                        <li key={node}>
                            <strong>{node}</strong>: {graph[node].join(", ") || "(none)"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

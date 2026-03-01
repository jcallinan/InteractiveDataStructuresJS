import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import StackComponent from "./components/StackComponent";
import QueueComponent from "./components/QueueComponent";
import InvertedQueueComponent from "./components/InvertedQueueComponent";
import HashTableComponent from "./components/HashTableComponent";
import LinkedListComponent from "./components/LinkedListComponent";
import SortingComponent from "./components/SortingComponent";
import TreeComponent from "./components/TreeComponent";
import ArraysComponent from "./components/ArraysComponent";
import ArrayUseCaseComponent from "./components/ArrayUseCaseComponent";
import StackUseCaseComponent from "./components/StackUseCaseComponent";

export default function App() {
    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm px-3">
                    <NavLink className="navbar-brand fw-bold me-4" to="/">
                        Interactive Data Structures
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/arrays">Arrays</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/stack">Stack</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/queue">Queue</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/inverted-queue">Inverted Queue</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hash-table">Hash Table</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/linked-list">Linked List</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/sorting">Sorting</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/tree">Tree</NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle btn btn-link text-white text-decoration-none"
                                    id="useCasesMenu"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    type="button"
                                >
                                    Use Cases
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="useCasesMenu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/use-cases/arrays">
                                            Arrays Use Case
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/use-cases/stacks">
                                            Stacks Use Case
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="bg-light border rounded shadow-sm px-3 py-2 mt-2 mb-3">
                    <div className="d-flex flex-wrap align-items-center gap-2">
                        <span className="fw-semibold text-secondary me-2">Use Cases:</span>
                        <NavLink className="btn btn-sm btn-outline-primary" to="/use-cases/arrays">
                            Arrays Use Case
                        </NavLink>
                        <NavLink className="btn btn-sm btn-outline-primary" to="/use-cases/stacks">
                            Stack Use Case
                        </NavLink>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<Navigate to="/arrays" replace />} />
                    <Route path="/arrays" element={<ArraysComponent />} />
                    <Route path="/stack" element={<StackComponent />} />
                    <Route path="/queue" element={<QueueComponent />} />
                    <Route path="/inverted-queue" element={<InvertedQueueComponent />} />
                    <Route path="/hash-table" element={<HashTableComponent />} />
                    <Route path="/linked-list" element={<LinkedListComponent />} />
                    <Route path="/sorting" element={<SortingComponent />} />
                    <Route path="/tree" element={<TreeComponent />} />
                    <Route path="/use-cases/arrays" element={<ArrayUseCaseComponent />} />
                    <Route path="/use-cases/stacks" element={<StackUseCaseComponent />} />
                    <Route path="*" element={<Navigate to="/arrays" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

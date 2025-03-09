import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import StackComponent from "./components/StackComponent";
import QueueComponent from "./components/QueueComponent";
import HashTableComponent from "./components/HashTableComponent";
import LinkedListComponent from "./components/LinkedListComponent";
import SortingComponent from "./components/SortingComponent";
import TreeComponent from "./components/TreeComponent";

export default function App() {
    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded shadow-sm px-3">
                    <NavLink className="navbar-brand fw-bold me-4" to="/">
                        Interactive Data Structures
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/stack">Stack</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/queue">Queue</NavLink>
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
                    </div>
                </nav>

                <Routes>
                    <Route path="/stack" element={<StackComponent />} />
                    <Route path="/queue" element={<QueueComponent />} />
                    <Route path="/hash-table" element={<HashTableComponent />} />
                    <Route path="/linked-list" element={<LinkedListComponent />} />
                    <Route path="/sorting" element={<SortingComponent />} />
                    <Route path="/tree" element={<TreeComponent />} />
                </Routes>
            </div>
        </Router>
    );
}

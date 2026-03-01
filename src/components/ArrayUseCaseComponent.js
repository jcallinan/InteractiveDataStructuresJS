import React, { useState } from "react";

const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Keyboard", price: 80 },
    { id: 3, name: "Mouse", price: 40 },
    { id: 4, name: "Monitor", price: 350 }
];

export default function ArrayUseCaseComponent() {
    const [query, setQuery] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Case: Arrays for Product Search</h2>
            <p className="text-muted mb-4">
                Arrays are ideal for lists of records that you need to filter, map, and display in order.
            </p>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search product name"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <ul className="list-group">
                {filteredProducts.length === 0 ? (
                    <li className="list-group-item">No products found.</li>
                ) : (
                    filteredProducts.map((product) => (
                        <li key={product.id} className="list-group-item d-flex justify-content-between">
                            <span>{product.name}</span>
                            <span className="fw-semibold">${product.price}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

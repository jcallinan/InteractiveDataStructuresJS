import React, { useState } from "react";

const initialOrders = [
    "Order #1001 - Latte",
    "Order #1002 - Cappuccino",
    "Order #1003 - Tea"
];

export default function QueueUseCaseComponent() {
    const [orders, setOrders] = useState(initialOrders);
    const [newOrder, setNewOrder] = useState("");
    const [output, setOutput] = useState("New orders join the back of the line.");

    const addOrder = () => {
        if (!newOrder.trim()) {
            setOutput("Please enter an order description.");
            return;
        }

        const orderValue = newOrder.trim();
        setOrders([...orders, orderValue]);
        setNewOrder("");
        setOutput(`Added to queue: ${orderValue}`);
    };

    const serveOrder = () => {
        if (orders.length === 0) {
            setOutput("No orders left to serve.");
            return;
        }

        const served = orders[0];
        setOrders(orders.slice(1));
        setOutput(`Served: ${served}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Case: Queue for Order Processing</h2>
            <p className="text-muted mb-4">
                Cafés and help desks often process requests in arrival order. A queue ensures fairness with FIFO behavior.
            </p>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new order"
                    value={newOrder}
                    onChange={(e) => setNewOrder(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addOrder}>Add Order</button>
            </div>

            <button className="btn btn-success mb-3" onClick={serveOrder}>Serve Next Order</button>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Order Queue (front → back)</h5>
                <p className="mb-0">{orders.length ? orders.join(" → ") : "No pending orders."}</p>
            </div>
        </div>
    );
}

import React, { useState } from "react";

const initialStops = ["Warehouse", "Sorting Hub", "Delivery Van", "Customer"];

const useCases = [
    {
        title: "Navigation history and media playlists",
        description: "Doubly linked lists are useful when users move forward and backward through browser history, photo galleries, or music playlists without reindexing an entire array."
    },
    {
        title: "Order processing pipelines",
        description: "Linked lists fit workflows where items are frequently inserted or removed in sequence, such as delivery checkpoints, print queues, or background job chains."
    }
];

export default function LinkedListUseCaseComponent() {
    const [stops, setStops] = useState(initialStops);
    const [newStop, setNewStop] = useState("");
    const [output, setOutput] = useState("A shipment moves from one linked checkpoint to the next.");

    const insertStop = () => {
        const trimmed = newStop.trim();
        if (!trimmed) {
            setOutput("Enter a checkpoint name first.");
            return;
        }

        setStops([...stops, trimmed]);
        setNewStop("");
        setOutput(`Added checkpoint: ${trimmed}`);
    };

    const advanceStop = () => {
        if (stops.length <= 1) {
            setOutput("The shipment is already at the final destination.");
            return;
        }

        const completed = stops[0];
        setStops(stops.slice(1));
        setOutput(`Moved past ${completed} to ${stops[1]}.`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Cases: Linked Lists</h2>
            <p className="text-muted mb-4">
                Linked lists shine when data must stay connected in order and items are inserted or removed frequently without shifting the entire structure.
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

            <h5 className="mb-3">Interactive example: delivery route checkpoints</h5>
            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add checkpoint"
                    value={newStop}
                    onChange={(e) => setNewStop(e.target.value)}
                />
                <button className="btn btn-primary" onClick={insertStop}>Append Checkpoint</button>
                <button className="btn btn-success" onClick={advanceStop}>Advance Route</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Checkpoint Chain</h5>
                <p className="mb-0">{stops.join(" → ")}</p>
            </div>
        </div>
    );
}

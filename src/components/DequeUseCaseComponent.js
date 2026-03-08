import React, { useState } from "react";

export default function DequeUseCaseComponent() {
    const [tasks, setTasks] = useState(["Daily backup", "Email triage", "Bug fix"]);
    const [taskInput, setTaskInput] = useState("");
    const [output, setOutput] = useState("Add urgent work to the front or routine work to the back.");

    const addUrgentTask = () => {
        if (!taskInput.trim()) {
            setOutput("Please enter a task before adding.");
            return;
        }

        const taskValue = taskInput.trim();
        setTasks([taskValue, ...tasks]);
        setTaskInput("");
        setOutput(`Urgent task added to front: ${taskValue}`);
    };

    const addRoutineTask = () => {
        if (!taskInput.trim()) {
            setOutput("Please enter a task before adding.");
            return;
        }

        const taskValue = taskInput.trim();
        setTasks([...tasks, taskValue]);
        setTaskInput("");
        setOutput(`Routine task added to back: ${taskValue}`);
    };

    const completeNextTask = () => {
        if (tasks.length === 0) {
            setOutput("No tasks available.");
            return;
        }

        const completed = tasks[0];
        setTasks(tasks.slice(1));
        setOutput(`Completed front task: ${completed}`);
    };

    const completeLowPriorityTask = () => {
        if (tasks.length === 0) {
            setOutput("No tasks available.");
            return;
        }

        const completed = tasks[tasks.length - 1];
        setTasks(tasks.slice(0, -1));
        setOutput(`Completed back task: ${completed}`);
    };

    return (
        <div className="card shadow-sm p-4">
            <h2 className="mb-2">Use Case: Deque for Task Scheduling</h2>
            <p className="text-muted mb-4">
                A deque is useful when a scheduler must insert and remove tasks at both ends—for example, urgent tickets at the front and batch jobs at the back.
            </p>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button className="btn btn-primary" onClick={addUrgentTask}>Add Urgent (Front)</button>
                <button className="btn btn-primary" onClick={addRoutineTask}>Add Routine (Back)</button>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-3">
                <button className="btn btn-success" onClick={completeNextTask}>Complete Front Task</button>
                <button className="btn btn-success" onClick={completeLowPriorityTask}>Complete Back Task</button>
            </div>

            <div className="alert alert-info">
                <strong>Output:</strong> {output}
            </div>

            <div className="border rounded p-3">
                <h5>Task Deque (front → back)</h5>
                <p className="mb-0">{tasks.length ? tasks.join(" → ") : "No scheduled tasks."}</p>
            </div>
        </div>
    );
}

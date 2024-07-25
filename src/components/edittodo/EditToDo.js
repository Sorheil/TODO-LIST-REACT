// components/EditToDo/EditToDo.js
import React, { useState, useEffect } from 'react';

function EditToDo({ todo, setView, onUpdateTodo }) {
    const [task, setTask] = useState(todo.task);
    const [description, setDescription] = useState(todo.description);
    const [category, setCategory] = useState(todo.category);
    const [when, setWhen] = useState(todo.when);
    const [priority, setPriority] = useState(todo.priority);
    const [fulfillment, setFulfillment] = useState(todo.fulfillment);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateTodo = {
            ...todo,
            task,
            description,
            category,
            when,
            priority,
            fulfillment: parseInt(fulfillment, 10)
        };
        onUpdateTodo(updateTodo)
        setView("todoview");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit To-Do:</h1>
            <div className='todo-data'>
                <div className='form-task'>
                    <label htmlFor="task">Task:</label>
                    <input
                        type="text"
                        id="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        required
                        placeholder='Name for the task you’re going to do'
                    />
                </div>
                <div className='form-description'>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='A short description of the task - can be omitted'
                    />
                </div>
                <div className='form-category'>
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        placeholder='e.g. household, school, work'
                    />
                </div>
                <div className='form-when'>
                    <label htmlFor="when">When:</label>
                    <input
                        type="date"
                        id="when"
                        value={when}
                        onChange={(e) => setWhen(e.target.value)}
                        required
                    />
                </div>
                <div className='form-priority'>
                    <label htmlFor="priority">Priority:</label>
                    <select
                        id="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                        required
                    >
                        <option value="" disabled>Select from dropdown</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className='form-fullfillment'>
                    <label htmlFor="fulfillment">Fulfillment:</label>
                    <input
                        type="range"
                        id="fulfillment"
                        value={fulfillment}
                        onChange={(e) => setFulfillment(e.target.value)}
                        min="0"
                        max="100"
                    />
                </div>
                <div className='form-buttons'>
                    <button type="submit" className='btn'>Save</button>
                    <button type="button" className='btn' onClick={() => setView("todoview")}>Cancel</button>
                </div>
            </div>
        </form>
    );
}

export default EditToDo;

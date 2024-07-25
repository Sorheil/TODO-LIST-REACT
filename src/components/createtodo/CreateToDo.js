// components/CreateToDo/CreateToDo.js
import React, { useState } from 'react';

function CreateToDo({ setView, setTodos, todos }) {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [when, setWhen] = useState('');
  const [priority, setPriority] = useState('');
  const [fulfillment, setFulfillment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      task,
      description,
      category,
      when,
      priority,
      fulfillment: parseInt(fulfillment)
    };
    setTodos([...todos, newTodo]);
    setView(false);
  };

  return (

    <form onSubmit={handleSubmit}>
      <h1>Add a new to-do:</h1>

      <div className='todo-data'>
        <div className='form-task '>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            placeholder='name for the task you’re going to do'
          />
        </div>

        <div className='form-description '>
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='a short description of the task - can be omitted'
          />
        </div>

        <div className='form-category '>
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

        <div className='form-when '>
          <label htmlFor="when">When:</label>
          <input
            type="date"
            id="when"
            value={when}
            onChange={(e) => setWhen(e.target.value)}
            required
          />
        </div>

        <div className='form-priority '>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="" disabled>
              Select from dropdown
            </option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>

        </div>

        <div className='form-fullfilment '>
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
          <button type="button" className='btn' onClick={() => setView(false)}>Cancel</button>
        </div>

      </div>
    </form>
  );
}

export default CreateToDo;

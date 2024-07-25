// App.js
import React, { useState } from 'react';
import "./App.css";

// Bouton de filtre
import FilterButton from './components/FilterButton/FilterButton';

// Données
import tododata from './data/tododata.js'

// Composant Todo
import ToDo from './components/ToDo/ToDo';

// Composant CreateToDo
import CreateToDo from './components/createtodo/CreateToDo.js';

// Composant edittodo
import EditToDo from './components/edittodo/EditToDo.js';

const FILTER_MAP = {
  All: () => true,
  'To-do': (todo) => todo.fulfillment < 100,
  Completed: (todo) => todo.fulfillment === 100,
};

// Noms des filtres
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  // État
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState(tododata);
  const [view, setView] = useState("todoview");
  const [editingToDo, setEditingTodo] = useState(null)

  // Fonction de suppression
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  //When a user clicks on the edit button of a todo

  function editTodo(id) {
    const todoToEdit = todos.find(todo => todo.id === id);
    setEditingTodo(todoToEdit);
    setView("todoediting");
  }
  //When the user clicks the button to update the todo
  function updateTodo(updatedTodo) {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setView("todoview");
  }

  // Génération des boutons de filtre
  const filterButtons = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  // Génération des todos
  const todoList = todos.filter(FILTER_MAP[filter]).map((todo) => (
    <ToDo
      key={todo.id}
      id={todo.id}
      tasks={todo.task}
      description={todo.description}
      category={todo.category}
      when={todo.when}
      priority={todo.priority}
      fulfillment={todo.fulfillment}
      onDelete={deleteTodo}
      onEdit={editTodo}
    />
  ));

  // Template de la page d'accueil
  const HomePageTemplate = (
    <main>
      <h1>React To-Do List</h1>
      <div className='options-todo'>
        <button type="button" className='btn btn-2-5 btn-create-todo' onClick={() => { setView("todocreating") }}>
          Add a new to-do
        </button>
        <div className='filters'>
          {filterButtons}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Category</th>
            <th>When</th>
            <th>Priority</th>
            <th>Fulfillment</th>
            <th><span className="sr-only">Modifier ou supprimer</span></th>
          </tr>
        </thead>
        <tbody>
          {todoList}
        </tbody>
      </table>
    </main>
  );

  // Template of the task creation page
  const createTodoPageTemplate = (
    <main>
      <h1>React To-Do List</h1>
      <CreateToDo setView={setView} setTodos={setTodos} todos={todos} />
    </main>

    // Task editing page template
  );
  const editTodoPageTemplate = (
    <main>
      <h1>React To-Do List</h1>
      <EditToDo todo={editingToDo} setEditingTodo={setEditingTodo} setView={setView} onUpdateTodo={updateTodo} />
    </main>
  )

  switch (view) {
    case "todoediting":
      return editTodoPageTemplate;

    case "todocreating":
      return createTodoPageTemplate;

    case "todoview":
      return HomePageTemplate

    default:
      return HomePageTemplate

  }

}

export default App;

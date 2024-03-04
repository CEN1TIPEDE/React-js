import  { useState } from "react";
import { Todo } from "./Todo"; // Importing Todo component
import { TodoForm } from "./TodoForm"; // Importing TodoForm component
import { v4 as uuidv4 } from "uuid"; // Importing uuid library
import "../styles/TodoWrapper.css"; // Importing CSS file for styling

export const TodoWrapper = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false }, // Adding new todo with unique id
    ]);
  }

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Filtering out the todo with the specified id
  }

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo // Toggling completed status of the todo with the specified id
      )
    );
  }

  return (
    <div className="TodoWrapper">
      <h1 style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1.75rem'}}>What is our quest today?</h1>
      <TodoForm addTodo={addTodo} /> {/* TodoForm component for adding new todos */}
      {/* Displaying todos */}
      {todos.map((todo) => (
        <Todo
          key={todo.id} // Unique key for each todo
          task={todo}
          deleteTodo={deleteTodo} // Function to delete todo
          toggleComplete={toggleComplete} // Function to toggle completion status
        />
      ))}
    </div>
  );
};
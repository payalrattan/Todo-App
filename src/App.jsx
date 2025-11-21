// App.jsx
import { useState } from "react";
import { Form } from "./Form.jsx";
import { TodoList } from "./todoList.jsx";
import "./App.css"

export const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoData) => setTodos((prev) => [todoData, ...prev]);

  const deleteTodo = (id) => setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const checkTodo = (id) =>
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );

  return (
   <div className="app-container">
  <Form addTodo={addTodo} />
  <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
</div>

  );
};

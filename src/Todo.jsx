// Todo.jsx
import React from "react";
import PropTypes from "prop-types";

export const Todo = ({ todo, deleteTodo, checkTodo }) => (
  <li>
    <div className={todo.completed ? "completed" : ""}>{todo.text}</div>
    <div>
      <button onClick={() => checkTodo(todo.id)}>
        {todo.completed ? "Checked" : "Check"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired
};

// Form.jsx
import React, { useState } from "react";
import uuid from "react-uuid";

export const Form = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const changeHandler = (e) => {
    setError(false);
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }
    const todo = { id: uuid(), text: input, completed: false };
    addTodo(todo);
    setInput("");
  };

  return (
    <div>
      <h1>Add your skills / Todos</h1>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={changeHandler} value={input} placeholder="Add your Skills/Todos here..."/>
        <button>Add</button>
      </form>
     {error && <div className="error">Input can not be empty</div>}

    </div>
  );
};

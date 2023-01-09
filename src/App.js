import React from "react";
import "./App.css";
import { useState } from "react";
import TodoList from "./Components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    //console.log(task)
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const [todos, setTodos] = useState([]);
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="app_wrapper">
        <div className="header">
          <h1>MY Goals</h1>
        </div>

        <form onSubmit={submitHandeler}>
          <input
            type="text"
            placeholder="Enter a goal..."
            className="task_input"
            value={task}
            onChange={changeHandler}
          />
          <button className="button_add" type="submit">
            Add
          </button>
        </form>
        <TodoList todolist={todos} deleteHandler={deleteHandler} />
      </div>
    </div>
  );
}

export default App;

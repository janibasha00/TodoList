import React from "react";
import "../App.css";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList({ todolist, deleteHandler }) {
  return (
    <div>
      {todolist.map((todo, index) => (
        <div className="list_item" key={index}>
          <li className="list">{todo} </li>
          <DeleteIcon
            className="button_delete"
            onClick={() => deleteHandler(index)}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

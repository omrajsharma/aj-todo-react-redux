import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && val !== todo.text) {
      dispatch(editTodo({ id: todo.id, newText: val })); // Updated action payload
    }
    setIsEditing(!isEditing);
  };

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {isEditing ? (
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      ) : (
        <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;

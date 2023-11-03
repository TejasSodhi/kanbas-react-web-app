import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem(todo) {
    //const { todo } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo))} className="btn btn-danger me-2"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))} className="btn btn-primary me-2"> Edit </button>
      {todo.todo.title}
    </li>
  );
}
export default TodoItem;

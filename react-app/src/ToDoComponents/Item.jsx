/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
function Item({ item, setTodos }) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  const handelEdit = () => {
    setEditing(true);
  };
  const handelDelete= () =>{
    setTodos((prevTodos) => prevTodos.filter((todo) =>todo.id != item.id));
  }
  const handelInputChange =(e) =>{
    setTodos((prevTodos) =>
        prevTodos.map((todo) =>
            todo.id === item.id ?{...todo, title: e.target.value} : todo
        )
    )
  }
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        0,
        inputRef.current.value.length
      );
    }
  }, [editing]);
  const handelInputSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };
  const handelInputBlur = () => {
    setEditing(false);
  };

  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <li id={item.id} className="todo_item">
      {editing ? (
        <form className="edit-form" onSubmit={handelInputSubmit}>
          <label htmlFor="edit-todo">
            <input
              type="text"
              name="edit-todo"
              id="edit-todo"
              ref={inputRef}
              defaultValue={item?.title}
              onBlur={handelInputBlur}
              onChange={handelInputChange}
            />
          </label>
        </form>
      ) : (
        <>
          <button onClick={completeTodo} className="todo_item_left">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <p
              style={item.isCompleted ? { textDecoration: "line-through" } : {}}
            >
              {item.title}
            </p>
          </button>
          <div className="todo_item_right">
            <button onClick={handelEdit}>
              <span>Edit</span>
            </button>
            <button onClick={handelDelete}>
              <span>Delete</span>
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default Item;

import "../../talwindcss/src/assets/css/todo.css";
import ToDoHeader from "./components/to-do-components/ToDoHeader";
import ToDoHero from "./components/to-do-components/ToDoHero";
import Form from "./components/to-do-components/Form";
import ToDoList from "./components/to-do-components/ToDoList";
import { useState } from "react";
function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <>
      <div className="wrapper">
        <ToDoHeader />
        <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
        <Form setTodos={setTodos} />
        <ToDoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default ToDoApp;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ToDoHero from "./ToDoComponents/ToDoHero";
import Form from "./ToDoComponents/Form";
import Header from "./ToDoComponents/Header";
import ToDoList from "./ToDoComponents/ToDoList";
/*
import "./assets/style.css";
*/


function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const todos_completed = todos.filter(
    (todo) => todo.isCompleted === true
  ).length;
  const total_todos = todos.length;
  
  return (
    <div className="wrapper">
      <Header />
      <ToDoHero todos_completed={todos_completed} total_todos={total_todos} />
      <Form setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default ToDoApp;

/* eslint-disable react/no-unescaped-entities */
"use client";
import Button from "../components/Button";
import { useState } from "react";

function ToDoApp() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

const deleteHandler = (index) => {
  let copyTask = [...mainTask]
  copyTask.splice(index, 1)
  setmainTask(copyTask);
}

  let renderedTask = <h2>No task available</h2>;

  if (mainTask.length > 0) {
    renderedTask = mainTask.map((task, index) => {
      return (
        <>
          <li key={index} className="flex justify-between items-center mb-5">
            <div className="flex items-center justify-between mb-5 w-2/3">
              <h5 className="text-2xl font-semibold">{task.title}</h5>
              <h6 className="text-2xl font-semibold">{task.desc}</h6>
            </div>
            <button onClick = {() => {
              deleteHandler(index);
            }} className="bg-stone-600 text-white px-5 py-2 text-xl">
              Delete
            </button>
          </li>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center">
        Utsav To Do App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-slate-800 px-4 py-2 border-4 m-8"
          placeholder="Enter your text here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-slate-800 px-4 py-2 border-4 m-8"
          placeholder="Enter your description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <Button symbol="Add-task" bg="bg-black text-white" />

      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{renderedTask}</ul>
      </div>
    </>
  );
}

export default ToDoApp;

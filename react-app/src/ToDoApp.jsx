import React from "react";
import ToDoHero from "./ToDoComponents/ToDoHero";
import Form from "./ToDoComponents/Form";
import ToDoList from "./ToDoComponents/ToDoList";
function ToDoApp(){
    const[todos, setTodos] = React.useState([
        {title: "Some task", id:self.crypto.randomUUID(), isCompleted:false},
        {title: "Some other task", id:self.crypto.randomUUID(), isCompleted:true},
        {title: "last task", id:self.crypto.randomUUID(), isCompleted:false}
    ])


    return(
        <div className=" text-center m-auto w-6/12 border-black bg-gray-400  flex-col  justify-center items-center h-2/4">
            <ToDoHero />
            <Form />
            <ToDoList todos={todos} />
        </div>
    )
}
export default ToDoApp;
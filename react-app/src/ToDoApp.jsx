import ToDoHero from "./ToDoComponents/ToDoHero";
import Form from "./ToDoComponents/Form";
import ToDoList from "./ToDoComponents/ToDoList";
function ToDoApp(){
    return(
        <div className=" text-center m-auto w-6/12 border-black bg-gray-400  flex-col  justify-center ">
            <ToDoHero />
            <Form />
            <ToDoList />
        </div>
    )
}
export default ToDoApp;
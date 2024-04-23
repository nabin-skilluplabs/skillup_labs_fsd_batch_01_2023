
/* eslint-disable no-unused-vars */

import Item from "./Item";
import ToDoApp from "../ToDoApp";

/* eslint-disable react/prop-types */
function ToDoList({ todos, setTodos}) {
    return (
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map ((item, index) =>
                    <Item key={index} item={item} setTodos={setTodos}/>)
                ) : (
                <p>Seems lonely in here, what are you upto</p>
            )
            }
        </ol>
    )
        }

export default ToDoList;
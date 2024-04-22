/* eslint-disable react/prop-types */

function ToDoHero({toDo_completed, totalToDo}){
    return (
        <div className=" w-1/2 border-black">
            <div>
            <h3>Task Done</h3>
               <p>Keep it up</p>
            </div>
            
            <div>
                {toDo_completed}/{totalToDo}
            </div>
        </div>
    )
}
export default ToDoHero
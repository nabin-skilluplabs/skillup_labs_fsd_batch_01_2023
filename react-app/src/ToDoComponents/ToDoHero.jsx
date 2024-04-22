/* eslint-disable react/prop-types */

function ToDoHero({toDo_completed, totalToDo}){
    return (
        <div className=" w-1/3 border-green-500 bg-black text-white flex flex-row gap-10 mx-auto my-0 h-32 items-center justify-center rounded-xl">
            <div>
            <h3 className="text-xl">Task Done</h3>
               <p>Keep it up</p>
            </div>
            
            <div className="w-20 h-20 rounded-full border-l-green-500 bg-green-500 flex justify-center items-center text-bl ">
                {toDo_completed}/{totalToDo}
            </div>
        </div>
    )
}
export default ToDoHero
/* eslint-disable react/prop-types */
function Items({item}){
    return(
        <li id="{item?.id}" className="todo_item border border-y w-1/2 flex flex-row  h-6 mx-auto my-0 mt-3 gap-6 justify-between">
            <button className=" w-24">
                <svg>
                <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
                </svg>
                <p>{item?.title}</p>
        </button>
        <div className="flex flex-row gap-5">
        <button >
          <span>edit</span>
        </button>
         <button>
            <span>delete</span>
         </button>
        </div>
        
        

        </li>
    )
}
export default Items
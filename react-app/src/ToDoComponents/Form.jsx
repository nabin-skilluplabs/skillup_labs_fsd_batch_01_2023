/* eslint-disable react/prop-types */
function Form({setTodos}){
    const handelSubmit = (event)=>{
        event.preventDefault();
        const value = event.target.todo.value;
        setTodos((prevTodos)=>[
            ...prevTodos,
            {title:value, id:self.crypto.randomUUID(), isCompleted:false}
        ]);

        
        event.target.reset();
        // To Reset the Form
    }
    return (
        <form className="form" onSubmit = {handelSubmit}>
            <label htmlFor="todo">
                <input type="text" name="todo" id="todo" placeholder="Write your next task" />
            </label>
           <button>
                <span className="visually hidden">
                    Submit
                </span>
                +
                <svg>
                 <path d="" />
                </svg>
           </button>
        </form>
    );
}
export default Form;
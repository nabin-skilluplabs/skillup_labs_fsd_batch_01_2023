function Form(){

        const handelSubmit= (event) =>{
            event.preventDefault();
            event.reset.target();
        };
        return(
        <form action="#">
            <label htmlFor="inputList">
                <input className=" border-blue-600 m-auto mr-4" type="text" name="inputList" id="inputList" placeholder="Write your next task" />
            </label>
            <button>
                +
            </button>

        </form>
    )
    
}
export default Form;
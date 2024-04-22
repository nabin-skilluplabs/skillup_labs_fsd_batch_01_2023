/* eslint-disable no-unused-vars */
function Form(){

        const handelSubmit= (event) =>{
            event.preventDefault();
            event.reset.target();
        };
        return(
        <form action="#" className=" border-black w-1/3 mx-auto my-0">
            <label htmlFor="inputList">
                <input className=" text-white p-1 mt-6 bg-blue-950 rounded-md border-blue-600 m-auto mr-4" type="text" name="inputList" id="inputList" placeholder="Write your next task" />
            </label>
            <button className=" bg-green-400 rounded-full w-8 h-8">
                +
            </button>


        </form>
    )
    
}
export default Form;
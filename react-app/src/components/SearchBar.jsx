
function SearchBar(){
    return(
        <div className=" p-2">
            <input className="block border-blue-500 w-25% p-2 mb-2 " placeholder="Search..." type="search"  />
            <label htmlFor="inStock"><input type="checkbox" name="checkbox" id="inStock" className=" mr-2" />Only show products in stock</label>
        </div>
    )
}
export default SearchBar;
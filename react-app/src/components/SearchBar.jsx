/* eslint-disable react/prop-types */

function SearchBar({filterStocked, searchProducts}){
    return(
        <div className=" p-2 ">
            <input onKeyUp={searchProducts} className="block border-blue-500 w-40% p-2 mb-2 " placeholder="Search..." type="search"  />
            <label htmlFor="inStock"><input onClick={filterStocked} type="checkbox" name="checkbox" id="inStock" className=" mr-2" />Only show products in stock</label>
        </div>
    )
}
export default SearchBar;
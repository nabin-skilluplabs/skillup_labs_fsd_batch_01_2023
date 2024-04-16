
function SearchBar({filterStocked, searchProduct}){
    return (
        <div>
            <input onKeyUp={searchProduct} className="block p-1 border-red-500" placeholder="Search..." type="search" />
            <label htmlFor="instock">
                <input onClick={filterStocked} type="checkbox" id="instock" />Only Show available product
            </label>
        </div>
    )
}

export default SearchBar;
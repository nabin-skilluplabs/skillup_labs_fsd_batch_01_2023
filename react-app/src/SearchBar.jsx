
function SearchBar({filterStocked, searchProduct}){
    return (
        <div>
            <input onKeyDown={searchProduct} className="block" placeholder="Search..." type="search" />
            <label htmlFor="instock">
                <input onClick={filterStocked} type="checkbox" id="instock" />Only Show available product
            </label>
        </div>
    )
}

export default SearchBar;
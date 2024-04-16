function SearchBar({filterStocked, searchProducts}) {
    return(
        <div>
            <input onKeyDown={searchProducts} className="block my-3 p-4 text-md w-full border-2 border-gray-600" placeholder="Search..." type="search" />
            <label htmlFor="inStock"><input onClick={filterStocked} type="checkbox" id="inStock" /> Only show products in stock</label>
        </div>
    );
}

export default SearchBar;
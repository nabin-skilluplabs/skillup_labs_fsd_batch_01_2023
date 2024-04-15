function SearchBar() {
    return(
        <div>
            <input className="block my-3 p-4 text-md w-full border-2 border-gray-600" placeholder="Search..." type="search" />
            <label htmlFor="inStock"><input type="checkbox" id="inStock" /> Only show products in stock</label>
        </div>
    );
}

export default SearchBar;
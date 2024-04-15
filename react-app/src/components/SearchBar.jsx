function SearchBar() {
    return(
        <div>
            <input className="block" placeholder="Search..." type="search" />
            <label htmlFor="inStock"><input type="checkbox" id="inStock" /> Only show products in stock</label>
        </div>
    );
}

export default SearchBar;
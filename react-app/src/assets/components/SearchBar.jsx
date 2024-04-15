function SearchBar() {
    return (
        <div className="border-2 border-green-500 rounded-md p-4">
            <input className="block border-2 border-red-500 rounded-md" placeholder="Search..." type="search" />
            <label>
                <input htmlFor="inStock" type="checkbox" id="inStock" />Only Show product available
            </label>
        </div>
    )
}
export default SearchBar;
function SearchBar({ filterStocked, searchProduct }) {
    return (
        <div className="p-4 bg-slate-300">
            <input onKeyDown={searchProduct} className="block border-2 p-1 border-red-500 rounded-md" placeholder="Search..." type="search" />
            <label className="mt-2 block">
                <input className="mr-2" onClick={filterStocked} htmlFor="inStock" type="checkbox" id="inStock" />Only Show product available
            </label>
        </div>
    )
}
export default SearchBar;
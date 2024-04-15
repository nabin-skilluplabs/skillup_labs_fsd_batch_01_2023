
function SearchBar(){
    return (
        <div>
            <input className="block border-2 border-slate-800" placeholder="Search..." type="search" />
            <label htmlFor="instock">
                <input  type="checkbox" id="instock" />Only Show available product
            </label>
        </div>
    )
}

export default SearchBar;
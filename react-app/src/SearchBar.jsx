
function SearchBar({filterStocked}){
    return (
        <div>
            <input className="block border-2 border-slate-800" placeholder="Search..." type="search" />
            <label htmlFor="instock">
                <input onClick={filterStocked} type="checkbox" id="instock" />Only Show available product
            </label>
        </div>
    )
}

export default SearchBar;
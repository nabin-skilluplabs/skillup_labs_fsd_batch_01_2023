function SearchBar({ filterStocked }) {
  return (
    <div>
      <input
        className="block my-3 p-4 w-full"
        placeholder="Search..."
        type="search"
      />
      <label htmlFor="inStock">
        <input onClick={filterStocked} type="checkbox" id="inStock" />
        Only Show products in stock
      </label>
    </div>
  );
}

export default SearchBar;

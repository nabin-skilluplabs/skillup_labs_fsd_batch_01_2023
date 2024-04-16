function SearchBar() {
  return (
    <div>
      <input className="block my-3 " placeholder="Search..." type="search" />
      <label htmlFor="inStock">
        <input type="checkbox" id="inStock" />
        Only Show products in stock
      </label>
    </div>
  );
}

export default SearchBar;

import SearchBar from "./SearchBar";

function FilterableProductTable({productData}) {
    return (
        <div className="w-96 mt-10 bg-gray-50 p-4 place-self-center">
            <SearchBar />
        </div>
    );
}

export default FilterableProductTable;
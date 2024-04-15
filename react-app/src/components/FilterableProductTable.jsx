import SearchBar from "./SearchBar";

function FilterableProductTable(productDate){
    return(
        <div  className="flex flex-row mt-4 justify-center border">
            <SearchBar />
        </div>
    );
}
export default FilterableProductTable;
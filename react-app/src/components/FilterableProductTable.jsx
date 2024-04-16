import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"

function FilterableProductTable({productData}){
    return(
        <div  className=" w-96 mt-10 place-self-center bg-gray-100  border">
            <SearchBar />
            <ProductTable productDate={productData} />
        </div>
    );
}
export default FilterableProductTable;
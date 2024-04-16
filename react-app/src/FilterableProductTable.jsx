import ProductCategoryRow from "./ProductCatergoryRow";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
function FiltarableProductTable({produtData}) {
    return (
        <div className="mt-10 w-96 place-self-center p-4 bg-slate-300">
            <SearchBar />
            <ProductTable productData={productData} />
            <ProductCategoryRow />
        </div>
    )

}

export default FiltarableProductTable;
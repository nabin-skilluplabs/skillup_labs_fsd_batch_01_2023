import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable({ productData }) {
  return (
    <div className="w-96 mt-10 bg-gray-100 p-4 place-self-center">
      <SearchBar />
      <ProductTable productData={productData} />
    </div>
  );
}

export default FilterableProductTable;

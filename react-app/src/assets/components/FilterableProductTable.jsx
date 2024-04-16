import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";
function FilterableProductTable({ productData }) {
    const [currentProducts, setCurrentProducts] = useState(productData);
    function filterStocked(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            const filteredProducts = productData.filter(product => product.stocked);
            setCurrentProducts(filteredProducts);
        }
        else {
            setCurrentProducts(productData);
        }
    }
    function searchProduct(event) {
        const query = event.target.value;
        const filteredProducts = currentProducts.filter(product => product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        setCurrentProducts(filteredProducts)
    }

    return (
        <div className="w-96 mt-4 place-self-center border-2 border-green-500 rounded-md">
            <SearchBar searchProduct={searchProduct} filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    )
}
export default FilterableProductTable;
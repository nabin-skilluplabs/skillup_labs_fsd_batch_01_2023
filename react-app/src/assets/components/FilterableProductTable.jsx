import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";
import { useState } from "react";
function FilterableProductTable({ productData }) {
    const [currentProducts, setCurrentProducts] = useState(productData);
    const [isStocked, setIsStocked] = useState(false);
    const [query, setQuery] = useState("")
    function filterStocked(event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            const filteredProducts = productData.filter(product => product.stocked);
            setCurrentProducts(filteredProducts);
            setIsStocked(true);
        }
        else {
            setCurrentProducts(productData);
            setIsStocked(false);
        }
    }
    function searchProduct(event) {
        const query = event.target.value;
        setQuery(query);
        let filteredProducts = productData.filter(product => product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        if (isStocked) {
            filteredProducts = filteredProducts.filter(product => product.stocked);
        }
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
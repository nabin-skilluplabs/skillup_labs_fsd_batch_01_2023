import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({productData}) {
    const [currentProducts, setCurrentProducts] = useState(productData);
    
    function filterStocked(event) {
        const isChecked = event.target.checked;
        if(isChecked) {
          const filteredProducts = productData.filter(product => product.stocked);
          setCurrentProducts(filteredProducts);
        }
        else {
            setCurrentProducts(productData);
        }
    }

    function searchProducts(event) {
        const query = event.target.value;

        console.log(query);
    }

    return (
        <div className="w-96 mt-10 bg-gray-50 p-4 place-self-center">
            <SearchBar searchProducts={searchProducts} filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    );
}

export default FilterableProductTable;
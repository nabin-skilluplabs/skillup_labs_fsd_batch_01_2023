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

    return (
        <div className="w-96 mt-10 bg-gray-50 p-4 place-self-center">
            <SearchBar filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    );
}

export default FilterableProductTable;
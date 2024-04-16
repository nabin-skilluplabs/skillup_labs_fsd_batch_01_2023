
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FiltarableProductTable({productData}) {
    
    const [currentProducts, setCurrentProducts] = useState(productData);

    function filterStocked(event) {
        const isChecked = event.target.checked;
        if(isChecked) {
            const filteredProducts = productData.filter(product => product.stocked);
            setCurrentProducts(filteredProducts);
        }
        else{
            setCurrentProducts(productData);
        }

    }

    return (
        <div className="mt-10 w-96 place-self-center p-4 bg-slate-300">
            <SearchBar filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
            
        </div>
    )

}

export default FiltarableProductTable;
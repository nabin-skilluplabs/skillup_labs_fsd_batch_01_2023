
import { useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FiltarableProductTable({productData}) {
    
    const [currentProducts, setCurrentProducts] = useState(productData);
    const [isStocked, setIsStoked] = useState(false);
    const [query, setQuery] = useState("");

    function filterStocked(event) {
        const isChecked = event.target.checked;
        if(isChecked) {
            const filteredProducts = productData.filter(product => product.stocked);
            setCurrentProducts(filteredProducts);
            setIsStoked(true);
        }
        else{
            setCurrentProducts(productData);
            setIsStoked(false);
        }

    }

    function filterProducts(){
        let filteredProducts = productData.filter(product => product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        if (isStocked) {
            filteredProducts = filteredProducts.filter(product => product.stocked)
        }
        setCurrentProducts(filteredProducts);
    }

    function searchProduct(event) {
        const query = event.target.value;
        setQuery(query);
        filterProducts();
        
    }



    return (
        <div className="mt-10 w-96 place-self-center p-4 bg-slate-300">
            <SearchBar searchProduct={searchProduct} filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
            
        </div>
    )

}

export default FiltarableProductTable;
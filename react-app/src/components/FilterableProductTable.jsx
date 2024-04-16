import { useEffect, useState } from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

function FilterableProductTable({productData}) {
    const [currentProducts, setCurrentProducts] = useState(productData);
    const [isStocked, setIsStocked] = useState(false);
    const [query, setQuery] = useState("");

    function filterStocked(event) {
        const isChecked = event.target.checked;
        if(isChecked) {
            setIsStocked(true);
        }
        else {
            setIsStocked(false)
        }
    }

    function filterProducts() {
        let filteredProducts = productData.filter(product =>  product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0);
        if(isStocked) {
            filteredProducts = filteredProducts.filter(product => product.stocked);
        }
        setCurrentProducts(filteredProducts);
    }

    function searchProducts(event) {
        const query = event.target.value;
        setQuery(query);
    }

    useEffect(() => {
        filterProducts();
    }, [query, isStocked])

    return (
        <div className="w-96 mt-10 bg-gray-50 p-4 place-self-center">
            <SearchBar searchProducts={searchProducts} filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    );
}

export default FilterableProductTable;
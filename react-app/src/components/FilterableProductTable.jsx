/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"
import { useState } from "react";

function FilterableProductTable({productData}){
    const [currentProducts, setCurrentProducts] = useState(productData)
    function filterStocked(event){
        const isChecked = event.target.checked;
        if(isChecked){
            const filterdProduct = productData.filter(product => product.stocked);
            setCurrentProducts(filterdProduct);
        }else{
            setCurrentProducts(productData);
        }
      

    }

    function searchProducts(event){
        const query = event.target.value;
        // eslint-disable-next-line no-console
        console.log(event)
    }
    return(
        <div  className=" w-96 mt-10 place-self-center bg-gray-100  border">
            <SearchBar searchProducts = {searchProducts}filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    );
}
export default FilterableProductTable;
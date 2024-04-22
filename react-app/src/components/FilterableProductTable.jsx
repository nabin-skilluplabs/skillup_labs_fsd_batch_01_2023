/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable"
import { useState } from "react";

function FilterableProductTable({productData}){
    const [currentProducts, setCurrentProducts] = useState(productData)
    const [isStocked, setIsStocked] = useState(false);
    const[query, setQuery] = useState(true)
    function filterStocked(event){
        const isChecked = event.target.checked;
        if(isChecked){
            const filterdProduct = productData.filter(product => product.stocked);
            setCurrentProducts(filterdProduct);
            setIsStocked(true)
        }else{
            setCurrentProducts(productData);
            setIsStocked(false)
        }
      

    }

    // function filterProduct(){
    //     let filterdProduct = productData.filter(product =>   product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
    //    if(){
    //    filterdProduct =  filterdProduct.filter(product => product.stocked)
    //    }
    //     setCurrentProducts(filterdProduct)
    // }

    function searchProducts(event){
        const query = event.target.value;
        setQuery(query)
       let filterdProduct = productData.filter(product =>   product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
       if(isStocked){
       filterdProduct =  filterdProduct.filter(product => product.stocked)
       }
        setCurrentProducts(filterdProduct)
    }
    return(
        <div  className=" w-96 mt-10 place-self-center bg-gray-100  border">
            <SearchBar searchProducts = {searchProducts}filterStocked={filterStocked} />
            <ProductTable productData={currentProducts} />
        </div>
    );
}
export default FilterableProductTable;
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from "react";

import ProductCategorieRow from "./ProductCategorieRow"
import ProductRow from "./ProductRow";



function ProductTable({productData}){
    const categories = [];
    productData.forEach(product => {
        if(categories.indexOf(product.category) === -1){
            categories.push(product.category);
        }
    })
    // eslint-disable-next-line no-console
    console.log({categories});

    return(
        <table className=" w-full my-3">
            <tr>
                <th className="p-1">Name</th>
                <th className=" text-left">Price</th>
            </tr>

            {
                categories.map((category, index) => (
                    <React.Fragment key={`cat_${index}`} category={category}>
                        <ProductCategorieRow category={category} />
                    {
                        productData.filter((product) => product.category === category).map((product, pIndex) => (
                            <ProductRow key={`product_${pIndex}`} name={product.name} price={product.price} stock={product.stocked} />
                        ))
                    }
                    </React.Fragment>
                ))
            }
            

        </table>
    )
}
export default ProductTable;
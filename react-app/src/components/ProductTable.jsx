/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from "react";

import ProductCategorieRow from "./ProductCategorieRow"
import ProductRow from "./ProductRow";



function ProductTable({productData}){
    const categories = [];
    productData.forEach(product => {
        if(categories.indexOf(product.category) === -1){
            categories.push(product.categories);
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
                    <React.Fragment key={`cat_${index}`}category={category}>
                        <ProductCategorieRow category={category} />
                    {
                        productData.filter(product => product.category === category).map(product => (
                            <productRow key={`product_${pIndex}`} name={product.name} price={product.price} stock={product.stock} />
                        ))
                    }
                    </React.Fragment>
                ))
            }
            <ProductCategorieRow  category="Fruits"/>
            <ProductRow name="Apple" price="$1" stock ={true} />
            <ProductRow name="Dragonfruit" price="$1" stock ={true} />
            <ProductRow name="Passionfruit" price="$2" stock={false} />
            <ProductCategorieRow  category="Vegetable"/>
            <ProductRow name="Spinach" price="$2" stock={true}/>
            <ProductRow name="Pumpkin" price="$4" stock={false} />
            <ProductRow name="Peas" price="$1" stock={true} />

        </table>
    )
}
export default ProductTable;
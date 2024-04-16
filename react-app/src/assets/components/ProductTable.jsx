import ProductCatogeryRow from "./ProductCatogeryRow";
import ProductRow from "./ProductRow";
import React from "react";

function ProductTable({ productData }) {
    const categories = [];
    productData.forEach(product => {
        if (categories.indexOf(product.category) === -1) {
            categories.push(product.category);
        }
    });

    return (
        <div className="py-4 bg-gray-300">
            <table className="w-full">
                <tr>
                    <th className="p-1">Name</th>
                    <th className="text-left p1">Price</th>
                </tr>
                {categories.map((category, index) => (
                    <React.Fragment key={`cat_${index}`}>
                        <ProductCatogeryRow category={category} />
                        {productData.filter(product => product.category === category).map(
                            (product, pIndex) => (
                                <ProductRow
                                    key={`product_${pIndex}`}
                                    name={product.name}
                                    price={product.price}
                                    stock={product.stocked}
                                />
                            )
                        )}
                    </React.Fragment>
                ))}
            </table>
        </div>
    );
}

export default ProductTable;

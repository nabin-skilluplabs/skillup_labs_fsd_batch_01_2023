/* eslint-disable react/prop-types */
import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ productData }) {
  const categories = [];
  productData.forEach((product) => {
    if (categories.indexOf(product.category) == -1) {
      categories.push(product.category);
    }
  });
  return (
    <table className="my-3 w-full">
      <tr>
        <th className="p-1">Name</th>
        <th className="text-left p-1">Price</th>
      </tr>
      {categories.map((category, index) => (
        <React.Fragment key={`cat_${index}`}>
          <ProductCategoryRow category={category} />
          {productData
            .filter((product) => product.category === category)
            .map((product, pIndex) => (
              <ProductRow
                key={`product_${pIndex}`}
                name={product.name}
                price={product.price}
                stock={product.stocked}
              />
            ))}
        </React.Fragment>
      ))}
    </table>
  );
}

export default ProductTable;

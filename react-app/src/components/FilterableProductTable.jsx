/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

function FilterableProductTable({ productData }) {
  const [currentProducts, setCurrentProducts] = useState(productData);
  function filterStocked(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const filteredProcucts = productData.filter((product) => product.stocked);
      setCurrentProducts(filteredProcucts);
    } else {
      setCurrentProducts(productData);
    }
  }
  return (
    <div className="w-96 mt-10 bg-gray-100 p-4 place-self-center">
      <SearchBar filterStocked={filterStocked} />
      <ProductTable productData={currentProducts} />
    </div>
  );
}

export default FilterableProductTable;

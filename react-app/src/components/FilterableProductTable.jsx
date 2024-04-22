/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

function FilterableProductTable({ productData }) {
  const [currentProducts, setCurrentProducts] = useState(productData);
  const [isStocked, setIsStocked] = useState(false);
  const [query, setQuery] = useState();

  function filterStocked(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
      const filteredProcucts = productData.filter((product) => product.stocked);
      setCurrentProducts(filteredProcucts);
      setIsStocked(true);
    } else {
      setCurrentProducts(productData);
      setIsStocked(false);
    }
  }
  function searchProducts(event) {
    const query = event.target.value;
    let filteredProcucts = productData.filter(
      (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) >= 0
    );
    if (isStocked) {
      filteredProcucts = filteredProcucts.filter((product) => product.stocked);
    }
    setCurrentProducts(filteredProcucts);
  }
  return (
    <div className="w-96 mt-10 bg-gray-100 p-4 place-self-center">
      <SearchBar
        searchProducts={searchProducts}
        filterStocked={filterStocked}
      />
      <ProductTable productData={currentProducts} />
    </div>
  );
}

export default FilterableProductTable;

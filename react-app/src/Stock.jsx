import Header from "./components/Header";
import FilterableProductTable from "./components/FilterableProductTable";
import ProductTable from "./components/ProductTable";

const productData = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function Stock() {
  return (
    <div>
      <Header appName="Stock Management" />
      <FilterableProductTable productData={productData} />
      <ProductTable />
    </div>
  );
}
export default Stock;

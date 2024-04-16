import Header from "./components/Header";
import FilterableProductTable from "./components/FilterableProductTable";

const productData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Groceries", price: "$5", stocked: true, name: "Rice" },
    { category: "Groceries", price: "$16", stocked: false, name: "Vegetable Oil" }
  ];

function Stock() {
    return (
        <div className="flex flex-col">
            <Header appName="Stock Management" />
            <FilterableProductTable productData={productData} />
        </div>
    )
}

export default Stock;
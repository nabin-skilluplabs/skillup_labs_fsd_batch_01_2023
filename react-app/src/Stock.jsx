import Header from "./Header";
import FilterableProductTable from "./assets/components/FilterableProductTable";

const productData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Drinks", price: "$1.5", stocked: true, name: "Milk" },
    { category: "Drinks", price: "$1.8", stocked: false, name: "Coke" },
    { category: "Bread", price: "$0.5", stocked: false, name: "White Bread" },
]

function Stock() {
    return (
        <div className="flex flex-col">
            <Header appName={"Stock Management"} />
            <FilterableProductTable productData={productData} />
        </div>
    )
}

export default Stock;
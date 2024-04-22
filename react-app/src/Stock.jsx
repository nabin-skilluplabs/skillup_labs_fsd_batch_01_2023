import Header from "./components/Header";
import FilterableProductTable from "./components/FilterableProductTable";



const productData = [
    { category: "Groceries", price: "$18", stocked: true, name: "Rice" },
    { category: "Groceries", price: "$11", stocked: true, name: "Vegetalble oil" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$1", stocked: true, name: "apple" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]



function Stock(){
    return(
        <div className="flex flex-col">
            <Header appName="Stock Management" />
            <FilterableProductTable productData = {productData} />
          

        </div>
    )
}
export default Stock;
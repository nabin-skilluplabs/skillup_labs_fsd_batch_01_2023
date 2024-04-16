/* eslint-disable react/prop-types */
import ProductCategorieRow from "./ProductCategorieRow"
import ProductRow from "./ProductRow";


function ProductTable({productData}){
    const categories = [];
    productData.forEach(product => {
        if(categories.indexOf(product.category) === -1){
            categories.push(product.categories);
        }
    })
    console.log({categories});

    return(
        <table className=" w-full my-3">
            <tr>
                <th className="p-1">Name</th>
                <th className=" text-left">Price</th>
            </tr>
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
import ProductCategoryRow from "./ProductCatergoryRow";
import ProductRow from "./ProductRow";

function ProductTable({productData}) {
    const categories = [];
    productData.forEach(product => {
        if(categories.indexOf(product.category) === -1) {
            categories.push(product.category);
        }
    });

    return(
        <table className="w-full my-3">
            <tr>
                <th className="p-1">Name</th>
                <th className="text-left p-1">Price</th>
            </tr>
            <ProductCategoryRow category="fruits" />
            <ProductRow name="Apple" price="$1" stock={true} />
            <ProductRow name="Dragonfruit" price="$1" stock={true} />
            <ProductRow name="Passionfruit" price="$1" stock={false} />
            <ProductCategoryRow category="Vegetables" />
            <ProductRow name="Spinach" price="$2" stock={true} />
            <ProductRow name="pumkin" price="$2" stock={true} />
            <ProductRow name="peas" price="$3" stock={false} />
            <ProductRow />
        </table>
    );
}

export default ProductTable;
/* eslint-disable react/prop-types */
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ productData }) {
  const categories = [];
  productData.forEach((product) => {
    if (categories.indexOf(product.category) == -1) {
      categories.push(product.category);
    }
  });
  console.log({ categories });
  return (
    <table className="my-3 w-full">
      <tr>
        <th className="p-1">Name</th>
        <th className="text-left p-1">Price</th>
      </tr>
      <ProductCategoryRow category="Fruits" />
      <ProductRow name="Apple" price="$1" stock={true} />
      <ProductRow name="Dragonfruit" price="$1" stock={true} />
      <ProductRow name="Passionfruit" price="$2" stock={false} />
      <ProductCategoryRow category="Vegetables" />
      <ProductRow name="Spinach" price="$2" stock={true} />
      <ProductRow name="Pumpkin" price="$4" stock={false} />
      <ProductRow name="Peas" price="$1" stock={true} />
    </table>
  );
}

export default ProductTable;

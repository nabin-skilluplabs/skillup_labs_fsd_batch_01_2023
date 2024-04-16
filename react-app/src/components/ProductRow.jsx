/* eslint-disable react/prop-types */
function ProductRow({ name, price, stock }) {
  return (
    <tr className={!stock ? "text-red-500" : ""}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;

function ProductRow({name, price, stock}) {
    return (
        <tr className={!stock ? "text-red-500" : ""}>
            <td className="p-1">{name}</td>
            <td className="p-1">{price}</td>
        </tr>
    );
}

export default ProductRow;
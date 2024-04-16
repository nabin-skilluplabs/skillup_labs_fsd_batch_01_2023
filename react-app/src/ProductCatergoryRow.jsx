
function ProductCategoryRow({category}) {
    return(
        <tr>
            <th colSpan={2} className="p-1">{category}</th>
        </tr>
    );
}

export default ProductCategoryRow;
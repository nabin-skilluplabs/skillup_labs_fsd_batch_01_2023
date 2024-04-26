// eslint-disable-next-line react/prop-types
function Button({symbol, action, bg}) {
    return(
        <button onClick={action} className={`${bg} px-2 py-4 rounded text-2xl`}>{symbol}</button>
    )
}

export default Button;
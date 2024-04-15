/* eslint-disable react/prop-types */
function Button({symbol, action, bg}) {
    return (
        <button className={`${bg} p-5 rounded-2xl`} onClick={action}>{symbol}</button>
    );
}

export default Button;
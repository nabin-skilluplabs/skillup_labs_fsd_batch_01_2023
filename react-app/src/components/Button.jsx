/* eslint-disable react/prop-types */
function Button({symbol, action, bg}){
    return (
        <button onClick={action} className= {`bg-${bg}-600 p-4 text-2xl`} >{symbol}</button>
    );
}
export default Button;
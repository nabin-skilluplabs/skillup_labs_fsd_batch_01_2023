function Button({ symbol, action, bg }) {
    return (
        <button onClick={action} className={`${bg} p-8 rounded text-4xl`}>{symbol}</button>
    );
}

export default Button;
import { useState } from "react";
import Header from "./Header";

function App() {
  const appName = "React Counter";
  const [count, setCount] = useState(1);

  const increment = () => {
setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <div>
<Header appName={appName}/>
      <h2 className="text-4xl font-bold text-center mt-4">{count}</h2>
      <div className="font-bold flex justify-center gap-4 text-5xl mt-5">
        <button className="bg-red-600 p-5 rounded-2xl" onClick={increment}>+</button>
        <button className="bg-red-600 p-5 rounded-2xl" onClick={decrement}>-</button>
      </div>
    </div>
  )
}

export default App

import { useState } from "react";
import Header from "./Header";

function App() {
  const appName = "React Counter";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="font-roboto w-6/12">
      <Header appName={appName} />
      <h2 className="text-4xl font-bold text-center m-4">{count}</h2>
      <div className="flex justify-center space-x-5">
        <button onClick={increment} className="bg-red-600 p-8 rounded text-4xl">+</button>
        <button onClick={decrement} className="bg-red-600 p-8 rounded text-4xl">-</button>
      </div>
    </div>
  )
}

export default App

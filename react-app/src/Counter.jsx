import { useState } from "react";
import Header from "./components/Header";
import {Button} from "./components/Button";

function App() {
  const appName = "React Counter";
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count >= 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="font-roboto w-6/12">
      <Header appName={appName} />
      <h2 className="text-4xl font-bold text-center m-4">{count}</h2>
      <div className="flex justify-center space-x-5">
        <Button symbol="+ADD" action={increment} bg="bg-red-600" />
        <Button symbol="-SUB" action={decrement} bg="bg-orange-600" />
      </div>
    </div>
  )
}

export default App

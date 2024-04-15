import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

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
   <div className="font-serif">
      <Header appName={appName} />
      <h2 className="text-4xl font-bold text-center m-4">{count}</h2>
      <div className="flex justify-center space-x-5">
        <Button symbol="+" action={increment} bg="bg-orange-600" />
        <Button symbol="-" action={decrement} bg="bg-red-600" />
  
      </div>
   </div>
  )
}

export default App 



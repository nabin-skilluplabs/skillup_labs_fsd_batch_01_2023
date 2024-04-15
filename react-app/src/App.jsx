import { useState } from "react";
import Header from "./Header";
import Button from "./components/Button";

function App() {
  const appName = "React Counter";
  const [count, setCount] = useState(1);

  const increment = () => {
setCount(count + 1);
  }

  const decrement = () => {
    if(count >=1){
    setCount(count - 1);
    }
  }
  return (
    <div>
<Header appName={appName}/>
      <h2 className="text-4xl font-bold text-center mt-4">{count}</h2>
      <div className="font-bold flex justify-center gap-4 text-5xl mt-5">
        <Button symbol="+" action={increment} bg= "bg-red-600"/>
        <Button symbol="-" action={decrement} bg= "bg-red-600"/>
      </div>
    </div>
  )
}

export default App

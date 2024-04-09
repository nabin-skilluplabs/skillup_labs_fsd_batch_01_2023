
import { useState } from "react";
import Header from "./Header";
function App() {
    const appName = "React-Counter";
    const [count, setCount] = useState(0);

    const increment = () =>{
      setCount(count+1)
    }
    const decreament = () =>{
      setCount(count-1);
    }
  return (

    <div className="font-Roboto w-6/12">
      <Header appName = {appName}/>
      <h2 className=" text-4xl font-bold text-center margin-4">{count}</h2>
      <div className="flex justify-center space-x-1">
        <button onClick={increment} className=" bg-red-600 p-4 text-2xl ">+</button>
        <button onClick={decreament} className=" bg-red-600 p-4 text-2xl">-</button>
      </div>
    </div>
  )
  }
export default App

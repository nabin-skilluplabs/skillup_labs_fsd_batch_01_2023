
import { useState } from "react";
import Header from "./components/Header";
import Button  from "./components/Button";

function App() {
    const appName = "React-Counter";
    const [count, setCount] = useState(0);

    const increment = () =>{
      setCount(count+1)
      
    }
    const decreament = () =>{
      if(count >= 1) setCount(count-1);
      
    }
  return (

    <div className="font-Roboto w-6/12">
      <Header appName = {appName}/>
      <h2 className=" text-4xl font-bold text-center margin-4">{count}</h2>
      <div className="flex justify-center space-x-1">
          <Button  symbol="+" action={increment} bg="bg-red-600"/>
          <Button symbol="-" action={decreament} bg="bg-blue-500"/>
      </div>
    </div>
  )
  }

  
  
export default App

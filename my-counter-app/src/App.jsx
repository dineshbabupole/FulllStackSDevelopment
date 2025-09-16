import { useState } from 'react'
import './App.css'





export  function calculator(){
   
}
function App() {
  const [count, setCount] = useState(0);

  

  return (
    <div  className={count==0?"black":"white"}>
    <h2>Counter:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>decrement</button>
    <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}
export default App

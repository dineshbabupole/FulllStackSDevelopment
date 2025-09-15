import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  className='App'>
      <h2>Counter:{count}</h2>
  <button onClick={()=>setCount(count+1)}>Increment</button>
   <button onClick={()=>{setCount(count-1)}}>decrement</button>
   <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default App

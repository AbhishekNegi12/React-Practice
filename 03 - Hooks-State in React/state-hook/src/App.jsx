import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//hooks in general are functions
function App() {
  // useState() is a hook
  const [count, setCount] = useState(0)
  //the main use of state is that we have a function setcount and it update 
  // let a = 5;

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, multiply, incrementByAmount } from './redux/counter/counterSlice'


function App() {
  // const [count, setCount] = useState(0)

  const count  = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      {/* <Navbar count={count}/> */}
      <Navbar />
      <div>
        <button onClick={()=> dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply(4))}>*</button>
        {/* <button onClick={()=>dispatch(incrementByAmount(5))}>+</button> */}
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  //make a new state which can be modified using setValue and its default value is 0
  const [value, setValue] = useState(0)

  return (
    <>
      <div className='App'>
        <Navbar logoText='Hi Abhishek'/>
        <div className="value">{ value}</div>
      <button onClick={()=>{
        setValue(value +1)
      }}>Click Me</button>
      <Footer/>
      </div>
      </>
  )
}

export default App

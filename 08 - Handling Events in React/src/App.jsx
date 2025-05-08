import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Abhishek")
  const [form, setform] = useState({email: "",phone: ""})

  const handleClick = ()=>{
    alert("Hey I am clicked");
  }

  const handleMouseOver = ()=>{
    alert("Hey I am mouse Over")
  }

  // const handleChange = (e)=>{
  //   setname(e.target.value)
  // }
  const handleChange = (e)=>{
    // setname(e.target.value)

    // setform(e.target.name)

    //Amazing Concept of how setForm is asynchronous an dit takes values
    setform({...form, [e.target.name]:e.target.value})
    console.log(form)

    // setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>

      <div className="redclass" onMouseOver={handleMouseOver}>
        I am a red div
      </div>

      <input type="text" name='email' value={form.email} onChange={handleChange}/>
      <input type="text"name='phone' value={form.phone} onChange={handleChange}/>

      {/* if form declared as an empty object */}
      {/* <input type="text" name='email' value={form?.email} onChange={handleChange}/>
      <input type="text"name='phone' value={form?.phone} onChange={handleChange}/> */}

      {/* Another Method */}
      {/* <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text"name='phone' value={form.phone?form.email:""} onChange={handleChange}/> */}

    </>
  )
}

export default App

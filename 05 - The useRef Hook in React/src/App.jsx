import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//sometime we want to create a variable which on the the time of re-rendering persists its value

function App() {
  const [count, setCount] = useState(0)
  //we dont wan tto re-render when we want to change the state

  // let a = 0;
  const a = useRef(0);
  //useRef solves the problem what we were getting in case of let
  //what useRef is doing it is not changing value of a across reference                                                                       //component dont re-render when we change useRef    

  // 1 . First use case of UseRef
  // useEffect(() => {
  //   // a = a + 1;
  //   a.current = a.current + 1;
  //   console.log(`Re-rendering and the value of a is ${a.current}...`)
  // });

  // 2 . Second use case of UseRef
  const btnref = useRef();
  useEffect(() => {
    console.log(`First Rendering`);
    btnref.current.style.backgroundColor = "red";
  },[]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref = {btnref}onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { useState, useEffect, Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const[showbtn, setshowbtn] = useState(true);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, settodos] = useState([
    {
      title: "Hey 1",
      desc: "I am a todo 1",
    },
    {
      title: "Hey 2",
      desc: "I am a todo 2",
    },
    {
      title: "Hey 3",
      desc: "I am a todo 3",
    },
  ]);

  // cretaing a small Component no need to make another folder then use
  // const Todo = ()=>{return(<>
  //   <div className='todo'>I am Todo</div>
  // </>)}

  // const Todo = ({todo})=>{
  //   return(<>
  //   <div className="m-4 border-1">
  //     <div className='todo'>{todo.title}</div>
  //     <div className="todo">{todo.desc}</div>
  //   </div>

  // </>)}

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
      {/* use of ternary operator and conditional rendering */}

      {/* 1. */}
      {showbtn ? (
        <button>showbtn is true</button>
      ) : (
        <button>showbtn is false</button>
      )}

      {/* if show btn is true it will print that otherwise nothing will be printed */}

      {/* 2. */}
      {/* {showbtn && <button>I will be shown when showbtn is true</button>} */}

      {/* created a small component w/o making a componenet folder */}
      {/* <Todo/> */}

      {/* In react when we want to render a list */}
      {/* {todos.map(todo=>{
        return <Todo key = {todo.title} todo ={todo} />
      })} */}
      {todos.map((todo) => {
        return (
          <div key = {todo.title} className="m-4 border-1">
            <div className="todo">{todo.title}</div>
            <div className="todo">{todo.desc}</div>
          </div>
        );
      })}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>Toggle showbtn</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'
//using this it is recommended as this is the new and most used method to use react-router-dom 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <><Navbar/> <Home/></>    
    },
    {
      path: "/login",
      element: <><Navbar/> <Login/></>
    },
    {
      path: "/about",
      element: <><Navbar/> <About/></>
    },
    {
      path: "/user/:username",
      element: <><Navbar/> <User/></>
    },
  ])

  return (
    <>
      Main aim to use React Router is to avoid the things that we face while using anchor tags which is it reloads the whole page
      <RouterProvider router={router}/>    
    </>
  )
}

export default App

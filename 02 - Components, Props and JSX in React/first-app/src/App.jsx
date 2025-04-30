import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <main>
        This is my site main content
      </main> */}
      <div className="cards">
        <Card title="card 1" description="card 1 desc"/>
        <Card title="card 2" description="card 2 desc"/>
        <Card title="card 3" description="card 3 desc"/>
        <Card title="card 4" description="card 4 desc"/>        
      </div>
      <Footer/>
    </>
  )
}

export default App

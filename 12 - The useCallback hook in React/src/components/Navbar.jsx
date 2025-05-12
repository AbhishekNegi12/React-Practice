import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is Render!")
  return (
    <div>I am a {adjective} Navbar
        <button onClick={()=>{getAdjective}}>Change Me</button>
    </div>
  )
}

export default memo(Navbar)
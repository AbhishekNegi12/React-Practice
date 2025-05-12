import React from 'react'

import Button from './Button'

// Now as we have passed count in Navbar using Prop Drilling 
// now we have to accept in Navbar then send it to button in order to get used by Component1

//props is an object

const Navbar = ({count}) => {
  return (
    <>
    <div>I am Navbar</div>
    <Button count={count} />
    {/* <Button count = {props.count}/> */}
    </>
  )
}

export default Navbar
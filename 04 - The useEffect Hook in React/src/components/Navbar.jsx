import React,{useEffect} from 'react'

const Navbar = ({color}) => {

     // Case 1 : Run on every Render
  //without anyt second parameter
  useEffect(() => {
    alert("I will run on every Render")
  });

  // Case 2 : Run only on first Render
  useEffect(() => {
    alert("Hey Welcome to my page. This is the first render")
  }, []);

  // Case 3 : Run on when certain value changed
  useEffect(() => {
    alert("Hey I am running because color was Changed")
  }, [color]);    

  //Eample of cleanup function
  useEffect(() => {
    alert("Hey Welcome to my page. This is the first render of App.jsx")

    //return function is an optional thing and it works as an cleanup thing
    //whenever this component will unmount.
    //this is used inconditional rendering
    return () => {
      alert("Component was unmounted.")
    }
  }, []);  

  return (
    <div>
      I am a navbar of {color} color hehe.....!!
    </div>
  )
}

export default Navbar

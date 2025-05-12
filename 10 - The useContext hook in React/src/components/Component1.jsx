import React from 'react'

import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  // const counter = useContext(counterContext)
  const value = useContext(counterContext)
  return (

    // it displays the counter value
    // <div>{counter}</div>
    <div>{value.count}</div>
    // <div>I am Component 1</div>
  )
}

export default Component1
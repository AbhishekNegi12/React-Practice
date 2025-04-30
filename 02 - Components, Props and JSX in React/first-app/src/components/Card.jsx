import React from 'react'
import "./Card.css"
import pic from '../assets/pic.jpg';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={pic} alt="" width={330} style={{border:"2px solid black"}}/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card

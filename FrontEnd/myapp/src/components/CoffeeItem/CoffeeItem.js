import React, { useState } from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import "./CoffeeItem.css"
const CoffeeItem = (props) => {
    const {cost,imageUrl,name,origin,type} = props.coffee
    const[liked,setLiked] = useState(false)

    const changecolorOfLike = () =>{
        setLiked(!liked)
    }

  return (
    <div className='coffeItemcon'>
        <div className='card-coffee'>
        <h3 className='coffeename'>{name}</h3>
        <img src={imageUrl} alt={name} className='imagecoffee'/>
        <div className='d-flex'>
          <p className='coffeepara mt-2'><FaDollarSign className='rupee'/> {cost}</p>
          <LuHeartHandshake className={liked ? "liked-coffee" : "position-Of-like"} onClick={changecolorOfLike} id='heart'/>
        </div>
        <p className='coffeepara'> Origin : {origin}</p>
        <p className='coffeepara'>Type : {type}</p>
        <button className='btn btn-danger mt-2 text-center'>Order Now</button>
        </div>
        
    </div>
  )
}

export default CoffeeItem
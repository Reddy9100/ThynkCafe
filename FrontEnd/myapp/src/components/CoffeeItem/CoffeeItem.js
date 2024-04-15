import React, { useState } from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";
import "./CoffeeItem.css"
import Cart from '../Cart/Cart';
const CoffeeItem = (props) => {
    const {cost,imageUrl,name,origin,type} = props.coffee
    const[liked,setLiked] = useState(false)
    const[Order,setOrder] = useState(false)
    const[cart,setCart] = useState([])

    const changecolorOfLike = () =>{
        setLiked(!liked)
    }

    const OrderStatus = () =>{
      setOrder(true)
      setTimeout(() => {
        setOrder(false)
      },7000);

      setCart(prevcart=> [...prevcart,props.coffee])
    }

  return (
    <>
    <div className='coffeItemcon'>
        <div className='card-coffee'>
        <h3 className='coffeename'>{name}</h3>
        {Order ? <img src='https://i.pinimg.com/originals/e7/d7/d2/e7d7d2e122fd63d9990278806f8084d7.gif' className='order-image' alt=''/>:<img src={imageUrl} alt={name} className='imagecoffee'/>}
        <div className='d-flex'>
          <p className='coffeepara mt-2'><FaDollarSign className='rupee'/> {cost}</p>
          <LuHeartHandshake className={liked ? "liked-coffee" : "position-Of-like"} onClick={changecolorOfLike} id='heart'/>
        </div>
        <p className='coffeepara'> Origin : {origin}</p>
        <p className='coffeepara'>Type : {type}</p>
        {Order ?<button className='btn btn-danger mt-2 text-center' onClick={OrderStatus}>Thanks</button> : <button className='btn btn-danger mt-2 text-center' onClick={OrderStatus}>Order Now</button>}
        </div>
    </div>
    
     <Cart cartItems = {cart} />
    
   </>
  )
}

export default CoffeeItem
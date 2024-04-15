import React from 'react'
import "./NotfFound.css"
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const Navigate = useNavigate()
  const tohome = () => {
    Navigate("/")
  }

  return (
    <>
        <div className='notfound-container'>
          <h1 className='text-center'>404</h1>
            <img src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' alt='notfoundimage' className=''/>
            <button className='btn-not mt-5' onClick={tohome} >Home</button>
        </div>
        
        </>
  )
}

export default NotFound
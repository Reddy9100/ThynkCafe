import React from 'react'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import { BsCupHotFill } from "react-icons/bs";
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Home = () => {
    const navigate = useNavigate()
    const jwtToken = Cookies.get("jwt_token")
    useEffect(() => {

        if (jwtToken === undefined) {
            console.log('Redirecting to /login');
            navigate('/login',{replace:true});
        }
    }, [jwtToken, navigate]);
  return (
    <>
    <Navbar/>
    <div className='home-con'>
        <div className='inner-home'>
            <div>
            <h2 className='head-home'>
                Explore The Incredible <br className='mt-4'/>Taste Of <span className='span-home'>Coffee <BsCupHotFill /></span><br className='mt-4'/> With Us 
                <br/>
                <br/>
                <Link to = "/coffees"><button className='btn btn-danger ourcollection'>☕ Our Collection ☕</button></Link>
            </h2>
            </div>
            <div>
       <div className='carousel-home'>    
    <Carousel>
      <Carousel.Item>
       <img src='https://c4.wallpaperflare.com/wallpaper/876/132/1002/coffee-cup-coffee-beans-aroma-wallpaper-preview.jpg' alt='' className='coffee-home'/>
      </Carousel.Item>
      <Carousel.Item>
       <img src='https://img.freepik.com/premium-photo/hot-coffee-morning-wooden-table_838382-54.jpg' alt='' className='coffee-home'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/premium-photo/cup-coffee-with-latte-art-rim_865967-7816.jpg' alt='' className='coffee-home'/>
      </Carousel.Item>
    </Carousel>
    </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
    )
}


export default Home
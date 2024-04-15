import React, {  useEffect, useState } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ReactPlayer from "react-player"
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const About = () => {

    const navigate = useNavigate()
    const jwtToken = Cookies.get("jwt_token")
    useEffect(() => {

        if (jwtToken === undefined) {
            console.log('Redirecting to /login');
            navigate('/login',{replace:true});
        }
    }, [jwtToken, navigate]);

  const [subStatus, setSubStatus] = useState(false);

 const subscribed = () =>{
    const emailele = document.getElementById("mailinput")
    if(emailele.value === ""){
        alert("Enter Your mail")
    }
    else{
    setSubStatus(true)
        setTimeout(() => {
          setSubStatus(false); 
        }, 4000);
      }
    }
 
  return (
    <>
    <Navbar/>
    {subStatus ? <div className='sub-con'><img src='https://www.gifcen.com/wp-content/uploads/2022/06/confetti-gif.gif' alt='' /> <h1 className='mt-4 text-center'>Thanks For Choosing Us</h1></div>: 
    <div className='about-con'>
        <div>
            <img src='https://img.freepik.com/free-vector/realistic-coffee-shop-banner-template_23-2149389633.jpg?w=1380&t=st=1703174405~exp=1703175005~hmac=3bdaa7425a6ae2d6222817ae888132993e69a3de225f0151c4514d682b1665d7' alt='banner' className='baaner'/>
        </div>
        <div className='pt-5 pb-5 inner-about'>
            <div className='content-div'>
            <h1 className='desc-head'>Rise and grind, it's coffee time!</h1>
            <p className='desc-about'>"Never trust anyone who doesn't drink coffee." "Our culture runs on coffee and gasoline, the first often tasting like the second." "Science may never come up with a better office communication system than the coffee break." "The smell of fresh-made coffee is one of the world's greatest inventions."</p>
            </div>
            <div className='player'>
           <ReactPlayer url ="https://youtu.be/NAQth7oOnOI?si=j8xkeFLpMckkQpla" controls = {true}/>
        </div>
        </div>
        <h1 className='text-center'>Why Choose Us?</h1>
        <div className='specialities-con pb-5 pt-5'>
            <div>
                <img src='https://images6.alphacoders.com/715/715419.jpg' alt='' className='image-about'/>
            </div>
            <div>
                <img src='https://lh4.googleusercontent.com/vS6gmVjtXspiisOdhAGmTtvkMnL5IwIW9D_ePBMDHSxVyAgEinqdrRFkIV1RRhgo1W2YKdhdMvhdnbZNwuQYFdv36m0d4WiiSxyr7ivOIXIYRvnX4h7XzwULYCqtxHuHTSxGH9iwMzpfgB8-Gl5grt8' alt='' className='image-about'/>
            </div>
            <div>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/024/072/383/small_2x/portrait-of-a-beautiful-young-woman-barista-working-in-a-coffee-shop-generative-ai-photo.jpg' alt='' className='image-about'/>
            </div>
        </div>
        <h1 className='text-center'>What We Provide</h1>
        <div className='specialities-con pb-5 pt-5'>
            <div className='acPremises'>
                <h1 className='text-we'>Full AC Premises</h1>
            </div>
            <div className='wifi'>
               <h1 className='text-we'>5G WiFi</h1>
            </div>
            <div className='book'>
                <h1 className='text-we'>Books Collection</h1>
            </div>
        </div>
        <div className='sponser-con'>
            <img src='https://th.bing.com/th/id/OIG.9KFx32sKxh6QXwsv37Nx?w=1024&h=1024&rs=1&pid=ImgDetMain' className='sponsor' alt='sponserImage'/>
            <div>
                <h3 className='text-center text-white'>Get Special Offers</h3>
                <input type='email' placeholder='Enter Your Mail' className='input-sponser mt-3' id='mailinput'/>
                <button className="btn btn-warning submit-sponser btn-submit" onClick={subscribed}>Submit</button>
            </div>
        </div>
    </div>
}
    <Footer/>
    </>
  );
};

export default About;
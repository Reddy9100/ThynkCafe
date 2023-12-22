import React, { useState, useEffect } from 'react';
import CoffeeItem from '../CoffeeItem/CoffeeItem';
import './Coffee.css';
import Navbar from '../Navbar/Navbar';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Footer from '../Footer/Footer';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Coffee = () => {
  const navigate = useNavigate()
  const jwtToken = Cookies.get("jwt_token")
  useEffect(() => {

      if (jwtToken === undefined) {
          console.log('Redirecting to /login');
          navigate('/login',{replace:true});
      }
  }, [jwtToken, navigate]);
  
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      setTimeout(async () => {
        try {
          const coffeeDataUrl = 'http://localhost:8000/coffeeData';
          const response = await fetch(coffeeDataUrl);
          const data = await response.json();
          setCoffeeData(data);
        } catch (error) {
          console.error('Error fetching coffee data:', error.message);
        } finally {
          setloading(false);
        }
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
    
       <div className='loader'> <Loader type='ThreeDots' color='Blue' height={100} width={150} />
       <img src='https://media.tenor.com/NKbJxDmA_gMAAAAi/coffee-coffee-time.gif' className='loader-image' alt='giphy'/>
       </div>
       ) : (
        <>
          <Navbar />
          <img src='https://www.trycuppacoffee.com/wp-content/uploads/2012/12/MENUHEADER.jpg' className='banner-menu' alt='imge-coffee-banner'/>
          <div className='coffeecollection pt-5 pb-5'>
            {coffeeData.map((coffee, index) => (
              <CoffeeItem key={index} coffee={coffee} />
            ))}
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default Coffee;

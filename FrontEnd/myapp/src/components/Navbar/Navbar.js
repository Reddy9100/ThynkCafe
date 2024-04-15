import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import { MdOutlineCoffeeMaker } from "react-icons/md";
import Cookies from 'js-cookie';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoutFunction = () => {
    Cookies.remove('jwt_token');
    navigate('/login');
  };

  const showToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='innernav'>
          <Link to='/'>
            <img
              src='https://cdn.logojoy.com/wp-content/uploads/20210512162319/Starbucks-Coffee-House-Logo.png'
              className='navbarlogo'
              alt='navbar-logo'
            />
          </Link>
          <h2 className='head-nav'>ThynkCafe</h2>
          <ul className={`ul-con ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <Link to='/'>
              <li className='link-ul link-for-mobile'>
                Home
              </li>
            </Link>
            <Link to='/coffees'>
              <li className='link-ul link-for-mobile'>
                Coffees
              </li>
            </Link>
            <Link to='/about'>
              <li className='link-ul link-for-mobile' >
                About
              </li>
            </Link>
            <Link to='/login'>
              <li className='link-ul link-for-mobile' onClick={logoutFunction}>
                Logout
              </li>
            </Link>
          </ul>
          <HiBars3 className='bars' onClick={showToggle} />
          <Link to = '/cart'><button className = "link-ul link-for-mobile"><MdOutlineCoffeeMaker/></button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from 'react';
import "./Footer.css";
import { FaInstagramSquare, FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-con'>
      <div>
        <h3 className='footer-head'>Follow Us</h3>
        <div className='icon-con mt-4'>
          <FaFacebook />
          <FaInstagramSquare />
          <FaTwitterSquare />
        </div>
        <p className='text-center mt-2'>Address: Silkboard, Bangalore</p>
        <p className='text-center mt-2'>Contact: 9876543210</p>
        <hr className='line' />
        <p><FaCopyright className='mr-2'/>All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

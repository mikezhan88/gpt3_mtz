import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Take a step into the future</h1>
      </div>

      
      <div className="gpt3__footer-btn">
        <a href='https://chat.openai.com/auth/login'>
          <p>Get Started</p>
        </a>
      </div>
      

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Mike Zhan Incorporated<br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Instagram</p>
          <p>Youtube</p>
          <p>Twitter</p>
          <p>Paypal</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Darien, IL</p>
          <p>708-289-3951</p>
          <p>mikezhan8@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>@2024 Mike Zhan Inc. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
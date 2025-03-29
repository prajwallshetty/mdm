import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Explore</h4>
          <ul className="links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/events'>event</Link></li>
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/team'>Our Team</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <ul className="links icon">
            <li>
              <a href="https://www.instagram.com/sambhram.24" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
                sambhram.24
              </a>
            </li>
            <li>
              <a href="tel:+91 9741152696">
                <i className="fa-solid fa-phone"></i>
                +91 9741152696
              </a>
            </li>
            <li>
              <a href="mailto:shreedevisambhram@gmail.com">
                <i className="fa-solid fa-envelope"></i>
                shreedevisambhram@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul className="links">
            <li>
              <a 
                href="https://sambhram-assets.s3.ap-south-1.amazonaws.com/Privacy+Policy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a 
                href="https://sambhram-assets.s3.ap-south-1.amazonaws.com/Terms+and+Conditions.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Address</h4>
          <p>
            Shree Devi Institute Of Technology, Kenjar, Near Mangalore International Airport,
            Karnataka - 574142
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;  
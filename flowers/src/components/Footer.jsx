import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-left">
            <h3>Stay Connected With Us</h3>
            <p>
              Discover beautiful plants and decor designed to bring life and
              elegance into your home.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Categories</h4>
              <ul>
                <li>Interior Plants</li>
                <li>Outdoor Plants</li>
                <li>Succulents</li>
                <li>Flowers</li>
                <li>Accessories</li>
              </ul>
            </div>

            <div>
              <h4>Customer Service</h4>
              <ul>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping</li>
              </ul>
            </div>

            <div>
              <h4>About Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe for latest updates</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>

        </div>

        <div className="footer-bottom">
          <button className="footer-cta">I’m New Here! Help Me</button>

          <div className="social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiYoutube /></a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
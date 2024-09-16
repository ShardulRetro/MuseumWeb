// Footer.js
import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#floorplan">Floorplan</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#tenders">Tenders</a></li>
            <li><a href="#sitemap">Sitemap</a></li>
            <li><a href="#website-policy">Website Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: 2269584400</p>
          <p>Email: <a href="mailto:csmvsmumbai@gmail.com">csmvsmumbai@gmail.com</a></p>
        </div>
        <div className="footer-section">
          <h3>Open Hours</h3>
          <p>10.15 AM to 6.00 PM</p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>159-161, Mahatma Gandhi Road, Fort,</p>
          <p>Mumbai - 400023, Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

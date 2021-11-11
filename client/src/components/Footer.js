import React from "react";
import "../pages/LandingPage_CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-content about-us">
            <h1 className="footer-title">About Us</h1>
            <p>HOME</p>
            <p>WIKI</p>
          </div>
          <div className="footer-content centacts">
            <h1 className="footer-title">Contact</h1>
            <p>김지윤</p>
            <p>장동혁</p>
            <p>김명현</p>
            <p>홍민혁</p>
          </div>
          <div className="footer-content sub">
            <h1 className="footer-title">Customer Service</h1>
            <p>
              <i className="fas fa-headset"></i>
            </p>
            <p>1500-1234</p>
          </div>
        </div>
        <div className="footer-info-social">
          <i className="fab fa-github-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
        <div className="footer-info-container">
          <div>Copyright © HomeTownAlba</div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

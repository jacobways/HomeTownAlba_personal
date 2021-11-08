import React from "react";
import "../pages/LandingPage_CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div>
            <a
              href="https://github.com/codestates/HomeTownAlba"
              className="footer-logo"
            ></a>
            <i className="fab fa-github-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
          <div className="footer-content">
            <h1 className="footer-title">ABOUT US</h1>
            <p>HOME</p>
            <p>WIKI</p>
          </div>
          <div className="footer-content">
            <h1 className="footer-title">CENTACTS</h1>
            <p>김지윤</p>
            <p>장동혁</p>
            <p>김명현</p>
            <p>홍민혁</p>
          </div>
          <div className="footer-content">
            <h1 className="footer-title">CUSTOMER SERVICE</h1>
            <p>
              <i className="fas fa-headset"></i>
            </p>
            <p>국번없이 1500-1234</p>
          </div>
        </div>
        <div className="footer-info-container">
          <div>© Copyright 2021 HomeTownAlba, All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
export default Footer;

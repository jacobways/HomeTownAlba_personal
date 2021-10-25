import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LandingPage.css";

function LandingPage() {
  const getHandler = () => {
    axios
      .get("http://localhost:5000/jobseeker", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <header className="landingPage-header-container ">
        <div className="landingPage-header-logo">
          <Link to="/">logo</Link>
        </div>
        <div className="menuBar-container">
          <div className="menuBar-icon"></div>
        </div>
        <ul className="landingPage-header-menu">
          <li>알바찾기</li>
          <li>알바목록</li>
          <li>마이페이지</li>
          <li type="button" aria-label="로그인" className="login-icon">
            <i className="fa-sign-in-alt"></i>
          </li>
          <li type="button" aria-label="회원가입" className="signup-icon">
            <i className="fa-sign-up-alt"></i>
          </li>
        </ul>

        <aside className="hamburgerBar">
          <div className="hamburgerBar_menu">
            <div className="hamburgerBar_exitBtn">
              <i className="hamburgerBar_exit_icon"></i>
            </div>
            <div className="hamburgerBar_logo-container">
              <div className="hamburgerBar-header-logo">
                <Link to="/">logo</Link>
              </div>
            </div>
            <div className="hamburgerBar-login">로그인</div>
            <ul className="hamburgerBar-menu">
              <li className="hamburgerBar-list">동네알바</li>
              <li className="hamburgerBar-list">알바목록</li>
              <li className="hamburgerBar-list">마이페이지</li>
            </ul>
          </div>
        </aside>
      </header>
      <div style={{ overflow: "hidden" }}>
        {/* 서비스 소개 블럭 */}
        <div className="service-container"></div>
        {/* 기능 소개 블럭 */}
        <div className="feature-container">
          <div className="feature">
            <div className="row">
              <div className=" col">
                <div className="landingbackground"></div>
              </div>
              <div className=" col">
                <div className="landingbackground">
                  {/* <Map /> */}
                </div>
              </div>
              <div className=" col">
                <div className="landingbackground"></div>
              </div>
              <div className=" col">
                <div className="landingbackground"></div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <footer className="footer-container">
        <div></div>
      </footer>
    </>
  );
}
export default LandingPage;

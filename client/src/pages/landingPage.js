import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <header className="landingPage-header-container">
        <button onClick={getHandler}>test</button>
        <div className="landingPage-header-logo">
          <Link to="/" className="landingPage-header-Link">
            LOGO
          </Link>
        </div>
        <div className="landignPage-header-nav-container">
          <nav className="landingPage-header-nav-wrapper">
            <h2 className="landingPage-header-h2"></h2>
            <ul className="landingPage-header-ul">
              <li className="landingPage-header-li">알바찾기</li>
              <li className="landingPage-header-li">채팅</li>
              <li className="landingPage-header-li">마이페이지</li>
            </ul>
          </nav>
        </div>
        <div className="landingPage-header-sign-container">
          <ul className="landingPage-header-sign-wrapper">
            <li
              type="button"
              aria-label="로그인"
              className="landingPage-header-signIn-btn icons"
            >
              <Link to="/login" className="landingPage-signUp-link">
                <i className="fas fa-sign-in-alt">로그인</i>
              </Link>
            </li>
            <li
              type="button"
              aria-label="회원가입"
              className="landingPage-header-signUp-btn icons test"
            >
              <Link to="/signUp" className="landingPage-signUp-link">
                <i className="fas fa-user-plus">회원가입</i>
              </Link>
            </li>
          </ul>
        </div>
        {/* 레이아웃 됐을때 나올 화면
        <aside className = "landingPage-layout">
          <div className = "landingPage-layout-container">
            <button className = "landingPage-layout-exit">
              <i>나가기 아이콘</i>
            </button>
            <div className = "landingPage-layout-logo">LOGO</div>
            <div className = "landingPage-layout-login">
              <Link to = "/login">
                로그인
              </Link>
            </div>
            <ul className = "landingPage-layout-nav">
              <li>알바찾기</li>
              <li>마이페이지</li>
              <li>채팅</li>
            </ul>
          </div>
        </aside> */}
      </header>
    </>
  );
}
export default LandingPage;

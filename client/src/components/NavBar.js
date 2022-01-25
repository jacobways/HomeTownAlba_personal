import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutJobSeeker } from "../_actions/user_action";
import axios from "axios";
import "../pages/LandingPage_CSS/NavBar.css";

const { Kakao } = window;

function NavBar() {
  //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company
  const [Login, setLogin] = useState(false);
  const [UserId, setUserId] = useState(null); //GET요청에 사용되는 id , 해당 내용 업데이트
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);

  const toggleHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true }).then(res => {
      if (res.data.user) {
        setUserId(res.data.user.id); //GET요청시에 사용하면 되는 id : mysql에서 생성해주는 id
        console.log("mysql에서 생성해주는id", UserId);

        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [Login]);
  //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company

  const jobSeeker = useSelector(state => {
    // console.log("useSelector", state.jobSeeker.loginSuccess);
    // 로그인한 유저의 Id
    return state.jobSeeker.loginSuccess;
  });
  // 유저의 토큰을 얻어낼수있음
  // 로그인을 하지 않으면 jobSeeker가 없음
  // console.log(jobSeeker.data);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    setLogin(false);
    dispatch(logoutJobSeeker()).then(res => {
      return res.data;
    });
  };

  // if (jobSeeker === undefined) {
  //   return (
  //     <header className="navbar-header-container">
  //       <div className="navbar-header-logo">
  //         <Link to="/">logo</Link>
  //       </div>
  //       <div className="menuBar-container">
  //         <div className="menuBar-icon"></div>
  //       </div>
  //       <ul className="navbar-header-menu">
  //         <li>
  //           <Link to="/guest/mypage">마이페이지</Link>
  //         </li>
  //         <li>
  //           <Link to="/login">로그인</Link>
  //         </li>
  //         <li>
  //           <Link to="/register">회원가입</Link>
  //         </li>
  //       </ul>
  //       <div className="hamburger-Btn" onClick={toggleHamburger}>
  //         <i className="fas fa-bars"></i>
  //       </div>
  //       <aside
  //         className={
  //           isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar"
  //         }
  //       >
  //         <div className="hamburgerBar_menu">
  //           <div className="hamburgerBar_exitBtn" onClick={toggleHamburger}>
  //             <i className="fas fa-times"></i>
  //           </div>
  //           <ul className="hamburgerBar-menu">
  //             <li className="hamburgerBar-list">
  //               <Link to="/login">로그인</Link>
  //             </li>
  //             <li className="hamburgerBar-list">
  //               <Link to="/map">알바 찾기</Link>
  //             </li>
  //             <li className="hamburgerBar-list">
  //               <Link to="/guest/mypage">마이페이지(게스트)</Link>
  //             </li>
  //             <li className="hamburgerBar-list">
  //               <Link to="/register">회원가입</Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </aside>
  //     </header>
  //   );
  // }
  if ((jobSeeker && jobSeeker.loginSuccess) || Login) {
    return (
      <header className="navbar-header-container">
        <div className="navbar-header-logo">
          <Link to="/">logo</Link>
        </div>
        <div className="menuBar-container">
          <div className="menuBar-icon"></div>
        </div>
        <ul className="navbar-header-menu">
          <li>
            <Link to="/map">알바찾기</Link>
          </li>
          <li>
            <Link to="/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/" onClick={LogoutHandler}>
              로그아웃
            </Link>
          </li>
        </ul>
        <div className="hamburger-Btn" onClick={toggleHamburger}>
          <i className="fas fa-bars"></i>
        </div>
        <aside
          className={
            isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar"
          }
        >
          <div className="hamburgerBar_menu">
            <div className="hamburgerBar_exitBtn" onClick={toggleHamburger}>
              <i className="fas fa-times"></i>
            </div>
            <ul className="hamburgerBar-menu">
              <li className="hamburgerBar-list">
                <Link to="/map">알바 찾기</Link>
              </li>
              <li className="hamburgerBar-list">
                <Link to="/mypage">마이페이지</Link>
              </li>
              <li className="hamburgerBar-list">
                <Link to="/" onClick={LogoutHandler}>
                  로그아웃
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </header>
    );
  } else {
    return (
      <header className="navbar-header-container">
        <div className="navbar-header-logo">
          <Link to="/">logo</Link>
        </div>
        <div className="guest-picket">
          <i class="far fa-id-badge"></i>
          <span>비회원용</span>
        </div>
        <ul className="navbar-header-menu">
          <li>
            <Link to="/map">알바찾기</Link>
          </li>
          <li>
            <Link to="/guest/mypage">마이페이지</Link>
          </li>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
        <div className="hamburger-Btn" onClick={toggleHamburger}>
          <i className="fas fa-bars"></i>
        </div>
        <aside
          className={
            isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar"
          }
        >
          <div className="hamburgerBar_menu">
            <div className="hamburgerBar_exitBtn" onClick={toggleHamburger}>
              <i className="fas fa-times"></i>
            </div>
            <ul className="hamburgerBar-menu">
              <li className="hamburgerBar-list">
                <Link to="/login">로그인</Link>
              </li>
              <li className="hamburgerBar-list">
                <Link to="/map">알바 찾기</Link>
              </li>
              <li className="hamburgerBar-list">
                <Link to="/guest/mypage">마이페이지(게스트)</Link>
              </li>
              <li className="hamburgerBar-list">
                <Link to="/register">회원가입</Link>
              </li>
            </ul>
          </div>
        </aside>
      </header>
    );
  }
}

export default NavBar;

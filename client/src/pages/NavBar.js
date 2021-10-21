import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutJobSeeker } from "../_actions/user_action";

function NavBar(props) {
  const jobSeeker = useSelector((state) => {
    // console.log(state.jobSeeker.loginSuccess);
    return state.jobSeeker.loginSuccess;
  });
  // 유저의 토큰을 얻어낼수있음
  // 로그인을 하지 않으면 jobSeeker가 없음
  // console.log(jobSeeker.data);
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(logoutJobSeeker()).then((res) => {
      // console.log(res.data);
      return res.data;
    });
  };
  // console.log(jobSeeker.loginSuccess);
  if (jobSeeker === undefined) {
    return (
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>
    );
  }
  if (jobSeeker && jobSeeker.loginSuccess) {
    return (
      <div>
        <button onClick={LogoutHandler}>로그아웃</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>
    );
  }
}

export default NavBar;

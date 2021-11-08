import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutJobSeeker } from "../_actions/user_action";
import axios from "axios";
const { Kakao } = window;

function NavBar(props) {
  //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company
  const [Login, setLogin] = useState(false);
  const [UserId, setUserId] = useState(null); //GET요청에 사용되는 id , 해당 내용 업데이트

  useEffect(() => {
    axios
      .get("http://localhost:5000", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.user) {
          setUserId(res.data.user.id); //GET요청시에 사용하면 되는 id : mysql에서 생성해주는 id
          console.log("mysql에서 생성해주는id", UserId);

          setLogin(true);
        } else {
          setLogin(false);
        }
        // if (res.data.loginSuccess) {
        //   setLogin(res.data.loginSuccess);
        // } else {
        //   setLogin(false);
        // }
      });
  }, [Login]);
  //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company

  const jobSeeker = useSelector((state) => {
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
    dispatch(logoutJobSeeker()).then((res) => {
      return res.data;
    });

    // 명현님 카카오 로그아웃
    // if (Kakao.Auth.getAccessToken()) {
    //   console.log(Kakao.Auth.getAccessToken());
    //   Kakao.Auth.logout(console.log(Kakao.Auth.getAccessToken()));
    // }
  };

  // console.log(jobSeeker.loginSuccess);
  // 밑에코드는 새로고침되면 해결됨
  // if (Login) {
  //   return (
  //     <div>
  //       <button onClick={LogoutHandler}>로그아웃</button>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <Link to="/login">로그인</Link>
  //       <Link to="/register">회원가입</Link>
  //     </div>
  //   );
  // }
  if (jobSeeker === undefined) {
    return (
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
        <Link to="/guest/mypage">게스트MyPage</Link>
      </div>
    );
  }
  if ((jobSeeker && jobSeeker.loginSuccess) || Login) {
    return (
      <div>
        <button onClick={LogoutHandler}>로그아웃</button>
        <Link to="/mypage">MyPage</Link>
        <Link to="/chat">채팅</Link>

        {/* <Link to="/mypage/jobseeker">구직자MyPage</Link> */}
        {/* <Link to="/mypage/company">사업자MyPage</Link> */}
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
        <Link to="/guest/mypage">게스트MyPage</Link>

        {/* 구글 로그아웃 구현 : 노드버드 카카오 참고해서*/}
      </div>
    );
  }
}

export default NavBar;

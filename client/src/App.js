import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./pages/NavBar";
import RegisterPage from "./pages/RegisterPage";
import CompanyMyPage from "./pages/CompanyMyPage";
import JobSeekerMyPage from "./pages/JobSeekerMyPage";
import LandingPage from "./pages/LandingPage.js";

import Map from "./pages/Map";
import AdminPage from "./components/AdminPage";

import Register from "./components/register";
import KakaoLogin from "./components/kakaoLogin";
import Comjob from "./components/comjob";
import Jobkakao from "./components/JobKakao";
import Jobregister from "./components/jobRegister";
import Logout from "./components/kakaoLogout";
import GuestMyPage from "./pages/GuestMyPage";
import KaKaoRegister from "./components/KaKaoRegister";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/mypage/company" component={CompanyMyPage} />
        <Route exact path="/mypage/jobseeker" component={JobSeekerMyPage} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/guest/mypage" component={GuestMyPage} />
        {/* 로그인 페이지 합치는 부분 */}
        <Route exact path="/login" component={LoginPage} />
        {/* <Route exact path="/test/company/login" component={KakaoLogin} /> */}
        {/* <Route exact path="/test/job/login" component={Jobkakao} /> */}
        {/* 로그인 페이지 합치는 부분
        company는 고려 안하므로 합치지 않고, local은 카카오 로그인 연동 버튼만 /login으로 옮김
        */}

        {/* 회원가입 페이지 합치는 부분 */}
        <Route exact path="/register" component={RegisterPage} />
        {/* <Route exact path="/test/register" component={Register} /> */}
        {/* <Route exact path="/test/job/register" component={Jobregister} /> */}
        {/* <Route exact path="/test" component={KaKaoRegister} /> */}
        {/* 회원가입 페이지 합치는 부분 
        3개 register 모두 카카오 회원가입인지?
        job kakao register만 남기고  job kakao는 /register에 component로 넣어도 될것같음
        */}

        {/* NavBar인것 같아서 삭제? 
        logout의 경우 NavBar에서 구현되어 NavBar 로그아웃핸들러안에 로직 넣음
        현재 충돌은 x
        */}
        {/* <Route exact path="/test/logout" component={Logout} /> */}
        {/* <Route exact path="/test/choice" component={Comjob} /> */}
        {/* NavBar*/}
      </Switch>
    </>
  );
}

export default App;

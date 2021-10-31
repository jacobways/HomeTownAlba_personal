import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import NavBar from "./pages/NavBar";
import RegisterPage from "./pages/RegisterPage";
import CompanyMyPage from "./pages/CompanyMyPage";
import JobSeekerMyPage from "./pages/JobSeekerMyPage";
import LandingPage from "./pages/LandingPage.js";

import Map from "./pages/Map";
import AdminPage from "./components/AdminPage";

import Register from "./components/register";
import Kakakoregister from "./components/kakaoregister";
import KakaoLogin from "./components/kakaoLogin";
import Comjob from "./components/comjob";
import Jobkakao from "./components/JobKakao";
import Jobregister from "./components/jobRegister";
import Logout from "./components/kakaoLogout";


function App() {

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/mypage/company" component={CompanyMyPage} />
        <Route exact path="/mypage/jobseeker" component={JobSeekerMyPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register2" component={RegisterPage} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/test/logout" component={Logout} />
        <Route exact path="/test/choice" component={Comjob} />
        <Route exact path="/test/register" component={Register} />
        <Route exact path="/test" component={Kakakoregister} />
        <Route exact path="/test/company/login" component={KakaoLogin} />
        <Route exact path="/test/job/login" component={Jobkakao} />
        <Route exact path="/test/job/register" component={Jobregister} />
      </Switch>
    </>
  );
}

export default App;

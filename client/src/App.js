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

import GuestMyPage from "./pages/GuestMyPage";
import MyPage from "./pages/MyPage";
import Worknet from "./components/Worknet";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/mypage" component={MyPage} />
        {/* <Route exact path="/mypage/company" component={CompanyMyPage} /> */}
        {/* <Route exact path="/mypage/jobseeker" component={JobSeekerMyPage} /> */}
        <Route exact path="/map" component={Map} />
        <Route exact path="/admin" component={AdminPage} />
        <Route exact path="/guest/mypage" component={GuestMyPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/test" component={Worknet} />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </>
  );
}

export default App;

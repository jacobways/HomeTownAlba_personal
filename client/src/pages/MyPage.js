import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import JobSeekerMyPage from "./JobSeekerMyPage";
import CompanyMyPage from "./CompanyMyPage";

function AdminPage(props) {
  //   로그인한 유저의 id를 불러오기 위함

  // 지윤님께 제안 드릴 사항 -> MyPage Component 2개를 분기처리로 하고 NavBar는 MyPage하나로만
  const [UserLoginType, setUserLoginType] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true })
      .then(res => {
        // console.log(res.data.user.type, typeof res.data.user.type);
        if (res.data.user && res.data.user.type) {
          setUserLoginType(res.data.user.type);
        } else {
          props.history.push("/");
        }
      });
  }, [UserLoginType]);

  if (
    UserLoginType === "job" ||
    UserLoginType === "G" ||
    UserLoginType === "K"
  ) {
    return (
      <>
        <JobSeekerMyPage />
      </>
    );
  } else {
    return (
      <>
        <div>사업자 MyPage </div>
        <CompanyMyPage />
      </>
    );
  }
}

export default withRouter(AdminPage);

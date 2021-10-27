import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function AdminPage(props) {
  //   로그인한 유저의 id를 불러오기 위함
  useEffect(() => {
    axios
      .get("http://localhost:5000/jobSeeker", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.user.type === "admin") {
          console.log("관리자");
        } else {
          props.history.push("/");
        }
      });
  }, []);

  return (
    <>
      <div>관리자만 들어올수 있음</div>
    </>
  );
}

export default withRouter(AdminPage);

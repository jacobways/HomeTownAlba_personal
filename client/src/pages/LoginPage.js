import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginCompany, loginJobSeeker } from "../_actions/user_action";

function LoginPage(props) {
  const [LoginDisplay, setLoginDisplay] = useState(true);
  // true : 구직자 , false : 사업자
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();

  const ChangeJobDisplay = () => {
    setLoginDisplay(true);
  };

  const ChangeCompanyDisplay = () => {
    setLoginDisplay(false);
  };

  const IdHandler = (e) => {
    setId(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const JobSeekrSubmitHandler = (e) => {
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux
    dispatch(loginJobSeeker(submitData)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    });
  };
  const CompanySubmitHandler = (e) => {
    console.log("사업자 로그인");
    // redux
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux
    dispatch(loginCompany(submitData)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    });
  };

  // Google Oauth

  if (LoginDisplay) {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자</button>
        <button onClick={ChangeCompanyDisplay}>사업자</button>

        <form onSubmit={JobSeekrSubmitHandler}>
          <label>아이디</label>
          <input
            value={Id}
            type="text"
            onChange={IdHandler}
            placeholder="아이디를 입력하세요"
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={Password}
            onChange={PasswordHandler}
            placeholder="비밀번호를 입력하세요"
          />
          <button type="submit">로그인</button>
          {/* 구글 Oauth */}
          <a href="http://localhost:5000/auth/google">Google</a>

          {/* 구글 Oauth */}

          <Link to="/register">회원가입</Link>
          <Link to="#">아이디/비밀번호 찾기</Link>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자</button>
        <button onClick={ChangeCompanyDisplay}>사업자</button>

        <form onSubmit={CompanySubmitHandler}>
          <label>아이디</label>
          <input
            value={Id}
            type="text"
            onChange={IdHandler}
            placeholder="아이디를 입력하세요"
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={Password}
            onChange={PasswordHandler}
            placeholder="비밀번호를 입력하세요"
          />
          <button type="submit">로그인</button>
          <Link to="/register">회원가입</Link>
          <Link to="#">아이디/비밀번호 찾기</Link>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginPage);

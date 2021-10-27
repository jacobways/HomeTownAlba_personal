import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { func } from "prop-types";

function Register() {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCHeckPassword] = useState("");
  const [Question, setQuestion] = useState("");
  const [Name, setName] = useState("");
  const [Location, setLocation] = useState("");
  const [BusinessNumber, setBusinessNumber] = useState("");
  //5d581f63f90c16a3faadb25926217e41

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, gender",
      success: function (authObj) {
        console.log(authObj);
        window.Kakako.API.request({
          url: "/v2/user.me",
          success: (res) => {
            const { profile_nickname, profile_image, gender } =
              res.kakao_accout;
            console.log(profile_nickname);
            history.push("/getUser");
          },
        });
      },
    });
  };

  const IdHandler = (e) => {
    setId(e.target.value);
  };
  let history = useHistory();

  const QuestionHandler = (e) => {
    setQuestion(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const CheckPasswordHandler = (e) => {
    setCHeckPassword(e.target.value);
  };
  const NameHandler = (e) => {
    setName(e.target.value);
  };
  const LocationHandler = (e) => {
    setLocation(e.target.value);
  };
  const BusinessNumberHandler = (e) => {
    setBusinessNumber(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // register 요청 후 받은 응답을 가지고 redirect
    if (Password !== CheckPassword) {
      alert("비밀번호가 서로 다릅니다");
    } else {
      let body = {
        userId: Id,
        password: Password,
        question: Question,
        name: Name,
        location: Location,
        businessNumber: BusinessNumber,
      };
      console.log(body);
      axios
        .post("https://localhost:5000/register", body, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          alert("회원가입이 완료되었습니다.");
          //   history.push("/login");
        });
    }
  };
  const moveLogin = () => {
    history.push("/login");
  };

  return (
    <div className="center">
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form onSubmit={submitHandler}>
            <h1 className="head">가입을 시작합니다!</h1>
            <div className="social-container">{/* Google, kakao auth */}</div>
            <span>아래 내용을 빠짐없이 입력해주세요.</span>
            <input
              className="login"
              required
              type="text"
              value={Id}
              onChange={IdHandler}
              placeholder="아이디"
            />
            <input
              className="login"
              required
              type="password"
              value={Password}
              onChange={PasswordHandler}
              placeholder="비밀번호"
            />
            <input
              className="login"
              required
              type="password"
              value={CheckPassword}
              onChange={CheckPasswordHandler}
              placeholder="비밀번호 확인"
            />
            <input
              className="login"
              required
              type="text"
              value={Location}
              onChange={LocationHandler}
              placeholder="회사위치"
            />
            <input
              className="login"
              required
              type="text"
              value={BusinessNumber}
              onChange={BusinessNumberHandler}
              placeholder="사업자번호"
            />
            <input
              className="login"
              required
              type="text"
              value={Name}
              onChange={NameHandler}
              placeholder="대표이름"
            />
            <input
              className="login"
              required
              type="text"
              value={Question}
              onChange={QuestionHandler}
              placeholder="졸업한 초등학교는?"
            />
            <span className="ptext">
              위 질문은 비밀번호를 잊어버렸을 경우 사용 됩니다.
            </span>
            <button type="submit" onClick={submitHandler}>
              회원가입
            </button>
          </form>
        </div>
        <button onClick={kakaoLogin}>kakaoLogin</button>
      </div>
    </div>
  );
}

export default Register;

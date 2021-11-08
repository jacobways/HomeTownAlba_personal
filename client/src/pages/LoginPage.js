import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";
import "./mypage.scss";
import { useDispatch } from "react-redux";
import { loginCompany, loginJobSeeker } from "../_actions/user_action";

const { Kakao } = window;

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

  const IdHandler = e => {
    setId(e.target.value);
  };
  const PasswordHandler = e => {
    setPassword(e.target.value);
  };
  const JobSeekrSubmitHandler = e => {
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux
    dispatch(loginJobSeeker(submitData)).then(res => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    });
  };
  const CompanySubmitHandler = e => {
    console.log("사업자 로그인");
    // redux
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux
    dispatch(loginCompany(submitData)).then(res => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    });
  };

  // Google Oauth

  // 명현님 카카오 로그인
  let history = useHistory();
  const loginWithKakao = () => {
    const scope = " account_email";
    Kakao.Auth.login({
      scope,
      // success는 인증 정보를 응답(response)으로 받는다.
      success: function (response) {
        //카카오 SDK에 사용자 토큰을 설정한다.
        window.Kakao.Auth.setAccessToken(response.access_token);
        //console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

        let ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({ kakao_account }) {
            //어떤 정보 넘어오는지 확인

            const { email } = kakao_account;
            setId(email);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
    axios
      .post(
        "http://localhost:5000/jobseeker/kakaoJobLogin",
        { userId: Id },
        {
          withCredentials: true,
        }
      )
      .then(res => {
        console.log("id", res.data);
        if (res.data.message) {
          history.push("/company/login");
        } else {
          history.push("/register");
        }
      });
  };

  if (LoginDisplay) {
    return (
      <div>
        <div className="mypage">
          <ul className="tag">
            <li className="on">
              <a onClick={ChangeJobDisplay}>개인회원</a>
            </li>
            <li>
              <a onClick={ChangeCompanyDisplay}>기업회원</a>
            </li>
          </ul>
          <br />
          <br />
          <div className="loginSection">
            <tbody onSubmit={JobSeekrSubmitHandler}>
              <tr>
                <td>
                  <input
                    value={Id}
                    type="text"
                    onChange={IdHandler}
                    placeholder="아이디를 입력하세요"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    value={Password}
                    onChange={PasswordHandler}
                    placeholder="비밀번호를 입력하세요"
                  />
                </td>
              </tr>
            </tbody>
          </div>
          <button className="bubbly-button" type="submit">
            로그인
          </button>
          {/* <form
          onSubmit={JobSeekrSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
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
          <button type="submit">로그인</button> */}
          {/* 구글 Oauth */}
          <a className="googleSns" href="http://localhost:5000/auth/google"></a>
          {/* 구글 Oauth */}
          {/* KaKao Oauth */}
          <button className="kakaoSns" onClick={loginWithKakao}></button>
          {/* KaKao Oauth */}

          <Link to="/register">회원가입</Link>
          <Link to="#">아이디/비밀번호 찾기</Link>

          {/* </form> */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="mypage">
          <ul className="tag">
            <li>
              <a onClick={ChangeJobDisplay}>개인회원</a>
            </li>
            <li className="on">
              <a onClick={ChangeCompanyDisplay}>기업회원</a>
            </li>
          </ul>
          <br />
          <br />
          <div className="loginSection">
            <tbody onSubmit={JobSeekrSubmitHandler}>
              <tr>
                <td>
                  <input
                    value={Id}
                    type="text"
                    onChange={IdHandler}
                    placeholder="아이디를 입력하세요"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    value={Password}
                    onChange={PasswordHandler}
                    placeholder="비밀번호를 입력하세요"
                  />
                </td>
              </tr>
            </tbody>
          </div>

          {/* <form
          onSubmit={CompanySubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
          /> */}
          <button className="bubbly-button" type="submit">
            로그인
          </button>
          <Link to="/register">회원가입</Link>
          <Link to="#">아이디/비밀번호 찾기</Link>
          {/* </form> */}
        </div>
      </div>
    );
  }
}

export default withRouter(LoginPage);

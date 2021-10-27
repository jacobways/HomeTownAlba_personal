import React, { useState } from "react";
import { registerCompany, registerJobSeeker } from "../_actions/user_action";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function RegisterPage(props) {
  const [RegisterDisplay, setRegisterDisplay] = useState(true);
  // true : 구직자 , false : 사업자

  // 구직자

  const [JobSeekerEmailInput, setJobSeekerEmailInput] = useState(false);
  const [JobSeekerAuthCode, setJobSeekerAuthCode] = useState(null);
  const [JobSeekerInputAuthCode, setJobSeekerInputAuthCode] = useState(null);

  // 사업자

  const [CompanyEmailInput, setCompanyEmailInput] = useState(false);
  const [CompanyAuthCode, setCompanyAuthCode] = useState(null);
  const [CompanyInputAuthCode, setCompanyInputAuthCode] = useState(null);

  // 회원가입 입력정보
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(null);
  const [Email, setEmail] = useState("");
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [Locations, setLocations] = useState("");
  const [BusinessNumber, setBusinessNumber] = useState("");

  const dispatch = useDispatch();

  const ChangeJobDisplay = () => {
    setRegisterDisplay(true);
  };

  const ChangeCompanyDisplay = () => {
    setRegisterDisplay(false);
  };

  const IdHandler = (e) => {
    setId(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const NameHandler = (e) => {
    setName(e.target.value);
  };
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const CompanyEmailHandler = (e) => {
    setCompanyEmail(e.target.value);
  };
  const AgeHandler = (e) => {
    setAge(e.target.value);
  };

  // 인증번호 입력란
  const InputHandler = (e) => {
    setJobSeekerInputAuthCode(e.target.value);
  };

  const CompanyInputHandler = (e) => {
    setCompanyInputAuthCode(e.target.value);
  };
  // 구직자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입

  const JobSeekrSubmitHandler = (e) => {
    e.preventDefault();

    let authEmailData = {
      email: Email,
      //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함
    };

    //   redux
    axios
      .post("http://localhost:5000/mail", authEmailData, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setJobSeekerEmailInput(true);
        setJobSeekerAuthCode(res.data);
      });
  };

  const finalJobSeekerSubmitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      password: Password,
      name: Name,
      age: Age,
    };

    // console.log("AuthCode", typeof AuthCode, AuthCode);
    // console.log("InputAuthCode", typeof InputAuthCode, InputAuthCode);

    if (JobSeekerAuthCode === parseInt(JobSeekerInputAuthCode)) {
      dispatch(registerJobSeeker(submitData)).then((res) => {
        // console.log(res.payload);
        if (res.payload.registersuccess) {
          props.history.push("/login");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
    } else {
      console.log("인증번호가 다릅니다");
    }
  };

  // 사업자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입

  const CompanySubmitHandler = (e) => {
    e.preventDefault();
    // 회원가입할때 Db에 type이라는 field를 한개 추가

    let authEmailData = {
      email: CompanyEmail,
      //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함
    };
    axios
      .post("http://localhost:5000/mail", authEmailData, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setCompanyEmailInput(true);
        setCompanyAuthCode(res.data);
      });
  };

  const finalCompanySubmitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux
    if (CompanyAuthCode === parseInt(CompanyInputAuthCode)) {
      dispatch(registerCompany(submitData)).then((res) => {
        // console.log(res.payload);
        if (res.payload.registersuccess) {
          props.history.push("/login");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
    }
  };

  if (RegisterDisplay) {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>

        <form
          onSubmit={finalJobSeekerSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>아이디</label>
          <input
            required
            type="text"
            value={Id}
            onChange={IdHandler}
            placeholder="아이디를 입력하세요"
          />
          <label>비밀번호</label>
          <input
            required
            type="password"
            value={Password}
            onChange={PasswordHandler}
            placeholder="비밀번호를 입력하세요"
          />
          <label>이름</label>

          <input
            type="text"
            value={Name}
            onChange={NameHandler}
            placeholder="이름을 입력하세요"
          />
          <label>나이</label>

          <input
            type="number"
            value={Age}
            onChange={AgeHandler}
            placeholder="나이를 입력하세요"
          />
          <label>이메일</label>

          <input
            required
            type="email"
            value={Email}
            onChange={EmailHandler}
            placeholder="인증번호 발송을 위한 이메일을 입력하세요"
          />

          <button onClick={JobSeekrSubmitHandler}>
            이메일 인증번호를 받으시고 회원가입을 완료하세요
          </button>
          {/* 이메일 인증코드 오면 true로 바뀌어서 보여주기 */}
          {JobSeekerEmailInput ? (
            <div>
              <h4>회원 가입을 위한 인증번호 입니다.</h4>
              <h4>아래 인증 번호를 입력하여 인증을 완료해주세요.</h4>
              <input
                type="text"
                placeholder="인증번호를 입력하세요"
                value={JobSeekerInputAuthCode}
                onChange={InputHandler}
              />
              <button type="submit">회원가입</button>
            </div>
          ) : null}
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>

        <form
          onSubmit={finalCompanySubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label>아이디</label>
          <input
            type="text"
            value={Id}
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
          <label>이메일</label>

          <input
            required
            type="email"
            value={CompanyEmail}
            onChange={CompanyEmailHandler}
            placeholder="인증번호 발송을 위한 이메일을 입력하세요"
          />

          <button onClick={CompanySubmitHandler}>
            이메일 인증번호를 받으시고 회원가입을 완료하세요
          </button>
          {/* 이메일 인증코드 오면 true로 바뀌어서 보여주기 */}
          {CompanyEmailInput ? (
            <div>
              <h4>회원 가입을 위한 인증번호 입니다.</h4>
              <h4>아래 인증 번호를 입력하여 인증을 완료해주세요.</h4>
              <input
                type="text"
                placeholder="인증번호를 입력하세요"
                value={CompanyInputAuthCode}
                onChange={CompanyInputHandler}
              />
              <button type="submit">회원가입 완료</button>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterPage);

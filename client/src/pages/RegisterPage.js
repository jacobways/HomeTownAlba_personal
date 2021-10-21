import React, { useState } from "react";
import { registerJobSeeker } from "../_actions/user_action";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function RegisterPage(props) {
  const [RegisterDisplay, setRegisterDisplay] = useState(true);
  // true : 구직자 , false : 사업자

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

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
  const JobSeekrSubmitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      password: Password,
    };
    //   redux

    dispatch(registerJobSeeker(submitData)).then((res) => {
      // console.log(res.payload);
      if (res.payload.registersuccess) {
        props.history.push("/login");
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    });
  };
  const CompanySubmitHandler = (e) => {
    e.preventDefault();
    // redux
  };

  if (RegisterDisplay) {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>

        <form onSubmit={JobSeekrSubmitHandler}>
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

          <button type="submit">회원가입 완료</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>

        <form onSubmit={CompanySubmitHandler}>
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

          <button type="submit">회원가입 완료</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RegisterPage);

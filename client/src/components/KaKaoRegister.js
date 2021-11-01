import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";
const { Kakao } = window;

function KaKaoRegister() {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Click, setClick] = useState(false);
  const [Password, setPassword] = useState("");
  const [Location, setLocation] = useState("");
  const [BusinessNumber, setBusinessNumber] = useState("");
  const [Question, setQuestion] = useState("");
  const [Id, setId] = useState("");
  let history = useHistory();

  const registerHandler = (e) => {
    e.preventDefault();

    let body = {
      userId: Id,
      password: Password,
      name: Name,
      location: Location,
      businessNumber: BusinessNumber,
      question: Question,
    };
    axios
      .post("http://localhost:5000/jobseeker/kakaoJobRegister", body, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          history.push("/");
        }
      });
  };
  const QuestionHandler = (e) => {
    setQuestion(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const LocationHandler = (e) => {
    setLocation(e.target.value);
  };
  const BusinessNumberHandler = (e) => {
    setBusinessNumber(e.target.value);
  };
  const IdHandler = (e) => {
    setId(e.target.value);
  };

  const loginWithKakao = () => {
    const scope = "profile_nickname,profile_image, gender, account_email";
    Kakao.Auth.login({
      scope,
      // success는 인증 정보를 응답(response)으로 받는다.
      success: function (response) {
        //카카오 SDK에 사용자 토큰을 설정한다.
        window.Kakao.Auth.setAccessToken(response.access_token);
        console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

        let ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({ kakao_account }) {
            //어떤 정보 넘어오는지 확인
            console.log(kakao_account);
            const { gender, profile, email } = kakao_account;
            setName(profile.nickname);
            setGender(gender);
            setClick(true);
            setId(email);
            console.log(gender);
            console.log(`responsed img: ${profile.profile_image_url}`);
            console.log(profile.nickname);
            console.log(email);
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
  };

  return (
    <>
      <div>
        <button onClick={loginWithKakao}>회원가입하기</button>
      </div>
      {Click ? (
        <form onLoad={loginWithKakao}>
          <input required type="text" value={Name} />
          <input
            required
            onChange={PasswordHandler}
            type="password"
            placeholder="비밀번호"
          />
          <input
            required
            onChange={LocationHandler}
            type="text"
            placeholder="지역"
          />
          <input
            required
            onChange={BusinessNumberHandler}
            type="text"
            placeholder="사업자번호"
          />
          <input
            required
            onChange={QuestionHandler}
            type="text"
            placeholder="졸업한초등학교"
          />
          <input required value={Id} type="text" placeholder="아이디" />
          <button type="submit" onClick={registerHandler}>
            확인
          </button>
        </form>
      ) : null}
    </>
  );
}
export default KaKaoRegister;

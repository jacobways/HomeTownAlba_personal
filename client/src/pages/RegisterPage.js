import React, { useState } from "react";
import { registerCompany, registerJobSeeker } from "../_actions/user_action";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import KakaoR from "../components/jobRegister";
import LoadingModal from "../components/LoadingModal";

function RegisterPage(props) {
  const [RegisterDisplay, setRegisterDisplay] = useState("jobseeker");
  // true : 구직자 , false : 사업자

  // 카카오 주소검색 API 활용 공간
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const [isOpenPost, setIsOpenPost] = useState(false);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
    console.log("주소", address);
    console.log("상세 주소", addressDetail);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px",
  };
  // 카카오 주소검색 API 활용 공간

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
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(null);
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState(""); //select
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [Question, setQuestion] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [BusinessNumber, setBusinessNumber] = useState("");

  // 이미지 업로드 테스트

  const BASE_URL = "http://localhost:5000";
  const [Content, setContent] = useState("");
  const [FilePath, setFilePath] = useState("");

  const ImgUploadHandler = (e) => {
    // console.log(e.target.files);
    setContent(e.target.files[0]);
  };

  // 이미지 업로드 테스트

  const dispatch = useDispatch();

  const ChangeJobDisplay = () => {
    setRegisterDisplay("jobseeker");
  };

  const ChangeCompanyDisplay = () => {
    setRegisterDisplay("company");
  };
  const ChangeKaKaoDisplay = () => {
    setRegisterDisplay("kakao");
  };

  const IdHandler = (e) => {
    setId(e.target.value);
  };
  const PasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const ConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
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
  const genderHandler = (e) => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };
  const QuestionHandler = (e) => {
    setQuestion(e.target.value);
  };
  const CompanyNameHandler = (e) => {
    setCompanyName(e.target.value);
  };

  const BusinessNumberHandler = (e) => {
    setBusinessNumber(e.target.value);
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
    setLoadingStatus(true);

    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);

    axios
      .post("http://localhost:5000/upload", formData, {
        header: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setFilePath(`${BASE_URL}/img/${res.data.fileName}`);
      })
      .catch((error) => {
        console.error(error);
      });
    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

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
        setLoadingStatus(false);
        setJobSeekerEmailInput(true);
        setJobSeekerAuthCode(res.data);
      });
  };

  const finalJobSeekerSubmitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      email: Email,
      password: Password,
      name: Name,
      age: Age,
      gender: Gender,
      image: FilePath,
      question: Question,
    };

    // console.log("AuthCode", typeof AuthCode, AuthCode);
    // console.log("InputAuthCode", typeof InputAuthCode, InputAuthCode);
    if (Password !== ConfirmPassword) {
      console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
    } else {
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
    }
  };

  // 사업자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입

  const CompanySubmitHandler = (e) => {
    e.preventDefault();
    // 회원가입할때 Db에 type이라는 field를 한개 추가
    setLoadingStatus(true);

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
        setLoadingStatus(false);

        setCompanyEmailInput(true);
        setCompanyAuthCode(res.data);
      });
  };

  const finalCompanySubmitHandler = (e) => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      password: Password,
      email: Email,
      companyName: CompanyName,
      location: addressDetail,
      businessNumber: BusinessNumber,
      question: Question,
    };
    //   redux
    if (Password !== ConfirmPassword) {
      console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
    } else {
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
    }
  };

  if (RegisterDisplay === "jobseeker") {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>
        <button onClick={ChangeKaKaoDisplay}>카카오 회원가입</button>

        <form
          onSubmit={finalJobSeekerSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          encType="multipart/form-data"
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
          <label>비밀번호 확인</label>
          <input
            required
            type="password"
            value={ConfirmPassword}
            onChange={ConfirmPasswordHandler}
            placeholder="비밀번호를 한번 더 입력하세요"
          />
          <label>이름</label>

          <input
            required
            type="text"
            value={Name}
            onChange={NameHandler}
            placeholder="이름을 입력하세요"
          />
          <label>나이</label>

          <input
            required
            type="number"
            value={Age}
            onChange={AgeHandler}
            placeholder="나이를 입력하세요"
          />
          <label>성별</label>
          <select onChange={genderHandler}>
            <option value="">--성별을 선택해주세요--</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>

          <label>
            졸업한 초등학교를 입력해주세요(비밀번호 수정을 위해 사용됩니다.)
          </label>
          <input
            required
            type="text"
            value={Question}
            placeholder="졸업한 초등학교를 입력해주세요"
            onChange={QuestionHandler}
          />

          <label>프로필사진</label>
          <input
            required
            name="image"
            type="file"
            placeholder="프로필 사진을 등록하세요"
            onChange={ImgUploadHandler}
          />
          <label>이메일</label>

          <input
            required
            type="email"
            value={Email}
            onChange={EmailHandler}
            placeholder="인증번호 발송을 위한 이메일을 입력하세요"
          />
          {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
          {LoadingStatus && <LoadingModal />}
          {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}

          <button onClick={JobSeekrSubmitHandler}>
            이메일 인증번호를 받으시고 회원가입을 완료하세요
          </button>

          {/* 이메일 인증코드 오면 true로 바뀌어서 보여주기 */}
          {JobSeekerEmailInput ? (
            <div>
              <h4>회원 가입을 위한 인증번호 입니다.</h4>
              <h4>아래 인증 번호를 입력하여 인증을 완료해주세요.</h4>
              <input
                required
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
  } else if (RegisterDisplay === "company") {
    return (
      <div>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>
        <button onClick={ChangeKaKaoDisplay}>카카오 회원가입</button>

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

          <label>비밀번호 확인</label>
          <input
            required
            type="password"
            value={ConfirmPassword}
            onChange={ConfirmPasswordHandler}
            placeholder="비밀번호를 한번 더 입력하세요"
          />

          <label>이메일</label>

          <input
            required
            type="email"
            value={CompanyEmail}
            onChange={CompanyEmailHandler}
            placeholder="인증번호 발송을 위한 이메일을 입력하세요"
          />

          <label>사업자 위치</label>
          {/* 위치 검색할수있는 input */}
          <input
            type="text"
            onClick={onChangeOpenPost}
            placeholder="클릭하셔서 사업자 위치를 검색해주세요"
            value={addressDetail}
          />
          {isOpenPost ? (
            <DaumPostcode
              style={postCodeStyle}
              autoClose
              onComplete={onCompletePost}
            />
          ) : null}
          {/* 위치 검색할수있는 input */}

          <label>사업자 번호</label>

          <input
            required
            type="text"
            value={BusinessNumber}
            onChange={BusinessNumberHandler}
            placeholder="-를 제외하고 사업자번호를 입력하세요"
          />
          <label>사업자명</label>

          <input
            required
            type="text"
            value={CompanyName}
            onChange={CompanyNameHandler}
            placeholder="사업자명을 입력하세요"
          />
          <label>
            자사 상품의 핵심 상품을 적어주세요(비밀번호 수정을 위해 사용됩니다.)
          </label>
          <input
            required
            type="text"
            value={Question}
            placeholder="자사 상품의 핵심 상품을 적어주세요"
            onChange={QuestionHandler}
          />

          {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
          {LoadingStatus && <LoadingModal />}
          {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}

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
  } else {
    // 카카오 회원가입
    return (
      <>
        <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
        <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>
        <button onClick={ChangeKaKaoDisplay}>카카오 회원가입</button>
        <KakaoR />
      </>
    );
  }
}

export default withRouter(RegisterPage);

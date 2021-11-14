import React, { useEffect, useState } from "react";
import { registerCompany, registerJobSeeker } from "../_actions/user_action";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import DaumPostcode from "react-daum-postcode";
import LoadingModal from "../components/LoadingModal";
import NavBar from "../components/NavBar";
import "./RegisterPage.css";
import Footer from "../components/Footer";

function RegisterPage(props) {
  const [RegisterDisplay, setRegisterDisplay] = useState("jobseeker");
  // true : 구직자 , false : 사업자

  // 카카오 주소검색 API 활용 공간
  const [address, setAddress] = useState(""); // 주소
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const [isOpenPost, setIsOpenPost] = useState(false);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [fileSelect, setFileSelect] = useState("등록한 사진이 없습니다");

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = data => {
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
    right: "70px",
    width: "400px",
    height: "400px",
  };
  // 카카오 주소검색 API 활용 공간

  // 구직자

  const [JobSeekerEmailInput, setJobSeekerEmailInput] = useState(false);
  const [JobSeekerAuthCode, setJobSeekerAuthCode] = useState(null);
  const [JobSeekerInputAuthCode, setJobSeekerInputAuthCode] = useState(null);
  const [JobSeekerIdCheck, setJobSeekerIdCheck] = useState([]);
  const [JobIdSame, setJobIdSame] = useState(false);

  // 사업자

  const [CompanyEmailInput, setCompanyEmailInput] = useState(false);
  const [CompanyAuthCode, setCompanyAuthCode] = useState(null);
  const [CompanyInputAuthCode, setCompanyInputAuthCode] = useState(null);
  const [CompanyIdCheck, setCompanyIdCheck] = useState([]);
  const [CompanyIdSame, setCompanyIdSame] = useState(false);

  // 회원가입 입력정보
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PasswordWarn, setPasswordWarn] = useState(false);
  const [Name, setName] = useState("");
  const [Age, setAge] = useState(null);
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState(""); //select
  const [CompanyEmail, setCompanyEmail] = useState("");
  const [Question, setQuestion] = useState("");
  const [CompanyName, setCompanyName] = useState("");
  const [BusinessNumber, setBusinessNumber] = useState("");
  const [isOpenJobSeeker, setIsOpenJobSeeker] = useState(false);

  // 이미지 업로드 테스트

  const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [Content, setContent] = useState("");
  const [FilePath, setFilePath] = useState("");


  // checkbox
  const [CheckBox, setCheckBox] = useState(false);

  // 회원가입 실패, 인증 번호 다를때 ,이용약관 누르지 않았을때 에러 state
  const [RegisterWarn, setRegisterWarn] = useState(false);
  const [AutchCodeWarn, setAutchCodeWarn] = useState(false);
  const [CheckBoxWarn, setCheckBoxWarn] = useState(false);

  const ImgUploadHandler = (e) => {
    // console.log(e.target.files);
    setContent(e.target.files[0]);
    setFileSelect(e.target.files[0].name);
  };

  const [Logo, setLogo] = useState("");
  const [LogoPath, setLogoPath] = useState("");

  const logoUploadHandler = (e) => {
    // console.log(e.target.files);
    setLogo(e.target.files[0]);
  };

  // 이미지 업로드 테스트

  const dispatch = useDispatch();

  const ChangeJobDisplay = () => {
    setRegisterDisplay("jobseeker");
    setIsOpenJobSeeker(!isOpenJobSeeker);
  };

  const ChangeCompanyDisplay = () => {
    setRegisterDisplay("company");
  };
  const ChangeKaKaoDisplay = () => {
    setRegisterDisplay("kakao");
  };


  const JobIdHandler = (e) => {
    setId(e.target.value);
  };
  const CompanyIdHandler = (e) => {

    setId(e.target.value);
  };
  const PasswordHandler = e => {
    setPassword(e.target.value);
  };
  const ConfirmPasswordHandler = e => {
    setConfirmPassword(e.target.value);
    setPasswordWarn(e.target.value !== Password);
  };
  const NameHandler = e => {
    setName(e.target.value);
  };
  const EmailHandler = e => {
    setEmail(e.target.value);
  };

  const CompanyEmailHandler = e => {
    setCompanyEmail(e.target.value);
  };
  const AgeHandler = e => {
    setAge(e.target.value);
  };
  const genderHandler = e => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };
  const QuestionHandler = e => {
    setQuestion(e.target.value);
  };
  const CompanyNameHandler = e => {
    setCompanyName(e.target.value);
  };

  const BusinessNumberHandler = e => {
    setBusinessNumber(e.target.value);
  };

  // 인증번호 입력란
  const InputHandler = e => {
    setJobSeekerInputAuthCode(e.target.value);
    setAutchCodeWarn(e.target.value === JobSeekerAuthCode);
  };

  const CompanyInputHandler = e => {
    setCompanyInputAuthCode(e.target.value);
    setAutchCodeWarn(e.target.value === CompanyAuthCode);
  };
  // 구직자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입


  const checkBoxHandler = (e) => {
    setCheckBox(e.target.checked);
    setCheckBoxWarn(!e.target.checked);
    // console.log(e.target.checked); check되면 true
  };

  const JobSeekrSubmitHandler = (e) => {

    e.preventDefault();
    setLoadingStatus(true);
    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);
    // 로컬 s3 테스트
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/uploads3`, formData, {
        header: { "content-type": "multipart/form-data" },
      })
      .then(res => {
        console.log(res.data);
        setFilePath(res.data.fileName);
      })
      .catch(error => {
        console.error(error);
      });
    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    let authEmailData = {
      email: Email,
      //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함
    };

    //   redux
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/mail`, authEmailData, {
        withCredentials: true,
      })
      .then(res => {
        // console.log(res.data);
        setLoadingStatus(false);
        setJobSeekerEmailInput(true);
        setJobSeekerAuthCode(res.data);
      });
  };

  const finalJobSeekerSubmitHandler = e => {
    e.preventDefault();
    console.log(typeof Gender, "남자");

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
      // console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
      setPasswordWarn(true);
    } else {

      if (CheckBox) {
        setPasswordWarn(false);
        if (JobSeekerAuthCode === parseInt(JobSeekerInputAuthCode)) {
          dispatch(registerJobSeeker(submitData))
            .then((res) => {
              // console.log(res.payload);
              if (res.payload.registersuccess) {
                props.history.push("/login");
                setJobIdSame(false);
                setRegisterWarn(false);
                setAutchCodeWarn(false);
                setCheckBoxWarn(false);
              }
            })
            .catch((err) => {
              setJobIdSame(true);
            });
        } else {
          console.log("인증번호가 다릅니다");
          setAutchCodeWarn(true);
        }

      } else {
        console.log("이용약관에 동의해주세요");
        setCheckBoxWarn(true);
      }
    }
  };

  // 사업자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입

  const CompanySubmitHandler = e => {
    e.preventDefault();
    // 회원가입할때 Db에 type이라는 field를 한개 추가
    setLoadingStatus(true);

    const formData = new FormData();
    formData.append("image", Logo);
    console.log(formData);

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/uploads3`, formData, {
        header: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setLogoPath(res.data.fileName);
        // 이부분도 수정
      })
      .catch((error) => {
        console.error(error);
      });
    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    let authEmailData = {
      email: CompanyEmail,
      //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/mail`, authEmailData, {
        withCredentials: true,
      })
      .then(res => {
        // console.log(res.data);
        setLoadingStatus(false);

        setCompanyEmailInput(true);
        setCompanyAuthCode(res.data);
      });
  };

  const finalCompanySubmitHandler = e => {
    e.preventDefault();

    let submitData = {
      userId: Id,
      password: Password,
      email: Email,
      companyName: CompanyName,
      location: addressDetail,
      businessNumber: BusinessNumber,
      logo: LogoPath,
      question: Question,
    };
    //   redux
    if (Password !== ConfirmPassword) {
      console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
      setPasswordWarn(true);
    } else {

      if (CheckBox) {
        setPasswordWarn(false);
        if (CompanyAuthCode === parseInt(CompanyInputAuthCode)) {
          dispatch(registerCompany(submitData))
            .then((res) => {
              // console.log(res.payload);
              if (res.payload.registersuccess) {
                setCompanyIdSame(false);
                props.history.push("/login");
                setRegisterWarn(false);
                setAutchCodeWarn(false);
                setCheckBoxWarn(false);
              }
            })
            .catch((err) => {
              setCompanyIdSame(true);
            });
        } else {
          console.log("인증번호가 다릅니다");
          setAutchCodeWarn(true);
        }
      } else {
        console.log("이용약관에 동의해주세요");
        setCheckBoxWarn(true);

      }
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/jobseeker/getall`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data && res.data.userId) {
          setJobSeekerIdCheck(res.data.userId);
        }
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/company/getall`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data && res.data.userId) {
          setCompanyIdCheck(res.data.userId);
        }
      });
  }, []);

 if (RegisterDisplay === "jobseeker") {
    return (
      <>
        <NavBar />
        <div className="jobseeker-container">
          <div className="jobseeker-wrapper">
            <button className="hover" onClick={ChangeJobDisplay}>
              구직자 회원가입
            </button>
            <button onClick={ChangeCompanyDisplay}>사업자 회원가입</button>
          </div>

          <div className="jobseeker-submit-wrapper">
            <form
              className="jobseeker-form"
              onSubmit={finalJobSeekerSubmitHandler}
              encType="multipart/form-data"
            >
              <div className="jobseeker-title">구직자 회원가입</div>

              <div className="jobseeker-submit-form">
                <div className="jobseeker-register-wrapper">
                  <div>아이디</div>
                  <input
                    required
                    type="text"
                    value={Id}
                    onChange={JobIdHandler}
                    placeholder="아이디"
                  />
                  {JobIdSame ? (
                    <div style={{ color: "red" }}>
                      중복된 아이디가 있습니다.
                    </div>
                  ) : null}
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>비밀번호</div>
                  <input
                    required
                    type="password"
                    value={Password}
                    onChange={PasswordHandler}
                    placeholder="비밀번호"
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>비밀번호 확인</div>
                  <input
                    required
                    type="password"
                    value={ConfirmPassword}
                    onChange={ConfirmPasswordHandler}
                    placeholder="비밀번호 확인"
                  />
                  {PasswordWarn ? (
                    <div style={{ color: "red" }}>
                      비밀번호가 서로 다릅니다.
                    </div>
                  ) : null}
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>이름</div>

                  <input
                    required
                    type="text"
                    value={Name}
                    onChange={NameHandler}
                    placeholder="이름"
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>나이</div>

                  <input
                    required
                    type="number"
                    value={Age}
                    onChange={AgeHandler}
                    placeholder="    나이"
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>성별</div>
                  <select onChange={genderHandler}>
                    <option value="">성별을 선택해주세요</option>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                  </select>
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>졸업한 초등학교를 입력해주세요</div>
                  <div style={{ color: "rgb(63, 71, 82)", fontWeight: "400" }}>
                    비밀번호 수정을 위해 사용 됩니다
                  </div>
                  <input
                    required
                    type="text"
                    value={Question}
                    placeholder="졸업한 초등학교를 입력해주세요"
                    onChange={QuestionHandler}
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>프로필사진</div>
                  <input
                    className="upload-name"
                    value={fileSelect}
                    disabled="disabled"
                  />
                  <label for="file-upload">사진 업로드</label>
                  <input
                    required
                    className="upload-hidden"
                    id="file-upload"
                    name="image"
                    type="file"
                    placeholder="프로필 사진을 등록하세요"
                    onChange={ImgUploadHandler}
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  <div>이메일</div>

                  <input
                    required
                    type="email"
                    value={Email}
                    onChange={EmailHandler}
                    placeholder="인증번호 발송을 위한 이메일을 입력하세요"
                  />
                </div>
                <div className="jobseeker-register-wrapper">
                  {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
                  {LoadingStatus && <LoadingModal />}
                  {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
                  <button onClick={JobSeekrSubmitHandler}>인증하기</button>

                  {/* 이메일 인증코드 오면 true로 바뀌어서 보여주기 */}
                  {JobSeekerEmailInput ? (
                    <div
                      className="email-wrapper"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1rem",
                          marginBottom: "0px",
                          fontWeight: 900,
                        }}
                      >
                        회원 가입을 위한 인증번호 입니다.
                      </div>
                      <div style={{ fontSize: "0.9rem" }}>
                        아래 인증 번호를 입력하여 인증을 완료해주세요.
                      </div>
                      <input
                        required
                        type="text"
                        placeholder="인증번호를 입력하세요"
                        style={{ width: "250px" }}
                        value={JobSeekerInputAuthCode}
                        onChange={InputHandler}
                      />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ flex: 2, fontSize: "0.9rem" }}>
                          이용약관에 동의하시면 클릭해주세요
                        </div>
                        <input
                          style={{ flex: 1, transform: "scale(0.6)" }}
                          type="checkbox"
                          onChange={checkBoxHandler}
                        />
                      </div>
                      {AutchCodeWarn ? (
                        <div style={{ color: "red", fontSize: "0.9rem" }}>
                          입력하신 인증번호가 올바르지 않습니다.
                        </div>
                      ) : null}
                      {CheckBoxWarn ? (
                        <div
                          style={{
                            color: "red",
                            fontSize: "0.9rem",
                            margin: "0px",
                          }}
                        >
                          이용약관에 동의해주세요.
                        </div>
                      ) : null}
                      <button type="submit">회원가입</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  } else if (RegisterDisplay === "company") {
    return (
      <>
        <NavBar />
        <div className="company-container">
          <div className="company-wrapper">
            <button onClick={ChangeJobDisplay}>구직자 회원가입</button>
            <button className="hover" onClick={ChangeCompanyDisplay}>
              사업자 회원가입
            </button>
          </div>

          <div className="company-submit-wrapper">
            <form className="company-form" onSubmit={finalCompanySubmitHandler}>
              <div className="company-title">사업자 회원가입</div>
              <div className="company-submit-form">
                <div className="company-register-wrapper">
                  <div>아이디</div>
                  <input
                    required
                    type="text"
                    value={Id}
                    onChange={CompanyIdHandler}
                    placeholder="아이디"
                  />
                  {CompanyIdSame ? (
                    <div style={{ color: "red" }}>
                      중복된 아이디가 있습니다.
                    </div>
                  ) : null}
                </div>
                <div className="company-register-wrapper">
                  <div>비밀번호</div>
                  <input
                    required
                    type="password"
                    value={Password}
                    onChange={PasswordHandler}
                    placeholder="비밀번호"
                  />
                </div>
                <div className="company-register-wrapper">
                  <div>비밀번호 확인</div>
                  <input
                    required
                    type="password"
                    value={ConfirmPassword}
                    onChange={ConfirmPasswordHandler}
                    placeholder="비밀번호 확인"
                  />
                  {PasswordWarn ? (
                    <div style={{ color: "red" }}>
                      비밀번호가 서로 다릅니다.
                    </div>
                  ) : null}
                </div>

                <div className="company-register-wrapper">
                  <div>사업자 위치</div>
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
                </div>
                <div className="company-register-wrapper">
                  <div>사업자 번호</div>

                  <input
                    required
                    type="text"
                    value={BusinessNumber}
                    onChange={BusinessNumberHandler}
                    placeholder="-를 제외하고 사업자번호를 입력하세요"
                  />
                </div>
                <div className="company-register-wrapper">
                  <div>사업자명</div>

                  <input
                    required
                    type="text"
                    value={CompanyName}
                    onChange={CompanyNameHandler}
                    placeholder="사업자명"
                  />
                </div>
                <div className="company-register-wrapper">
                  <div>자사 상품의 핵심 상품을 적어주세요</div>
                  <div style={{ color: "rgb(63, 71, 82)", fontWeight: "400" }}>
                    비밀번호 수정을 위해 사용 됩니다
                  </div>
                  <input
                    required
                    type="text"
                    value={Question}
                    placeholder="자사 상품의 핵심 상품을 적어주세요"
                    onChange={QuestionHandler}
                  />
                </div>
                <div className="company-register-wrapper">
                  <div>이메일</div>

                  <input
                    required
                    type="email"
                    value={CompanyEmail}
                    onChange={CompanyEmailHandler}
                    placeholder="인증번호 발송을 위한 이메일을 입력하세요"
                  />
                </div>
                <div className="company-register-wrapper">
                  {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
                  {LoadingStatus && <LoadingModal />}
                  {/* 인증 버튼 누른 후 이메일 올때까지 Loading Modal */}
                  <button onClick={CompanySubmitHandler}>인증하기</button>
                  {/* 이메일 인증코드 오면 true로 바뀌어서 보여주기 */}
                  {CompanyEmailInput ? (
                    <div
                      className="email-wrapper"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: "100%",
                        margin: "0px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "1rem",
                          marginBottom: "0px",
                          fontWeight: 900,
                        }}
                      >
                        회원 가입을 위한 인증번호 입니다.
                      </div>
                      <div style={{ fontSize: "0.9rem" }}>
                        아래 인증 번호를 입력하여 인증을 완료해주세요.
                      </div>
                      <input
                        type="text"
                        placeholder="인증번호를 입력하세요"
                        style={{ width: "250px" }}
                        value={CompanyInputAuthCode}
                        onChange={CompanyInputHandler}
                      />
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          className="email-auth-text"
                          style={{ flex: 2, fontSize: "0.9rem" }}
                        >
                          이용약관에 동의하시면 클릭해주세요
                        </div>
                        <input
                          style={{ flex: 1, transform: "scale(0.6)" }}
                          type="checkbox"
                          onChange={checkBoxHandler}
                        />
                      </div>
                      {AutchCodeWarn ? (
                        <div style={{ color: "red", fontSize: "0.9rem" }}>
                          입력하신 인증번호가 올바르지 않습니다.
                        </div>
                      ) : null}
                      {CheckBoxWarn ? (
                        <div
                          style={{
                            color: "red",
                            fontSize: "0.9rem",
                            margin: "0px",
                          }}
                        >
                          이용약관에 동의해주세요.
                        </div>
                      ) : null}
                      <button type="submit">회원가입</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default withRouter(RegisterPage);

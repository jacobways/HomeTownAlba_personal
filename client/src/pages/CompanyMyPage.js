import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DeleteJobModal from "../components/MyPageModal/Modal_DeleteJob";
import RejectApplyModal from "../components/MyPageModal/Modal_RejectApply";
import AcceptApplyModal from "../components/MyPageModal/Modal_AcceptApply";
import ApplicantInfoModal from "../components/MyPageModal/Modal_ApplicantInfo";
import WithdrawCompanyModal from "../components/MyPageModal/Modal_WithdrawCompany";
import DaumPostcode from "react-daum-postcode";
import NavBar from "../components/NavBar";

const { kakao } = window;

// 사업자 마이페이지
export default function CompanyMyPage(props) {
  const history = useHistory();

  // company 회원 정보
  const [companyId, setCompanyId] = useState(0); // Company 테이블의 id이자 Job 테이블의 companyId

  // Company 테이블의 나머지 정보
  const [companyName, setCompanyName] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [businessNumber, setBusinessNumber] = useState("");
  const [Logo, setLogo] = useState("");

  // 이미지 수정을 위한 변수 선언
  const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [Content, setContent] = useState("");
  const [FilePath, setFilePath] = useState("");
  // 이미지 수정을 위한 변수 선언

  // 사업자위치 state
  const [isOpenCompanyPost, setIsOpenCompanyPost] = useState(false);
  const [companyZipCode, setCompanyZipCode] = useState(""); // 회사 우편번호

  const [password, setPassword] = useState("");
  const [question, setQuestion] = useState("");

  // company 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)
  const [companyInfoUpdating, setCompanyInfoUpdating] = useState(false);

  const [passwordUpdating, setPasswordUpdating] = useState(false); // 비밀 번호를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(""); // 비밀번호 입력 실패시 메세지

  // job 정보
  const [jobLocation, setJobLocation] = useState(""); // DB에 등록될 일자리 주소
  const [isOpenJobPost, setIsOpenJobPost] = useState(false);
  const [jobZipCode, setJobZipCode] = useState(""); // 우편번호
  const [latitude, setLatitude] = useState(0); // 일자리의 위치의 위도
  const [longitude, setLongitude] = useState(0); // 일자리 위치의 경도

  const [day, setDay] = useState([]);
  const [mon, setMon] = useState([]);
  const [tue, setTue] = useState([]);
  const [wed, setWed] = useState([]);
  const [thu, setThu] = useState([]);
  const [fri, setFri] = useState([]);
  const [sat, setSat] = useState([]);
  const [sun, setSun] = useState([]);
  const [monChecked, setMonChecked] = useState(false);
  const [tueChecked, setTueChecked] = useState(false);
  const [wedChecked, setWedChecked] = useState(false);
  const [thuChecked, setThuChecked] = useState(false);
  const [friChecked, setFriChecked] = useState(false);
  const [satChecked, setSatChecked] = useState(false);
  const [sunChecked, setSunChecked] = useState(false);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [position, setPosition] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");

  // jobList, applicantList, showing 상태 등 상태로 관리
  const [jobList, setJobList] = useState("");
  const [applicantList, setApplicantList] = useState({}); // 객체이며 key 는 idx 값
  const [showingApplicantList, setShowingApplicantList] = useState({});
  const [applyStatusList, setApplyStatusList] = useState({});
  const [List, setList] = useState(false);
  const [eventStatus, setEventStatus] = useState(false); // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state
  const [ImgUploadBtn, setImgUploadBtn] = useState(false);
  // company 회원 정보 수정용
  const companyNameHandler = event => {
    setCompanyName(event.target.value);
  };

  const businessNumberHandler = event => {
    setBusinessNumber(event.target.value);
  };


  const imageHandler = (event) => {
    if (event.target) {
      setContent(event.target.files[0]);
      setImgUploadBtn(true);
    } else {
      setContent(FilePath);
    }

  };

  // company 사업자 위치 수정창 오픈
  const OpenCompanyPost = () => {
    setIsOpenCompanyPost(!isOpenCompanyPost);
  };

  const CancelCompanyPost = () => {
    setIsOpenCompanyPost(false);
  };

  // 카카오 지도 API 활용하여 주소 선택 후 닫기
  const CompleteCompanyPost = data => {
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
    setCompanyZipCode(data.zonecode);
    setCompanyLocation(fullAddr);
    setIsOpenCompanyPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    left: "110px",
  };
  // 카카오 주소검색 API 활용 공간

  // company 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)
  const companyHandler = () => {
    setCompanyInfoUpdating(!companyInfoUpdating);
  };

  const listHandler = () => {
    setList(!List);
  };
  // company 업데이트 하기
  // 이미지 업로드용 핸들러 따로 만들기
  const upoadImage = () => {
    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);

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
  };

  const updateCompany = () => {

    if (FilePath) {
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/company`,
          {
            id: companyId,
            companyName,
            location: companyLocation,
            businessNumber,
            logo: FilePath,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setEventStatus(!eventStatus);
          setCompanyInfoUpdating(!companyInfoUpdating);
          setImgUploadBtn(false);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/company`,
          {
            id: companyId,
            companyName,
            location: companyLocation,
            businessNumber,
          },
          { withCredentials: true }
        )
        .then((res) => {
          setEventStatus(!eventStatus);
          setCompanyInfoUpdating(!companyInfoUpdating);
          setImgUploadBtn(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }

  };

  // 비밀번호를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)
  const OpenPasswordUpdate = () => {
    setPasswordUpdating(!passwordUpdating);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  const questionHandler = event => {
    setQuestion(event.target.value);
  };

  // password 업데이트 하기
  const UpdatePassword = () => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/company/password`,
        {
          password,
          question,
        },
        { withCredentials: true }
      )
      .then(res => {
        setPasswordUpdating(!passwordUpdating);
        setPassword("");
        setQuestion("");
        setPasswordErrorMessage("");
      })
      .catch(err => {
        setPasswordErrorMessage("질문의 답이 올바르지 않습니다");
      });
  };

  const CancelUpdatePassword = () => {
    // 비밀번호 업데이트 취소
    setPasswordUpdating(!passwordUpdating);
    setPassword("");
    setQuestion("");
    setPasswordErrorMessage("");
  };

  // company 회원 정보 탈퇴 기능 넣기
  const WithdrawCompany = () => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/company`, {
      withCredentials: true,
    }); // company 회원정보 삭제
    axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/job`,
      { params: { companyId } },
      { withCredentials: true }
    ); // company의 job과 관련 applicant 모두 삭제
    history.push("/map");
  };

  // job 정보 생성 및 수정용

  // company 사업자 위치 수정창 오픈
  const OpenJobPost = () => {
    setIsOpenJobPost(!isOpenJobPost);
  };

  const CancelJobPost = () => {
    setIsOpenJobPost(false);
  };

  // 카카오 지도 API 활용하여 Job 주소 선택 후 닫기
  const CompleteJobPost = data => {
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

    setJobZipCode(data.zonecode);
    setJobLocation(fullAddr);
    setIsOpenJobPost(false);
    ChangeLocationToCoordinate(fullAddr);
  };

  // 카카오 API를 통해 주소를 위도와 경도로 좌표로 저장하기
  const ChangeLocationToCoordinate = location => {
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(location, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLatitude(result[0].y);
        setLongitude(result[0].x);
      }
    });
  };

  // check된 요일을 day state에 모아주기
  const dayHandler = () => {
    setDay([...mon, ...tue, ...wed, ...thu, ...fri, ...sat, ...sun]);
  };

  const monHandler = () => {
    if (!monChecked) {
      setMon(["월"]);
    } else {
      setMon([]);
    }
    setMonChecked(!monChecked);
  };

  const tueHandler = () => {
    if (!tueChecked) {
      setTue(["화"]);
    } else {
      setTue([]);
    }
    setTueChecked(!tueChecked);
  };

  const wedHandler = () => {
    if (!wedChecked) {
      setWed(["수"]);
    } else {
      setWed([]);
    }
    setWedChecked(!wedChecked);
  };

  const thuHandler = () => {
    if (!thuChecked) {
      setThu(["목"]);
    } else {
      setThu([]);
    }
    setThuChecked(!thuChecked);
  };

  const friHandler = () => {
    if (!friChecked) {
      setFri(["금"]);
    } else {
      setFri([]);
    }
    setFriChecked(!friChecked);
  };

  const satHandler = () => {
    if (!satChecked) {
      setSat(["토"]);
    } else {
      setSat([]);
    }
    setSatChecked(!satChecked);
  };

  const sunHandler = () => {
    if (!sunChecked) {
      setSun(["일"]);
    } else {
      setSun([]);
    }
    setSunChecked(!sunChecked);
  };

  const startTimeHandler = event => {
    setStartTime(event.target.value);
  };

  const endTimeHandler = event => {
    setEndTime(event.target.value);
  };

  const positionHandler = event => {
    setPosition(event.target.value);
  };

  const hourlyWageHandler = event => {
    setHourlyWage(event.target.value);
  };

  // state에 저장한 정보를 바탕으로 일자리 생성하기
  const createJob = () => {
    if (
      !jobLocation ||
      day.length === 0 ||
      !startTime ||
      !endTime ||
      !position ||
      !hourlyWage
    ) {
      alert("모든 항목에 데이터를 입력해주세요");
    } else {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URL}/job`,
          {
            companyId,
            companyName,
            location: jobLocation,
            latitude,
            longitude,
            day,
            startTime,
            endTime,
            position,
            hourlyWage,
          },
          { withCredentials: true }
        )
        .then(res => {
          setEventStatus(!eventStatus);
        });
    }
  };

  // 일자리 삭제하기
  const DeleteJob = jobId => {
    // 일자리에 묶인 지원자들도 삭제하기 + 메일 보내기
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/applicant`,
        { params: { jobId } },
        { withCredentials: true }
      )
      .then(res => {
        // Applicant를 삭제 후 해당 Job을 삭제하기 (Applicant 메일 발송 시 Job 정보가 필요하기 때문)
        axios
          .delete(`${process.env.REACT_APP_SERVER_URL}/job/${jobId}`, {
            withCredentials: true,
          })
          .then(res => {
            setEventStatus(!eventStatus);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
        // 삭제할 applicant가 없을 때 해당 Job을 삭제하기 (Applicant 메일 발송 시 Job 정보가 필요하기 때문)
        axios
          .delete(`${process.env.REACT_APP_SERVER_URL}/job/${jobId}`, {
            withCredentials: true,
          })
          .then(res => {
            setEventStatus(!eventStatus);
          })
          .catch(err => {
            console.log(err);
          });
      });
  };

  // 각 일자리별 지원자를 applicantList state에 저장
  // applicantList는 객체 형태로 key는 idx(jobList 상태의 요소인 job을 map으로 불러올 때 사용되는 index)
  // 값은 res를 통해 불러온 jobSeeker 정보
  // 지원자가 없는 Job은 해당 key(인덱스)와 값이 applicantList 객체에 저장되지 않음
  // applicantList의 형태 예시 : {0: [jobSeeker1, jobSeeker2, JobSeeker3], 1: [JobSeeker1], 3: [Jobseeker4]}
  const openApplicantList = (idx, jobId) => {
    setShowingApplicantList({ ...showingApplicantList, [idx]: true });
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/applicant/jobseeker/${jobId}`, {
        withCredentials: true,
      })
      .then(res => {
        // bracket notation으로는 값이 저장되지 않아 구조분해할당 사용
        console.log("res.data.applyStatus----", res.data.applyStatus);
        if (res.data.data.length !== 0) {
          setApplicantList({ ...applicantList, [idx]: res.data.data });
          setApplyStatusList({
            ...applyStatusList,
            [idx]: res.data.applyStatus,
          });
        } else {
          setApplicantList({ ...applicantList, [idx]: null });
          setApplyStatusList({ ...applyStatusList, [idx]: null });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // applicantList 닫는 핸들러
  const closeApplicantList = idx => {
    setShowingApplicantList({ ...showingApplicantList, [idx]: false });
  };

  // 자원자에 대해 지원 거절
  const RejectApply = (idx, jobId, jobSeekerId) => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/applicant`,
        { jobId, jobSeekerId },
        { withCredentials: true }
      )
      .then(res => {
        openApplicantList(idx, jobId);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 지원자에 대해 지원 승인
  const AcceptApply = (idx, jobId, jobSeekerId) => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/applicant/status`,
        { jobId, jobSeekerId },
        { withCredentials: true }
      )
      .then(res => {
        openApplicantList(idx, jobId);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    // company 정보 불러오기
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true })
      .then(res => {
        let companyInfo = res.data.user;
        setCompanyId(companyInfo.id);
        setCompanyName(companyInfo.companyName);
        setCompanyLocation(companyInfo.location);
        setBusinessNumber(companyInfo.businessNumber);
        setLogo(companyInfo.logo);
      })
      .catch(err => {
        console.log(err);
      });

    // job 정보 받기
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/job/${companyId}`, {
        withCredentials: true,
      })
      .then(res => {
        setJobList(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [companyId, eventStatus]);

  // 체크박스로 체크한 요일을 day에 담기 위한 기능
  useEffect(() => {
    dayHandler();
  }, [mon, tue, wed, thu, fri, sat, sun]);

  // 구인내역 클릭하면 지원자 현황 표시됨

  // 리다이렉트 테스트

  const [UserLoginType, setUserLoginType] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_serverURL}`, { withCredentials: true })
      .then(res => {
        console.log(res.data.user.type, typeof res.data.user.type);
        setUserLoginType(res.data.user.type);
        if (res.data.user && res.data.user.type) {
          console.log("로그인 된 상태");
        } else {
          props.history.push("/");
        }
      });
  }, [UserLoginType]);

 return (
    <>
      <NavBar />
      <div className="company-myPage-container">
        <div className="mypage">
          <h1>사업자 마이페이지</h1>
          <h2 className="header2">회사 정보</h2>
          {!companyInfoUpdating ? (
            <div className="user">
              <tbody>
                <table>
                  <tr>
                    <td>
                      <img id="profile" src={Logo} alt="logo" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">회사명</th>
                    <td>{companyName}</td>
                  </tr>
                  <tr>
                    <th scope="row">회사 주소</th>
                    <td>{companyLocation}</td>
                  </tr>
                  <tr>
                    <th scope="row">사업자등록번호</th>
                    <td>{businessNumber}</td>
                  </tr>
                </table>
                <button
                  id="left"
                  className="bubbly-button"
                  onClick={companyHandler}
                >
                  회원 정보 수정
                </button>
                {!passwordUpdating ? (
                  <button
                    className="bubbly-button"
                    onClick={OpenPasswordUpdate}
                  >
                    비밀번호 변경
                  </button>
                ) : (
                  <>
                    <input
                      className="jobFlow"
                      placeholder="출신 초등학교는?"
                      name="question"
                      type="text"
                      onChange={questionHandler}
                    />

                    <input
                      className="jobFlow"
                      placeholder="수정할 비밀번호"
                      name="password"
                      type="password"
                      onChange={passwordHandler}
                    />
                    <span>{passwordErrorMessage}</span>
                    <button
                      id="left"
                      className="bubbly-button"
                      onClick={UpdatePassword}
                    >
                      완료
                    </button>
                    <button
                      className="bubbly-button"
                      onClick={CancelUpdatePassword}
                    >
                      취소
                    </button>
                  </>
                )}
                <WithdrawCompanyModal WithdrawCompany={WithdrawCompany} />
              </tbody>
            </div>
          ) : (
            <div className="user">
              <tbody className="new">
                <tr>
                  <th scope="row">회사명</th>
                  <input
                    className="jobFlow"
                    placeholder="회사명"
                    name="name"
                    type="text"
                    onChange={companyNameHandler}
                    value={companyName}
                  />
                </tr>
                <tr>
                  <th scope="row">회사 주소</th>
                  {/* <td className="jobFlow">{companyLocation}</td>
            <button className="bubbly-button" onClick={OpenCompanyPost}>주소창 열기</button> */}{" "}
                  <input
                    className="jobFlow"
                    name="location"
                    onClick={OpenJobPost}
                    placeholder={companyLocation}
                    value={jobLocation}
                  />
                  {isOpenJobPost ? (
                    <>
                      <DaumPostcode
                        onClick={OpenJobPost}
                        style={postCodeStyle}
                        autoClose
                        onComplete={CompleteJobPost}
                      />
                    </>
                  ) : null}
                  {isOpenCompanyPost ? (
                    <>
                      <DaumPostcode
                        onClick={OpenCompanyPost}
                        style={postCodeStyle}
                        autoClose
                        onComplete={CompleteCompanyPost}
                      />
                      <button
                        className="bubbly-button"
                        onClick={CancelCompanyPost}
                      >
                        주소창 닫기
                      </button>
                    </>
                  ) : null}
                  {/* 위치 검색할수있는 input */}
                </tr>
                <tr>
                  <th scope="row">사업자등록번호</th>
                  <input
                    className="jobFlow"
                    placeholder="사업자등록번호"
                    name="businessNumber"
                    type="text"
                    onChange={businessNumberHandler}
                    value={businessNumber}
                  />
                </tr>
                <tr>
                  <th scope="row">사진</th>
                  <input name="image" type="file" onChange={imageHandler} />
                </tr>
                <tr>
                  {ImgUploadBtn ? (
                    <button
                      id="left"
                      className="bubbly-button"
                      onClick={upoadImage}
                    >
                      이미지 업로드
                    </button>
                  ) : null}
                  <button className="bubbly-button" onClick={updateCompany}>
                    수정 완료
                  </button>
                </tr>
              </tbody>
              <br />
              <br />
              <br />
            </div>
          )}
          <br></br>

          <h2 className="header2">일자리 등록</h2>
          <div className="careerSection">
            <form>
              <label>
                {" "}
                근무 요일 :
                <input
                  name="day"
                  id="mon"
                  type="checkbox"
                  onClick={monHandler}
                />
                월
                <input
                  name="day"
                  id="tue"
                  type="checkbox"
                  onClick={tueHandler}
                />
                화
                <input
                  name="day"
                  id="wed"
                  type="checkbox"
                  onClick={wedHandler}
                />
                <label for="wed">수</label>
                <input
                  name="day"
                  id="thu"
                  type="checkbox"
                  onClick={thuHandler}
                />
                <label for="thu">목</label>
                <input
                  name="day"
                  id="fri"
                  type="checkbox"
                  onClick={friHandler}
                />
                <label for="fri">금</label>
                <input
                  name="day"
                  id="sat"
                  type="checkbox"
                  onClick={satHandler}
                />
                <label for="sat">토</label>
                <input
                  name="day"
                  id="sun"
                  type="checkbox"
                  onClick={sunHandler}
                />
                <label for="sun">일</label>
              </label>
              <br></br>
              <label>
                {" "}
                근무 시간 :
                <input
                  name="startTime"
                  type="time"
                  placeholder="시작 시간"
                  onChange={startTimeHandler}
                />
                <input
                  name="endTime"
                  type="time"
                  placeholder="끝 시간"
                  onChange={endTimeHandler}
                />
              </label>
              <br></br>
              <label>
                {" "}
                <input
                  className="jobFlow"
                  name="location"
                  onClick={OpenJobPost}
                  placeholder="클릭하셔서 주소를 검색해주세요"
                  value={jobLocation}
                />
                {isOpenJobPost ? (
                  <>
                    <DaumPostcode
                      onClick={OpenJobPost}
                      style={postCodeStyle}
                      autoClose
                      onComplete={CompleteJobPost}
                    />
                  </>
                ) : null}
              </label>
              <br></br>
              <label>
                {" "}
                <input
                  className="jobFlow"
                  placeholder="포지션"
                  name="position"
                  type="text"
                  onChange={positionHandler}
                />
              </label>
              <br></br>
              <label>
                {" "}
                <input
                  className="jobFlow"
                  placeholder="시급"
                  name="hourlyWage"
                  type="text"
                  onChange={hourlyWageHandler}
                />
              </label>

              {!jobLocation ||
              day.length === 0 ||
              !startTime ||
              !endTime ||
              !position ||
              !hourlyWage ? (
                <>
                  <button className="bubbly-button">제출</button>
                </>
              ) : (
                <input type="submit" value="제출" onClick={createJob} />
              )}
            </form>
            <br />
            <span>모든 항목을 입력해주세요</span>
          </div>
          <div className="job-list-title-wrapper">
            <h1 className="job-list-title">등록 일자리 목록</h1>
          </div>

          {jobList.length === 0 ? (
            <div className="careerSection">
              <h3>일자리 정보를 등록해주세요</h3>
            </div>
          ) : (
            <>
              {jobList.map((job, idx) => {
                return (
                  <div className="job-list-table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>구인 위치</th>
                          <th>포지션</th>
                          <th>시급</th>
                          <th>요일</th>
                          <th>시간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{job.location}</td>
                          <td>{job.position}</td>
                          <td>{job.hourlyWage}</td>
                          <td>{JSON.parse(job.day)}</td>
                          <td>
                            {job.startTime.slice(0, 5)}~
                            {job.endTime.slice(0, 5)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {!showingApplicantList[idx] ? (
                      <button
                        className="bubbly-button"
                        onClick={() => {
                          openApplicantList(idx, job.id);
                        }}
                      >
                        지원자 보기
                      </button>
                    ) : (
                      <>
                        <button
                          className="bubbly-button"
                          onClick={() => {
                            closeApplicantList(idx);
                          }}
                        >
                          지원자 숨기기
                        </button>
                        {!applicantList[idx] ? (
                          <h5>아직 지원자가 없습니다</h5>
                        ) : (
                          <table className="apply-table-container">
                            <thead>
                              <tr>
                                <th>이름</th>
                                <th>나이</th>
                                <th>성별</th>
                              </tr>
                            </thead>
                            {applicantList[idx].map((jobSeeker, number) => {
                              if (applyStatusList[idx]) {
                                if (
                                  applyStatusList[idx][number].status ===
                                  "waiting"
                                ) {
                                  return (
                                    <>
                                      <tbody>
                                        <tr key={jobSeeker.id}>
                                          <td>{jobSeeker.name}</td>
                                          <td>{jobSeeker.age}</td>
                                          <td>{jobSeeker.gender}</td>
                                        </tr>
                                      </tbody>
                                      <ApplicantInfoModal
                                        jobSeeker={jobSeeker}
                                      />
                                      <RejectApplyModal
                                        RejectApply={RejectApply}
                                        idx={idx}
                                        jobId={job.id}
                                        jobSeekerId={jobSeeker.id}
                                      />
                                      <AcceptApplyModal
                                        AcceptApply={AcceptApply}
                                        idx={idx}
                                        jobId={job.id}
                                        jobSeekerId={jobSeeker.id}
                                      />
                                    </>
                                  );
                                } else if (
                                  applyStatusList[idx][number].status ===
                                  "accepted"
                                ) {
                                  return (
                                    <tr key={jobSeeker.id}>
                                      <td>{jobSeeker.name}</td>
                                      <td>{jobSeeker.age}</td>
                                      <td>{jobSeeker.gender}</td>
                                      <ApplicantInfoModal
                                        jobSeeker={jobSeeker}
                                      />
                                      <RejectApplyModal
                                        RejectApply={RejectApply}
                                        idx={idx}
                                        jobId={job.id}
                                        jobSeekerId={jobSeeker.id}
                                      />
                                      <button className="bubbly-button">
                                        채팅창 열기
                                      </button>
                                    </tr>
                                  );
                                }
                              }
                            })}
                          </table>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

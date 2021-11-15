import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DeleteCareerModal from "../components/MyPageModal/Modal_DeleteCareer";
import CancelApplyModal from "../components/MyPageModal/Modal_CancelApply";
import WithdrawJobSeekerModal from "../components/MyPageModal/Modal_WithdrawJobseeker";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// 구직자 마이페이지
export default function JobSeekerMyPage(props) {
  const history = useHistory();

  // JobSeeker 테이블의 id이자, Career 테이블의 jobSeekerId
  const [jobSeekerId, setJobSeekerId] = useState(0);

  //경력사항 등록 버튼을 위한
  const [click, setClick] = useState(false);
  // JobSeeker 테이블의 나머지 정보
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  // 이미지 수정을 위한 변수 선언
  const BASE_URL = `${process.env.REACT_APP_SERVER_URL}`;
  const [Content, setContent] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [fileSelect, setFileSelect] = useState(null);
  // 이미지 수정을 위한 변수 선언

  const [password, setPassword] = useState("");
  const [question, setQuestion] = useState("");

  const [jobSeekerInfoUpdating, setJobSeekerInfoUpdating] = useState(false); // 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)

  const [passwordUpdating, setPasswordUpdating] = useState(false); // 비밀 번호를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(""); // 비밀번호 입력 실패시 메세지

  const [careerList, setCareerList] = useState([]); // career 정보 모두 불러와 배열로 저장

  // career 항목 나머지 개별 정보
  const [careerId, setCareerId] = useState("");
  const [company, setCompany] = useState("");
  const [period, setPeriod] = useState("");
  const [position, setPosition] = useState("");

  // 커리어 수정 버튼을 클릭 시, 업데이트 중인 상태를 저장 (키는 idx, 값은 true - 수정중)

  const [careerUpdating, setCareerUpdating] = useState({});

  const [applyList, setApplyList] = useState([]); // jobSeeker가 지원한 job 목록 보여주기

  const [resultList, setResultList] = useState([]); // 지원 결과가 나온 job 목록 보여주기
  const [statusList, setStatusList] = useState([]); // 지원 결과의 상태 보여주기
  console.log("resultList", resultList);
  console.log("statusList", statusList);

  const [eventStatus, setEventStatus] = useState(false); // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state
  const [ImgUploadBtn, setImgUploadBtn] = useState(false);
  // jobSeeker 정보 수정용
  const nameHandler = event => {
    setName(event.target.value);
  };

  const ageHandler = event => {
    setAge(event.target.value);
  };

  const genderHandler = event => {
    setGender(event.target.value);
  };

  const imageHandler = event => {
    // console.log(event.target.files);
    if (event.target) {
      setContent(event.target.files[0]);
      setFileSelect(event.target.files[0].name);
      setImgUploadBtn(true);
    } else {
      setContent(FilePath);
    }
  };
  //메인페이지 이동
  const home = () => {
    window.location.href = "/";
  };
  // 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)
  const jobSeekerHandler = () => {
    setJobSeekerInfoUpdating(!jobSeekerInfoUpdating);
  };

  const addCareer = () => {
    setClick(!click);
  };

  // jobSeeker 업데이트 하기
  // 이미지 업로드 구분
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

  const UpdateJobSeeker = () => {
    if (FilePath) {
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/jobseeker`,
          {
            id: jobSeekerId,
            name,
            age,
            gender,
            image: FilePath,
          },
          { withCredentials: true }
        )
        .then(res => {
          setEventStatus(!eventStatus);
          setJobSeekerInfoUpdating(!jobSeekerInfoUpdating);
          setImgUploadBtn(false);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/jobseeker`,
          {
            id: jobSeekerId,
            name,
            age,
            gender,
          },
          { withCredentials: true }
        )
        .then(res => {
          setEventStatus(!eventStatus);
          setJobSeekerInfoUpdating(!jobSeekerInfoUpdating);
          setImgUploadBtn(false);
        })
        .catch(error => {
          console.error(error);
        });
    }

    // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함
    // 분기처리 안된 이유 : 비동기(axios 2개가 동시에 실행이 되어, 콜백처리 및 분기처리 진행)
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
        `${process.env.REACT_APP_SERVER_URL}/jobseeker/password`,
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

  // jobSeeker 회원 정보 탈퇴 기능 넣기

  const WithdrawJobseeker = () => {
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/jobseeker`, {
      withCredentials: true,
    }); // jobSeeker 정보 삭제
    axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/career`,
      { params: { jobSeekerId } },
      { withCredentials: true }
    ); // career 정보 삭제
    axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/applicant`,
      { params: { jobSeekerId } },
      { withCredentials: true }
    ); // applicant 정보 삭제
    history.push("/map");
  };

  // 경력 정보 생성 및 수정 핸들러
  const companyHandler = event => {
    setCompany(event.target.value);
  };

  const periodHandler = event => {
    setPeriod(event.target.value);
  };

  const positionHandler = event => {
    setPosition(event.target.value);
  };

  // 경력 사항을 등록 하는 핸들러
  const createCareer = () => {
    axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/career`,
        {
          jobSeekerId,
          company,
          period,
          position,
        },
        { withCredentials: true }
      )
      .then(res => {
        setEventStatus(!eventStatus);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 경력 사항 '수정'을 위한 핸들러 (클릭 시 경력 정보 수정 가능)
  const careerHandler = (idx, id) => {
    // 클릭시 update 상태가 true로 바뀌며, 조건부 렌더링 진행
    setCareerUpdating({ ...careerUpdating, [idx]: true });

    // 수정하려는 커리어 해당 항목이 state에 담기기 (id 기반 axios 요청이 있어야 할 듯?)
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/career`,
        { params: { id } },
        { withCredentials: true }
      )
      .then(res => {
        let careerInfo = res.data.data; // 객체로 불러옴
        setCareerId(careerInfo.id);
        setCompany(careerInfo.company);
        setPeriod(careerInfo.period);
        setPosition(careerInfo.position);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // update할 내용이 입력된 후에 shubmit 용 핸들러
  const updateCareer = (idx, id) => {
    // 클릭시 해당 idx의 updating이 false 또는 삭제됨

    setCareerUpdating({ ...careerUpdating, [idx]: false });
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/career`,
        {
          id,
          jobSeekerId,
          company,
          period,
          position,
        },
        { withCredentials: true }
      )
      .then(res => {
        setEventStatus(!eventStatus);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteCareer = id => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/career/${id}`, {
        withCredentials: true,
      })
      .then(res => {
        setEventStatus(!eventStatus);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 지원 목록에서 지원을 취소하는 핸들러
  const CancelApply = jobId => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER_URL}/applicant`,
        { params: { jobId, jobSeekerId: jobSeekerId } },
        { withCredentials: true }
      )
      .then(res => {
        setEventStatus(!eventStatus);
      });
  };

  useEffect(() => {
    // JobSeeker 정보 받기 (동혁님 전달 코드)
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}`, { withCredentials: true })
      .then(res => {
        let jobSeekerInfo = res.data.user;
        setJobSeekerId(jobSeekerInfo.id);

        setName(jobSeekerInfo.name);
        setAge(jobSeekerInfo.age);
        setGender(jobSeekerInfo.gender);
        setImage(jobSeekerInfo.image);

        console.log(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });

    // Career 정보 받기
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/career/${jobSeekerId}`, {
        withCredentials: true,
      })
      .then(res => {
        setCareerList(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });

    // applicant 테이블 통해 지원한 jobList 받기
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/applicant/job/${jobSeekerId}`, {
        withCredentials: true,
      })
      .then(res => {
        setApplyList(res.data.data);
      });

    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/applicant/job`,
        { params: { jobSeekerId } },
        { withCredentials: true }
      )
      .then(res => {
        console.log("res----", res);
        setResultList(res.data.data);
        setStatusList(res.data.applyStatus);
      });
  }, [eventStatus, jobSeekerId]);

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
      <div className="jobseeker-myPage-container">
        <div className="jobseeker-myPage-wrapper">
          <h1>구직자 마이페이지</h1>
          <h2
            style={{
              borderBottom: "ridge",
              width: "100%",
              paddingBottom: "10px",
            }}
          >
            개인 기본 정보
          </h2>

          {!jobSeekerInfoUpdating ? (
            <div className="jobseeker-info">
              <div className="profile-wrapper">
                <img className="profile" src={image} alt="profile" />
                <div className="table">
                  <div className="table-wrapper">
                    <div>이름</div>
                    <div>{name}</div>
                  </div>
                  <div className="table-wrapper">
                    <div>나이</div>
                    <div>{age}</div>
                  </div>
                  <div className="table-wrapper">
                    <div>성별</div>
                    <div>{gender}</div>
                  </div>
                </div>
              </div>
              <div className="jobseeker-btn-container">
                <button className="login-btn" onClick={jobSeekerHandler}>
                  회원 정보 수정
                </button>
                {!passwordUpdating ? (
                  <button className="login-btn" onClick={OpenPasswordUpdate}>
                    비밀번호 변경
                  </button>
                ) : (
                  <>
                    <input
                      placeholder="출신 초등학교는?"
                      name="question"
                      type="text"
                      onChange={questionHandler}
                      style={{
                        height: "45px",
                        width: "235px",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    />
                    <input
                      placeholder="수정할 비밀번호"
                      name="password"
                      type="password"
                      onChange={passwordHandler}
                      style={{
                        height: "45px",
                        width: "235px",
                        marginTop: "10px",
                        textAlign: "center",
                      }}
                    />
                    <div className="myPage-mobal">
                      <button className="login-btn" onClick={UpdatePassword}>
                        완료
                      </button>
                      <button
                        className="login-btn"
                        onClick={CancelUpdatePassword}
                      >
                        취소
                      </button>
                    </div>
                  </>
                )}
              </div>
              <WithdrawJobSeekerModal WithdrawJobseeker={WithdrawJobseeker} />
            </div>
          ) : (
            <div className="jobseeker-info">
              <div className="profile-wrapper">
                <img className="profile" src={image} alt="profile" />
                <div className="table">
                  <div className="table-wrapper">
                    <div>이름</div>
                    <input
                      className="table-input"
                      name="name"
                      type="text"
                      onChange={nameHandler}
                      value={name}
                    />
                  </div>
                  <div className="table-wrapper">
                    <div>나이</div>
                    <input
                      className="table-input"
                      name="age"
                      type="text"
                      onChange={ageHandler}
                      value={age}
                    />
                  </div>
                  <div className="table-wrapper">
                    <div>성별</div>
                    <select className="table-select" onChange={genderHandler}>
                      <option value="">성별을 선택해주세요</option>
                      <option value="남자">남자</option>
                      <option value="여자">여자</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="jobseeker-btn-container-edit">
                <input
                  required
                  className="upload-name"
                  placeholder="사진을 등록해주세요"
                  style={{ textAlign: "center" }}
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
                  onChange={imageHandler}
                />
                {ImgUploadBtn ? (
                  <button onClick={upoadImage}>이미지 업로드</button>
                ) : null}
                <button type="button" onClick={UpdateJobSeeker}>
                  수정 완료
                </button>
              </div>
            </div>
          )}
          <div className="jobseeker-myPage-career-container">
            <h2
              style={{
                borderBottom: "ridge",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              경력 사항
            </h2>
            <div className="jobseeker-myPage-career">
              {careerList.length === 0 ? (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  등록된 경력 사항이 없습니다.
                </div>
              ) : (
                <>
                  <div className="jobseeker-myPage-career-wrapper">
                    <div className="workCom">근무 회사</div>
                    <div className="position">포지션</div>
                    <div className="month">기간(월)</div>
                  </div>
                  <div className="jobseeker-MyPage-career-wrapper">
                    {careerList.map((career, idx) => {
                      return (
                        <>
                          {!careerUpdating[idx] ? (
                            <>
                              <div className="career-wrapper" key={career.id}>
                                <div>{career.company}</div>
                                <div>{career.position}</div>
                                <div>{career.period}</div>
                              </div>
                              <div className="career-btn-wrapper">
                                <button
                                  className="login-btn"
                                  onClick={() => {
                                    careerHandler(idx, career.id);
                                  }}
                                >
                                  수정
                                </button>
                                <DeleteCareerModal
                                  deleteCareer={deleteCareer}
                                  id={career.id}
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="career-wrapper" key={career.id}>
                                <div>{career.company}</div>
                                <div>{career.position}</div>
                                <div>{career.period}</div>
                              </div>
                              <div className="career-edit-form" key={career.id}>
                                <input
                                  name="company"
                                  type="text"
                                  onChange={companyHandler}
                                  value={company}
                                />
                                <input
                                  name="position"
                                  type="text"
                                  onChange={positionHandler}
                                  value={position}
                                />
                                <input
                                  name="period"
                                  type="text"
                                  onChange={periodHandler}
                                  value={period}
                                />
                                <button
                                  className="career-submit-btn"
                                  onClick={() => {
                                    updateCareer(idx, career.id);
                                  }}
                                >
                                  수정 완료
                                </button>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="career-submit-btn-wrapper">
                <button className="career-submit-btn" onClick={addCareer}>
                  경력 사항 등록
                </button>
              </div>
              {click ? (
                <form className="career-submit-form">
                  <input
                    placeholder="근무회사명"
                    name="company"
                    type="text"
                    onChange={companyHandler}
                  />
                  <input
                    placeholder="포지션"
                    name="position"
                    type="text"
                    onChange={positionHandler}
                  />
                  <input
                    placeholder="근무기간(월) ex) 3"
                    name="period"
                    type="text"
                    onChange={periodHandler}
                  />
                  <div className="career-submit-btn-wrapper">
                    <input
                      className="login-btn"
                      type="submit"
                      value="등록"
                      onClick={createCareer}
                    />
                  </div>
                </form>
              ) : (
                <div></div>
              )}
            </div>
            <br></br>
            <h2
              style={{
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              지원 내역
            </h2>
            {applyList.length === 0 ? (
              <div className="careerSection">지원 내역이 없습니다</div>
            ) : (
              <div className="careerSection">
                <div className="job-list-table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>회사명</th>
                        <th>주소</th>
                        <th>근무요일</th>
                        <th>근무시간</th>
                        <th>시급</th>
                        <th>예상 월급여</th>
                        <th>포지션</th>
                      </tr>
                    </thead>
                    {applyList.map(job => {
                      return (
                        <>
                          <tbody style={{ marginTop: "20px" }} key={job.id}>
                            <tr>
                              <td>{job.companyName}</td>
                              <td style={{ textAlign: "start" }}>
                                {job.location.substr(0, 20)}
                              </td>
                              <td>{job.day.replace(/"/g, "")}</td>
                              <td>
                                {job.startTime}~{job.endTime}
                                <br />({job.time}시간)
                              </td>
                              <td>{job.hourlyWage}</td>
                              <td>{job.monthlyWage}</td>
                              <td>{job.position}</td>
                            </tr>
                          </tbody>
                          <CancelApplyModal
                            CancelApply={CancelApply}
                            jobId={job.id}
                          />
                        </>
                      );
                    })}
                  </table>
                </div>
              </div>
            )}
            <br></br>
            <h2
              style={{
                marginBottom: "10px",
                borderBottom: "ridge",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              지원 결과
            </h2>
            {resultList.length === 0 ? (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                지원 결과가 없습니다
              </div>
            ) : (
              <div className="job-list-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>회사명</th>
                      <th>주소</th>
                      <th>근무요일</th>
                      <th>근무시간</th>
                      <th>시급</th>
                      <th>예상 월급여</th>
                      <th>포지션</th>
                      <th>결과</th>
                    </tr>
                  </thead>
                  {resultList.map((job, number) => {
                    if (statusList[number]) {
                      if (statusList[number].status === "rejected") {
                        return (
                          <>
                            <tbody style={{ marginTop: "20px" }}>
                              <tr key={job.id}>
                                <td>{job.companyName}</td>
                                <td style={{ textAlign: "start" }}>
                                  {job.location.substr(0, 20)}
                                </td>
                                <td>{job.day.replace(/"/g, "")}</td>
                                <td>
                                  {job.startTime}~{job.endTime} ({job.time}
                                  시간)
                                </td>
                                <td>{job.hourlyWage}</td>
                                <td>{job.monthlyWage}</td>
                                <td>{job.position}</td>
                                <td>지원 거절</td>
                              </tr>
                            </tbody>
                            <CancelApplyModal
                              CancelApply={CancelApply}
                              jobId={job.id}
                            />
                          </>
                        );
                      } else if (statusList[number].status === "accepted") {
                        return (
                          <>
                            <tbody style={{ marginTop: "20px" }}>
                              <tr key={job.id}>
                                <td>{job.companyName}</td>
                                <td style={{ textAlign: "start" }}>
                                  {job.location.substr(0, 20)}
                                </td>
                                <td>{job.day.replace(/"/g, "")}</td>
                                <td>
                                  {job.startTime}~{job.endTime} ({job.time}
                                  시간)
                                </td>
                                <td>{job.hourlyWage}</td>
                                <td>{job.monthlyWage}</td>
                                <td>{job.position}</td>
                                <td>지원 승인</td>
                              </tr>
                            </tbody>
                            <CancelApplyModal
                              CancelApply={CancelApply}
                              jobId={job.id}
                            />
                          </>
                        );
                      }
                    }
                  })}
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

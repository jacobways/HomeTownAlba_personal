import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteJobModal from "../components/Modal_DeleteJob";
import RejectApplyModal from "../components/Modal_RejectApply";
import ApplicantInfoModal from "../components/Modal_ApplicantInfo";
import WithdrawCompanyModal from '../components/Modal_WithdrawCompany';

// 사업자 마이페이지
export default function CompanyMyPage () {

  // company 회원 정보 
  const [companyId, setCompanyId] = useState(0)       // Company 테이블의 id이자 Job 테이블의 companyId
  const [companyName, setCompanyName] = useState('')
  const [companyLocation, setCompanyLocation] = useState('')
  const [businessNumber, setBusinessNumber] = useState('')
  const [question, setQuestion] = useState('')

  // company 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)
  const [companyInfoUpdating, setCompanyInfoUpdating] = useState(false)

  // job 정보
  const [jobLocation, setJobLocation] = useState('')

  const [day, setDay] = useState([])
  const [mon, setMon] = useState([])
  const [tue, setTue] = useState([])
  const [wed, setWed] = useState([])
  const [thu, setThu] = useState([])
  const [fri, setFri] = useState([])
  const [sat, setSat] = useState([])
  const [sun, setSun] = useState([])
  const [monChecked, setMonChecked] = useState(false)
  const [tueChecked, setTueChecked] = useState(false)
  const [wedChecked, setWedChecked] = useState(false)
  const [thuChecked, setThuChecked] = useState(false)
  const [friChecked, setFriChecked] = useState(false)
  const [satChecked, setSatChecked] = useState(false)
  const [sunChecked, setSunChecked] = useState(false)

  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [position, setPosition] = useState('')
  const [hourlyWage, setHourlyWage] = useState('')

  // jobList, applicantList, showing 상태 등 상태로 관리
  const [jobList, setJobList] = useState('')
  const [applicantList, setApplicantList] = useState({}) // 객체이며 key 는 idx 값
  const [showingApplicantList, setShowingApplicantList] = useState({})

  const [eventStatus, setEventStatus] = useState(false)  // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state

  // company 회원 정보 수정용
  const companyNameHandler = (event) => {
    setCompanyName(event.target.value)
  }

  const companyLocationHandler = (event) => {
    setCompanyLocation(event.target.value)
  }

  const businessNumberHandler = (event) => {
    setBusinessNumber(event.target.value)
  }

  const questionHandler = (event) => {
    setQuestion(event.target.value)
  }

  // company 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)
  const companyHandler = () => {
    setCompanyInfoUpdating(!companyInfoUpdating)
  }

  // company 업데이트 하기
  const updateCompany = () => {
    axios.patch('http://localhost:5000/company', {
      id:companyId, name: companyName, location: companyLocation, businessNumber, question
    })
    .then(res=>{
      setEventStatus(!eventStatus)
    })
    setCompanyInfoUpdating(!companyInfoUpdating)
  }

  // company 회원 정보 탈퇴 기능 넣기
  const WithdrawCompany = () => {
    axios.delete('link')
  }


  // job 정보 생성 및 수정용

  const jobLocationHandler = (event) => {
    setJobLocation(event.target.value)
  }


  // check된 요일을 day state에 모아주기
  const dayHandler = () => {
    setDay([...mon, ...tue, ...wed, ...thu, ...fri, ...sat, ...sun])
  }

  const monHandler = () => {
    setMonChecked(!monChecked) 
    if(monChecked) {
      setMon(["월"])
    } else {
      setMon([])
    }
    dayHandler()
  }

  const tueHandler = () => {
    setTueChecked(!tueChecked)
    if(tueChecked) {
      setTue(["화"])
    } else {
      setTue([])
    }
    dayHandler()
  }

  const wedHandler = () => {
    setWedChecked(!wedChecked)
    if(wedChecked) {
      setWed(['수'])
    } else {
      setWed([])
    }
    dayHandler()
  }

  const thuHandler = () => {
    setThuChecked(!thuChecked)
    if(thuChecked) {
      setThu(['목'])
    } else {
      setThu([])
    }
    dayHandler()
  }

  const friHandler = () => {
    setFriChecked(!friChecked)
    if(friChecked) {
      setFri(['금'])
    } else {
      setFri([])
    }
    dayHandler()
  }

  const satHandler = () => {
    setSatChecked(!satChecked)
    if(satChecked) {
      setSat(['토'])
    } else {
      setSat([])
    }
    dayHandler()
  }

  const sunHandler = () => {
    setSunChecked(!sunChecked)
    if(sunChecked) {
      setSun(['일'])
    } else {
      setSun([])
    }
    dayHandler()
  }

  const startTimeHandler = (event) => {
    setStartTime(event.target.value)
  }

  const endTimeHandler = (event) => {
    setEndTime(event.target.value)
  }

  const positionHandler = (event) => {
    setPosition(event.target.value)
  }

  const hourlyWageHandler = (event) => {
    setHourlyWage(event.target.value)
  }

  // state에 저장한 정보를 바탕으로 일자리 생성하기
  const createJob = () => {
    if(!jobLocation || day.length===0 || !startTime || !endTime || !position || !hourlyWage) {
      alert('모든 항목에 데이터를 입력해주세요')
    } else {
      axios.post('http://localhost:5000/job', {
        companyId, companyName, location: jobLocation, day, startTime, endTime, position, hourlyWage},
        {withCredentials: true})
      .then(res=>{
        setEventStatus(!eventStatus)
      })
    }
  }

  // 일자리 삭제하기
  const DeleteJob = (id) => {
    axios.delete(`http://localhost:5000/job/${id}`, {withCredentials: true})
    .then(res=>{
      setEventStatus(!eventStatus)
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  // 각 일자리별 지원자를 applicantList state에 저장
  // applicantList는 객체 형태로 key는 idx(jobList 상태의 요소인 job을 map으로 불러올 때 사용되는 index)
  // 값은 res를 통해 불러온 jobSeeker 정보
  // 지원자가 없는 Job은 해당 key(인덱스)와 값이 applicantList 객체에 저장되지 않음
  // applicantList의 형태 예시 : {0: [jobSeeker1, jobSeeker2, JobSeeker3], 1: [JobSeeker1], 3: [Jobseeker4]}
  const openApplicantList = (idx, jobId) => {
    setShowingApplicantList({...showingApplicantList, [idx]:true })
    axios.get(`http://localhost:5000/applicant/jobseeker/${jobId}`, {withCredentials: true})
    .then((res)=> {
      // bracket notation으로는 값이 저장되지 않아 구조분해할당 사용
      if (res.data.data.length !== 0) {
        setApplicantList({...applicantList, [idx]: res.data.data})
      } else {
        setApplicantList({...applicantList, [idx]: null})
      }
    })
    .catch((err)=>{
      console.log(err)
    })    
  }

  // applicantList 닫는 핸들러
  const closeApplicantList = (idx) => {
    setShowingApplicantList({...showingApplicantList, [idx]:false })
  }

  // 자원자의 지원 거절
  const RejectApply = (idx, jobId, jobSeekerId) => {
    axios.delete(`http://localhost:5000/applicant`, 
    {params: {jobId, jobSeekerId}})
    .then(res=>{
      openApplicantList(idx, jobId)
    })
    .catch((err)=>{
      console.log(err)
    })    
  }


  useEffect(()=> {

    // company 정보 받기
    axios.get(`http://localhost:5000/company/${companyId}`, {withCredentials: true})
    .then((res)=>{
      let companyInfo = res.data.data;
      setCompanyName(companyInfo.name)
      setCompanyLocation(companyInfo.location)
      setBusinessNumber(companyInfo.businessNumber)
      setQuestion(companyInfo.question)
    })
    .catch((err)=>{
      console.log(err)
    })    

    
    axios.get(`http://localhost:5000/job/${companyId}`, {withCredentials: true})
    .then((res)=>{
      setJobList(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })    


  }, [eventStatus])





// 구인내역 클릭하면 지원자 현황 표시됨
  return (
  <>
  <h1>사업자 마이페이지</h1>
  <br></br>

  {(!companyInfoUpdating) ? 
        (<>
        <span>{companyName}</span>
        <span>{companyLocation}</span>
        <span>{businessNumber}</span>
        <span>{question}</span>
        <button onClick={companyHandler}>수정</button>
        </>)
      :
        (<>
        <input         
        name="name"
        type="text"
        onChange={companyNameHandler}
        value={companyName}
        />
        <input         
        name="companyLocation"
        type="text"
        onChange={companyLocationHandler}
        value={companyLocation}
        />
        <input         
        name="businessNumber"
        type="text"
        onChange={businessNumberHandler}
        value={businessNumber}
        />
        <input         
        name="question"
        type="text"
        onChange={questionHandler}
        value={question}
        />
        <button onClick={updateCompany}>수정 완료</button>
        </>)
      }

      <br></br>

    <WithdrawCompanyModal WithdrawCompany={WithdrawCompany} id={companyId} />
    <br></br>
    <br></br>

    <h1>일자리 등록</h1>
    <form>
      <label> 주소 :
      <textarea
        name="location"
        onChange={jobLocationHandler}
        rows="3" cols="20"
        />
      </label>
      <label> 근무 요일 : 
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
      <label> 근무 시간 : 
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
      <label> 포지션 : 
      <input
        name="position"
        type="text"
        onChange={positionHandler}
        />
      </label>
      <label> 시급(₩) : 
      <input
        name="hourlyWage"
        type="text"
        onChange={hourlyWageHandler}
        />
      </label>

      {(!jobLocation || day.length===0 || !startTime || !endTime || !position || !hourlyWage) ?
      <>
      <button>제출</button>
      <span>모든 항목을 입력해주세요</span>
      </>
      :
      <input 
      type="submit" 
      value="제출"
      onClick={createJob} />
      }
    </form>

    <br></br>
    <br></br>

    <h1>등록 일자리 목록</h1>
    {/* (페이지를 하나 더 만들기보다는 한 페이지에 만들 수 있게 하기. 무한스크롤도 괜찮음) */}

    {jobList.length===0 ? 
      <h3>일자리 정보를 등록해주세요</h3> : 
      <>
      {jobList.map((job, idx) => {
        return (
          <div key = {idx}>
            <h4>
              주소 : {job.location}
              포지션 : {job.position}
              시급 : {job.hourlyWage}
              요일 : {JSON.parse(job.day)}
              시간 : {job.startTime}~{job.endTime}     
              <DeleteJobModal DeleteJob={DeleteJob} id={job.id} />
            </h4>

            {(!showingApplicantList[idx]) ? 
            <button onClick={()=>{openApplicantList(idx, job.id)}}>지원자 보기</button> : 
            <>
            <button onClick={()=>{closeApplicantList(idx)}}>지원자 숨기기</button>
              { (!applicantList[idx]) ? 
                <h5>아직 지원자가 없습니다</h5> : 
                <table>
                  <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>성별</th>
                    <th></th>
                    <th></th>
                  </tr>
                  {applicantList[idx].map((jobSeeker)=> {
                    return (
                      <tr key = {jobSeeker.id}>
                        <td>{jobSeeker.name}</td>
                        <td>{jobSeeker.age}</td>
                        <td>{jobSeeker.gender}</td>
                        <ApplicantInfoModal jobSeeker={jobSeeker}/>
                        <RejectApplyModal RejectApply={RejectApply} idx={idx} jobId={job.id} jobSeekerId={jobSeeker.id} />
                      </tr>
                    )
                  })}
                </table>
              }
            </>
            }
          </div>
        )
      })}
      </>
    }
  </>
  )
}
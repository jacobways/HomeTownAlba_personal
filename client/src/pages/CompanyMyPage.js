import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 사업자 마이페이지
export default function CompanyMyPage () {

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')

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

  const [jobList, setJobList] = useState('')
  const [applicantList, setApplicantList] = useState({}) // 객체이며 key 는 idx 값

// 회원 정보 탈퇴 기능 넣기
  const Withdrawal = () => {
    axios.delete('link')
  }


  const titleHandler = (event) => {
    setTitle(event.target.value)
  }

  const locationHandler = (event) => {
    setLocation(event.target.value)
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
    if(!title || !location || day.length===0 || !startTime || !endTime || !position || !hourlyWage) {
      alert('모든 항목에 데이터를 입력해주세요')
    } else {
      axios.post('http://localhost:5000/job', {
        title, location, day, startTime, endTime, position, hourlyWage},
        {withCredentials: true})
    }
  }

  // 일자리 삭제하기
  const deleteJob = (id) => {
    axios.delete(`http://localhost:5000/job/${id}`, {withCredentials: true})
    .then(console.log)
    .catch((err)=> {
      console.log(err)
    })
  }

  // 각 일자리별 지원자를 applicantList state에 저장
  // applicantList는 객체 형태로 key는 idx(jobList 상태의 요소인 job을 map으로 불러올 때 사용되는 index)
  // 값은 res를 통해 불러온 jobSeeker 정보
  // 지원자가 없는 Job은 해당 key(인덱스)와 값이 applicantList 객체에 저장되지 않음
  // applicantList의 형태 예시 : {0: [jobSeeker1, jobSeeker2, JobSeeker3], 1: [JobSeeker1], 3: [Jobseeker4]}
  const getApplicantList = (jobId, idx) => {
    axios.get(`http://localhost:5000/applicant/${jobId}`, {withCredentials: true})
    .then((res)=> {
      if (res.data.data.length !== 0) setApplicantList({...applicantList, [idx]: res.data.data})
      // bracket notation으로는 값이 저장되지 않아 구조분해할당 사용
    })
  }

  useEffect(()=> {
    // url : `http://localhost:5000/job/${companyId}`
    axios.get(`http://localhost:5000/job/4`, {withCredentials: true})
    .then((res)=>{
      setJobList(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })    
  }, [])



// 구인내역 클릭하면 지원자 현황 표시됨
  return (
  <>
    <input type="submit" value="회원탈퇴" />
    <br></br>
    <br></br>

    <h1>일자리 등록</h1>
    <form>
      <label> 제목 :
        <input
        name="title"
        type="text"
        onChange={titleHandler}
        />
      </label>
      <label> 주소 :
      <textarea
        name="location"
        onChange={locationHandler}
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
      <input 
      type="submit" 
      value="제출"
      onClick={createJob} />
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
            <h3>{job.title}</h3>
            <h4>
              {job.location}
              {job.position}
              {job.hourlyWage}
              {JSON.parse(job.day)}
              {job.startTime}~{job.endTime}
              <button onClick={()=>{getApplicantList(job.id, idx)}}>지원자 보기</button>
              <button onClick={()=>{deleteJob(job.id)}}>삭제하기</button>
              {/* {getApplicantList(job.id)} 이걸 어떻게 실행시켜야 할까 그것이 관건*/}
            </h4>

            { (!applicantList[idx]) ? 
            <h5>아직 지원자가 없습니다</h5> : 
            <>
              {applicantList[idx].map((applicant)=> {
                return (
                  <div key = {applicant.id}>
                    {applicant.name}
                    {applicant.age}
                    {applicant.gender}
                  </div>
                )
              })}
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
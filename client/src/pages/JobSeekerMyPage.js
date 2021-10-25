import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 구직자 마이페이지
export default function JobSeekerMyPage () {

  // JobSeeker 테이블의 id이자, Career 테이블의 jobSeekerId
  const [jobSeekerId, setJobSeekerId] = useState('')

  // JobSeeker 테이블의 나머지 정보
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [image, setImage] = useState('')
  const [question, setQuestion] = useState('')

  // 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)
  const [jobSeekerInfoUpdating, setJobSeekerInfoUpdating] = useState(false)
  
  // career 정보 모두 불러와 배열로 저장
  const [careerList, setCareerList] = useState([])

  // career 항목 나머지 개별 정보
  const [careerId, setCareerId] = useState('')
  const [company, setCompany] = useState('')
  const [period, setPeriod] = useState('')
  const [position, setPosition] = useState('')

  // 커리어 수정 버튼을 클릭 시, 업데이트 중인 상태를 저장 (키는 idx, 값은 true - 수정중)
  const [careerUpdating, setCareerUpdating] = useState({})
   

  // 회원 탈퇴
  const Withdrawal = () => {
    axios.delete('link')
  }

  // jobSeeker 정보 수정용
  const nameHandler = (event) => {
    setName(event.target.value)
  }

  const ageHandler = (event) => {
    setAge(event.target.value)
  }

  const genderHandler = (event) => {
    setGender(event.target.value)
  }

  const imageHandler = (event) => {
    setImage(event.target.value)
  }

  const questionHandler = (event) => {
    setQuestion(event.target.value)
  }

  // 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)
  const jobSeekerHandler = () => {
    setJobSeekerInfoUpdating(!jobSeekerInfoUpdating)
  }

  // jobSeeker 업데이트 하기
  const updateJobSeeker = () => {
    axios.patch('http://localhost:5000/jobseeker', {
      id:jobSeekerId, name, age, gender, image, question
    })
    setJobSeekerInfoUpdating(!jobSeekerInfoUpdating)
  }

  // jobSeeker 회원 정보 탈퇴 기능 넣기
  const withdrawalJobseeker = () => {
    axios.delete('link')
  }

  // 경력 정보 생성 및 수정 핸들러
  const companyHandler = (event) => {
    setCompany(event.target.value)
  }

  const periodHandler = (event) => {
    setPeriod(event.target.value)
  }

  const positionHandler = (event) => {
    setPosition(event.target.value)
  }

  // 경력 사항을 등록 하는 핸들러
  const createCareer = () => {
    axios.post('http://localhost:5000/career', {
      jobSeekerId,
      company,
      period,
      position
    },
    {withCredentials: true})
    .catch((err)=>{
      console.log(err)
    })    
  }

    // 경력 사항 '수정'을 위한 핸들러 (클릭 시 경력 정보 수정 가능)
    const careerHandler = (idx, id) => {
      
      // 클릭시 update 상태가 true로 바뀌며, 조건부 렌더링 진행
      setCareerUpdating({...careerUpdating, [idx]:true })

      // 수정하려는 커리어 해당 항목이 state에 담기기 (id 기반 axios 요청이 있어야 할 듯?)
      axios.get('http://localhost:5000/career', {params: {id}}, {withCredentials: true})
      .then((res)=>{
        let careerInfo = res.data.data // 객체로 불러옴
        setCareerId(careerInfo.id)
        setCompany(careerInfo.company)
        setPeriod(careerInfo.period)
        setPosition(careerInfo.position)
      })
      .catch((err)=>{
        console.log(err)
      })    
    }

  // update할 내용이 입력된 후에 shubmit 용 핸들러
  const updateCareer = (idx, id) => {
    // 클릭시 해당 idx의 updating이 false 또는 삭제됨
    setCareerUpdating({...careerUpdating, [idx]:false })
    axios.patch('http://localhost:5000/career', {
      id, jobSeekerId, company, period, position
    })
    .catch((err)=>{
      console.log(err)
    })    

  }

  const deleteCareer = (id) => {
    axios.delete(`http://localhost:5000/career/${id}`, {withCredentials:true})
    .then(console.log)
    .catch((err)=>{
      console.log(err)
    })    
  }

  useEffect(()=>{
    
    // JobSeeker 정보 받기

    // axios.get(`http://localhost:5000/jobseeker/${jobSeekerId}`)
    // .then((res)=>{
    //   let jobSeekerInfo = res.data.data
    //   setName(jobSeekerInfo.name)
    //   setAge(jobSeekerInfo.age)
    //   setGender(jobSeekerInfo.gender)
    //   setImage(jobSeekerInfo.image)
    //   setQuestion(jobSeekerInfo.question)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })    

    // Career 정보 받기
    // URL : ttp://localhost:5000/career/${jobSeekerId}
    axios.get(`http://localhost:5000/career/3`,{withCredentials: true})
    .then((res)=>{
      setCareerList(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })    

  }, [])

  return (
    <div>
      <h1>구직자 마이페이지</h1>
      <br></br>
      <h2>회원 정보</h2>
      {(!jobSeekerInfoUpdating) ? 
        (<>
        <span>{name}</span>
        <span>{age}</span>
        <span>{gender}</span>
        <span>{image}</span>
        <span>{question}</span>
        <button onClick={jobSeekerHandler}>수정</button>
        </>)
      :
        (<>
        <input         
        name="name"
        type="text"
        onChange={nameHandler}
        value={name}
        />
        <input         
        name="age"
        type="text"
        onChange={ageHandler}
        value={age}
        />
        <input         
        name="gender"
        type="text"
        onChange={genderHandler}
        value={gender}
        />
        <input         
        name="image"
        type="text"
        onChange={imageHandler}
        value={image}
        />
        <input         
        name="question"
        type="text"
        onChange={questionHandler}
        value={question}
        />
        <button onClick={updateJobSeeker}>수정 완료</button>
        </>)
      }
      <br></br>
      <button onClick={withdrawalJobseeker}>회원탈퇴</button>
      <br></br>
      <br></br>
      <h2>경력 사항</h2>
      {careerList.length===0 ? 
      (<div>등록된 경력 사항이 없습니다.</div>) :
      (<table>
        <tr>
          <th>근무 회사명</th>
          <th>포지션</th>
          <th>기간(월)</th>
          <th></th>
          <th></th>
        </tr>
        {careerList.map((career, idx)=> {
          return (
            <>
            { (!careerUpdating[idx]) ? 
              (
              <tr key={career.id}>
              <td>{career.company}</td>
              <td>{career.position}</td>
              <td>{career.period}</td>
              <button onClick={()=>{careerHandler(idx, career.id)}}>수정</button>
              <button onClick={()=>{deleteCareer(career.id)}}>삭제</button>
              </tr>
              )
              :
              (
                <tr key={career.id}>
                <td>
                  <input         
                  name="company"
                  type="text"
                  onChange={companyHandler}
                  value={company}
                  />
                </td>
                <td>
                  <input         
                  name="position"
                  type="text"
                  onChange={positionHandler}
                  value={position}
                  />
                </td>
                <td>
                  <input         
                  name="period"
                  type="text"
                  onChange={periodHandler}
                  value={period}
                  />
                </td>
                <button onClick={()=>{updateCareer(idx, career.id)}}>
                  수정 완료
                </button>
              </tr>
              )
            }
            </>

          )
      })}
      </table>)
    }
    <h3>경력 사항 등록</h3>
      <form>
        <label>근무 회사명 : </label>
        <input         
        name="company"
        type="text"
        onChange={companyHandler}
        />
        <label>포지션 : </label>
        <input         
        name="position"
        type="text"
        onChange={positionHandler}
        />
        <label>근무 기간(월) : </label>
        <input         
        name="period"
        type="text"
        onChange={periodHandler}
        placeholder="입력예시 : 3"
        />
        <input 
        type="submit" 
        value="등록"
        onClick={createCareer} />
      </form>

    </div>
  )
}
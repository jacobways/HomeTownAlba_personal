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
  
  // career 정보 모두 불러와 배열로 저장
  const [careerList, setCareerList] = useState([])

  // career 항목 나머지 개별 정보
  const [careerId, setCareerId] = useState('')
  const [company, setCompany] = useState('')
  const [period, setPeriod] = useState('')
  const [position, setPosition] = useState('')

  // 커리어 수정 버튼을 눌러 업데이트 중인 상태
  const [careerUpdating, setCareerUpdating] = useState({})
   

  // 회원 탈퇴
  const Withdrawal = () => {
    axios.delete('link')
  }

  const updateJobSeeker = (jobSeekerId) => {
    
  }

  const companyHandler = (event) => {
    setCompany(event.target.value)
  }

  const periodHandler = (event) => {
    setPeriod(event.target.value)
  }

  const positionHandler = (event) => {
    setPosition(event.target.value)
  }


  const createCareer = () => {
    axios.post('http://localhost:5000/career', {
      jobSeekerId,
      company,
      period,
      position
    },
    {withCredentials: true})
  }

    // 업데이트 하기 위한 '수정' 버튼 클릭
    const careerHandler = (idx, id) => {
      // 클릭시 updated창 true
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
      
      // 수정 시 수정한 내용이 state에 담김 : create 때와 동일 핸들러 사용
      

    }

  // update할 내용이 입력된 후에 shubmit 용 핸들러
  const updateCareer = (idx) => {
    // 클릭시 해당 idx의 updating이 false 또는 삭제됨
    setCareerUpdating({...careerUpdating, [idx]:false })

  }



  const deleteCareer = (id) => {
    axios.delete(`http://localhost:5000/career/${id}`, {withCredentials:true})
  }

  useEffect(()=>{
    
    // JobSeeker 정보 받기
    // axios.get

    // Career 정보 받기
    // URL : ttp://localhost:5000/career/${jobSeekerId}
    axios.get(`http://localhost:5000/career/3`,{withCredentials: true})
    .then((res)=>{
      setCareerList(res.data.data)
    })

  }, [])

  return (
    <div>
      <h1>구직자 마이페이지</h1>
      <br></br>
      <h2>회원 정보 수정</h2>
      <br></br>
      <h2>경력 사항</h2>
      {careerList.length===0 ? 
      <div>등록된 경력 사항이 없습니다.</div> :
      <table>
        <tr>
          <th>근무 회사명</th>
          <th>포지션</th>
          <th>기간(월)</th>
          <th></th>
          <th></th>
        </tr>
      {careerList.map((career, idx)=> {
        return (
          <tr key={career.id}>
            <td>{career.company}</td>
            <td>{career.position}</td>
            <td>{career.period}</td>
            <button onClick={()=>{careerHandler(idx, career.id)}}>수정</button>
            <button onClick={()=>{deleteCareer(career.id)}}>삭제</button>
          </tr>
        )
      })}
      </table>
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
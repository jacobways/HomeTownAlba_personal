import axios from "axios";
import React, { useState, useEffect } from "react";

import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;


export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 400px;
    > div.close_btn {
      margin-top: 5px;
      cursor: pointer;
    }
    > div.desc {
      margin-top: 25px;
      color: #4000c7;
    }
`;

function ApplicantInfo({ jobSeeker }) {
  const [isOpen, setIsOpen] = useState(false);
  const [careerList, setCareerList] = useState([])
  
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };



  useEffect(()=>{
    
    // Career 정보 받기
    axios.get(`http://localhost:5000/career/${jobSeeker.id}`,{withCredentials: true})
    .then((res)=>{
      setCareerList(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })  
  }, [])
  

  return (
    <>
        <button onClick={openModalHandler}>
          {isOpen === false ? '추가정보' : '정보 확인중'}
        </button>
        {isOpen === true ? <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <span onClick={openModalHandler} className='close-btn'>&times;</span>
            <div>{jobSeeker.image}</div>
            <span>이름 : {jobSeeker.name}</span>
            <span>나이 : {jobSeeker.age}</span>
            <span>성별 : {jobSeeker.gender}</span>
            {(careerList.length===0) ? 
              <div>경력 정보가 없습니다</div> :
              <>
              <h4>경력사항</h4>
              <table>
                <tr>
                  <th>근무 회사</th>
                  <th>포지션</th>
                  <th>기간(월)</th>
                </tr>
                {careerList.map((career)=>{
                  return (
                    <tr>
                      <td>{career.company}</td>
                      <td>{career.position}</td>
                      <td>{career.period}</td>
                    </tr>
                  )
                })}
              </table>
              </>
            }
          </ModalView>
        </ModalBackdrop> : null}
    </>
  );
}

export default ApplicantInfo;

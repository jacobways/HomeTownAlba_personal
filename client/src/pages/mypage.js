import React, { useState } from "react";
import axios from "axios";

// 사업자 마이페이지
export default function MyPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [period, setPeriod] = useState("");
  const [position, setPosition] = useState("");
  const [hourlyWage, setHourlyWage] = useState("");

  // 회원 정보 탈퇴 기능 넣기
  const Withdrawal = () => {
    // axios.delete('link')
    axios
      .delete("http://localhost:5000/jobseeker", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  };

  // 일자리 등록하기 박스 만들기
  // 제목
  // 근무 장소
  // 근무 일시 -> 요일, 시간을 배열로 넣어야 하지 않을까?
  // 근무 포지션
  // 시급

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const locationHandler = (event) => {
    setLocation(event.target.value);
  };

  const periodHandler = (event) => {
    setPeriod(event.target.value);
  };

  const positionHandler = (event) => {
    setPosition(event.target.value);
  };

  const hourlyWageHandler = (event) => {
    setHourlyWage(event.target.value);
  };

  // 구인내역 확인하기

  // 구인내역 클릭하면 지원자 현황 표시됨
  return (
    <>
      <input type="submit" value="회원탈퇴" />
      <br></br>
      <br></br>

      <h1>일자리 등록</h1>
      <form>
        <label>
          {" "}
          제목 :
          <input name="title" type="text" onChange={titleHandler} />
        </label>
        <label>
          {" "}
          장소 :
          <input name="location" type="text" onChange={locationHandler} />
        </label>
        <label>
          {" "}
          근무 요일과 시간 :
          <input name="period" type="text" onChange={periodHandler} />
        </label>
        <label>
          {" "}
          포지션 :
          <input name="position" type="text" onChange={positionHandler} />
        </label>
        <label>
          {" "}
          시급 :
          <input name="hourlyWage" type="text" onChange={hourlyWageHandler} />
        </label>
        <input type="submit" value="제출" />
      </form>
      <h1>등록 일자리 목록</h1>
      {/* (페이지를 하나 더 만들기보다는 한 페이지에 만들 수 있게 하기. 무한스크롤도 괜찮음) */}
      <h3>서빙</h3>
      <table>
        <tr>
          <td>지원자 목록</td>
        </tr>
        <tr>
          <td>김지윤1</td>
          <td>나이</td>
          <td>정보보기</td>
          <td>수락 후 채팅</td>
          <td>거절</td>
        </tr>
        <tr>
          <td>김지윤2</td>
          <td>나이</td>
          <td>정보보기</td>
          <td>수락 후 채팅</td>
          <td>거절</td>
        </tr>
      </table>
      <h3>주방</h3>
      <table>
        <tr>
          <td>지원자 목록</td>
        </tr>
        <tr>
          <td>김지윤1</td>
          <td>나이</td>
          <td>정보보기</td>
          <td>수락 후 채팅</td>
          <td>거절</td>
        </tr>
        <tr>
          <td>김지윤2</td>
          <td>나이</td>
          <td>정보보기</td>
          <td>수락 후 채팅</td>
          <td>거절</td>
        </tr>
      </table>
      <h3>청소</h3>
      <table>
        <tr>
          <td>지원자 목록 없음</td>
        </tr>
      </table>
    </>
  );
}

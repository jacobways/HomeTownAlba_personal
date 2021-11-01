import React, { useState } from "react";

function GuestMyPage() {
  const [GuestStatus, setGuestStatus] = useState("jobseeker");

  const JobSeekrHandler = (e) => {
    setGuestStatus("jobseeker");
  };
  const CompanyHandler = (e) => {
    setGuestStatus("company");
  };
  if (GuestStatus === "jobseeker") {
    return (
      <>
        <button onClick={JobSeekrHandler}>구직자 Guest MyPage</button>
        <button onClick={CompanyHandler}>사업자 Guest MyPage</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>구직자 마이페이지</h1>
          <br></br>
          <h2>회원 정보</h2>
          <span>이름 : 김아무개</span>
          <span>나이 : 20</span>
          <span>성별 : 남자</span>
          <span>구직자 사진 : 이미지</span>
          <span>본인의 초등학교는? 매탄초등학교</span>
          <button>수정</button>
          <button>수정 완료</button>
          <button>회원탈퇴</button>
          <br></br>
          <br></br>
          <h2>경력 사항</h2>
          <table>
            <tr>
              <th>근무 회사명</th>
              <th>포지션</th>
              <th>기간(월)</th>
              <th></th>
              <th></th>
            </tr>
          </table>
          <h3>경력 사항 등록</h3>
          <form>
            <label>근무 회사명 : </label>
            <input name="company" type="text" />
            <label>포지션 : </label>
            <input name="position" type="text" />
            <label>근무 기간(월) : </label>
            <input name="period" type="text" placeholder="입력예시 : 3" />
            <input type="submit" value="등록" />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button onClick={JobSeekrHandler}>구직자 Guest MyPage</button>
        <button onClick={CompanyHandler}>사업자 Guest MyPage</button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>사업자 마이페이지</h1>
          <br></br>
          <span>이름 : (주)당근알바</span>
          <span>회사 위치 : 당근시 당근구 당근동</span>
          <span>사업자 번호 : 111-222-3333</span>
          <span>자사의 대표 상품 : HomeTownAlba</span>
          <button>수정</button>
          <button>수정 완료</button>
          <button>회원탈퇴</button>

          <h1>일자리 등록</h1>
          <form>
            <label>
              제목 :
              <input name="title" type="text" />
            </label>
            <label>
              주소 :
              <textarea name="location" rows="3" cols="20" />
            </label>
            <label>
              근무 요일 :
              <input name="day" id="mon" type="checkbox" />
              월
              <input name="day" id="tue" type="checkbox" />
              화
              <input name="day" id="wed" type="checkbox" />
              <label for="wed">수</label>
              <input name="day" id="thu" type="checkbox" />
              <label for="thu">목</label>
              <input name="day" id="fri" type="checkbox" />
              <label for="fri">금</label>
              <input name="day" id="sat" type="checkbox" />
              <label for="sat">토</label>
              <input name="day" id="sun" type="checkbox" />
              <label for="sun">일</label>
            </label>
            <label>
              {" "}
              근무 시간 :
              <input name="startTime" type="time" placeholder="시작 시간" />
              <input name="endTime" type="time" placeholder="끝 시간" />
            </label>
            <label>
              {" "}
              포지션 :
              <input name="position" type="text" />
            </label>
            <label>
              {" "}
              시급(₩) :
              <input name="hourlyWage" type="text" />
            </label>

            <button>제출</button>
            <span>모든 항목을 입력해주세요</span>
          </form>
          <br></br>
          <br></br>

          <h1>등록 일자리 목록</h1>
          <h3>일자리 정보를 등록해주세요</h3>
        </div>
      </>
    );
  }
}

export default GuestMyPage;

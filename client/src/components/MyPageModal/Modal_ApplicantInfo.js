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
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  border-radius: 10px;
  background-color: #ffffff;
  width: 300px;
  height: 500px;
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
  const [careerList, setCareerList] = useState([]);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Career 정보 받기
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/career/${jobSeeker.id}`, {
        withCredentials: true,
      })
      .then(res => {
        setCareerList(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <button id="left" className="login-btn" onClick={openModalHandler}>
        {isOpen === false ? "추가정보" : "정보 확인중"}
      </button>
      {isOpen === true ? (
        <ModalBackdrop onClick={openModalHandler}>
          <ModalView onClick={e => e.stopPropagation()}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <button
                onClick={openModalHandler}
                // className="close-btn"
                style={{
                  border: "none",
                  cursor: "pointer",
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: "pink",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                x
              </button>
              <h4
                style={{
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                [지원자 정보]
              </h4>
              <img
                src={jobSeeker.image}
                style={{ width: "150px", height: "150px" }}
              />
              <span style={{ margin: "5px", fontSize: "12px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px" }}>이름</span>{" "}
                : {jobSeeker.name}
              </span>
              <span style={{ margin: "5px", fontSize: "12px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px" }}>나이</span>{" "}
                : {jobSeeker.age}
              </span>
              <span style={{ margin: "5px", fontSize: "12px" }}>
                <span style={{ fontWeight: 600, fontSize: "15px" }}>성별</span>{" "}
                : {jobSeeker.gender}
              </span>
            </div>
            {careerList.length === 0 ? (
              <div>경력 정보가 없습니다</div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "1rem",
                }}
              >
                <h4
                  style={{
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  [경력사항]
                </h4>
                <table>
                  <thead>
                    <tr
                      style={{
                        width: "200px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <th
                        style={{
                          fontSize: "15px",
                          textAlign: "center",
                        }}
                      >
                        근무 회사
                      </th>
                      <th style={{ fontSize: "15px", textAlign: "center" }}>
                        포지션
                      </th>
                      <th style={{ fontSize: "15px", textAlign: "center" }}>
                        기간(월)
                      </th>
                    </tr>
                  </thead>
                  {careerList.map(career => {
                    return (
                      <tbody style={{ marginTop: "10px" }}>
                        <tr>
                          <td style={{ fontSize: "13px" }}>{career.company}</td>
                          <td style={{ fontSize: "13px" }}>
                            {career.position}
                          </td>
                          <td style={{ fontSize: "13px" }}>{career.period}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            )}
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </>
  );
}

export default ApplicantInfo;

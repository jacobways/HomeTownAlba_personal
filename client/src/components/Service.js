import React, { useEffect } from "react";
import "../pages/LandingPage_CSS/Service.css";

function Service() {
  useEffect(() => {
    let target = document.querySelector("#typing");

    function randomString() {
      let stringArr = [
        "하루 종일 알바만 찾다가 지치셨다구요??",
        "내 주변 알바만 보고 싶으시다구요??",
        "원하지 않은 배너가 너무 많다구요??",
        "저희 홈 타운 알바는 필요한 정보만 제공합니다",
      ];
      let selectString =
        stringArr[Math.floor(Math.random() * stringArr.length)];

      let selectStringArr = selectString.split("");

      return selectStringArr;
    }

    function resetTyping() {
      target.textContent = "";
      dynamic(randomString());
    }

    function dynamic(randomArr) {
      if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
          dynamic(randomArr);
        }, 100);
      } else {
        setTimeout(resetTyping, 2500);
      }
    }

    dynamic(randomString());

    function blink() {
      target.classList.toggle("active");
    }
    setInterval(blink, 500);
  }, []);
  return (
    <div className="service-container">
      <div className="service-wrapper">
        <p>지도에서 쉽게 찾는</p>
        <p>" 우리 동네 "</p>
        <p>알바 구하기</p>
        <div className="typing-wrapper">
          <span>
            <p id="typing" className="typing-text"></p>
          </span>
        </div>
        <h1 className="service-scroll">
          <i className="fas fa-angle-double-down"></i>
        </h1>
      </div>
    </div>
  );
}

export default Service;

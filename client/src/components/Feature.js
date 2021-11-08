import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../pages/LandingPage_CSS/Feature.css";

function Feature() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="feature-container">
      <div className="feature-wrapper">
        <div className="box-contanier">
          <div className="boxes" data-aos="fade-right">
            <div className="feature-info-gif-01"></div>
            <div className="feature-info-01">
              <h1>지도에서 알바 찾고</h1>
              <br></br>
              <h1>바로 지원하세요</h1>
              <br></br>
              <p>지도를 이용한 내 주변 알바찾기</p>
            </div>
          </div>
          <div className="boxes" data-aos="fade-left">
            <div className="feature-info-02">
              <h1>마이페이지에서</h1>
              <br></br>
              <h1>지원 내역을</h1>
              <br></br>
              <h1>쉽게 관리하세요</h1>
              <br></br>
              <p>지원한 내역과 경력 관리가 수월해요</p>
            </div>
            <div className="feature-info-gif-02"></div>
          </div>
          <div className="boxes" data-aos="fade-up">
            <div className="feature-info-gif-03"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;

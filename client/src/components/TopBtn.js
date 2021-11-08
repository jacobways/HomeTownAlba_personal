import React, { useState, useEffect } from "react";
import "../pages/LandingPage_CSS/TopBtn.css";

function TopBtn() {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const btnStatusHandler = () => {
    //y값 초기화
    setScrollY(window.pageYOffset);
    if (scrollY > 704) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const topBtnHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const effector = () => {
      window.addEventListener("scroll", btnStatusHandler);
    };
    effector();
    return () => {
      window.removeEventListener("scroll", btnStatusHandler);
    };
  });

  return (
    <>
      <button
        className={btnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={topBtnHandler} // 버튼 클릭시 함수 호출
      >
        TOP
      </button>
    </>
  );
}

export default TopBtn;
